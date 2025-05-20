"use client";

import { useEffect, useRef } from "react";
import { mat4, mat3 } from "gl-matrix";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const vertexShaderSource = `
      attribute vec3 a_coords;
      attribute vec2 a_texcoords;
      uniform mat4 u_transformMatrix;
      uniform mat3 u_normalMatrix;
      uniform vec3 u_normal;
      uniform vec3 u_diffuse;
      varying vec4 v_color;
      varying vec2 v_texcoords;
      void main() {
        vec3 N = normalize(u_normalMatrix * u_normal);
        v_color = vec4(abs(N.z) * u_diffuse, 1.0);
        v_texcoords = a_texcoords;
        vec4 coords4 = vec4(a_coords, 1.0);
        gl_Position = u_transformMatrix * coords4;
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      varying vec4 v_color;
      varying vec2 v_texcoords;
      uniform sampler2D u_texture;
      void main() {
        gl_FragColor = v_color * texture2D(u_texture, v_texcoords);
      }
    `;

    const textureURLs = [
      "https://cdn.glitch.global/db01f8c0-ec61-4c43-beb1-5ec52f4550a2/posz.jpg?v=1680051001721",
      "https://cdn.glitch.global/db01f8c0-ec61-4c43-beb1-5ec52f4550a2/posx.jpg?v=1680050998020",
      "https://cdn.glitch.global/db01f8c0-ec61-4c43-beb1-5ec52f4550a2/negz.jpg?v=1680050996017",
      "https://cdn.glitch.global/db01f8c0-ec61-4c43-beb1-5ec52f4550a2/negx.jpg?v=1680050982292",
      "https://cdn.glitch.global/db01f8c0-ec61-4c43-beb1-5ec52f4550a2/posy.jpg?v=1680050999717",
      "https://cdn.glitch.global/db01f8c0-ec61-4c43-beb1-5ec52f4550a2/negy.jpg?v=1680050992911"
    ];

    let gl: WebGLRenderingContext;
    let rotateX = 0, rotateY = 0, rotateZ = 0;
    let uTransformMatrixLoc: WebGLUniformLocation;
    let uNormalMatrixLoc: WebGLUniformLocation;
    let textureObjects: WebGLTexture[] = [];
    let texturesLoaded = 0;

    const projection = mat4.create();
    const modelview = mat4.create();
    const modelviewProj = mat4.create();
    const normalMatrix = mat3.create();

    const requestCORSIfNotSameOrigin = (img: HTMLImageElement, url: string) => {
      if (new URL(url, window.location.href).origin !== window.location.origin) {
        img.crossOrigin = "";
      }
    };

    const createProgram = (gl: WebGLRenderingContext, vShader: string, fShader: string) => {
      const vsh = gl.createShader(gl.VERTEX_SHADER)!;
      gl.shaderSource(vsh, vShader);
      gl.compileShader(vsh);
      if (!gl.getShaderParameter(vsh, gl.COMPILE_STATUS)) {
        throw new Error("Vertex shader error: " + gl.getShaderInfoLog(vsh));
      }
      const fsh = gl.createShader(gl.FRAGMENT_SHADER)!;
      gl.shaderSource(fsh, fShader);
      gl.compileShader(fsh);
      if (!gl.getShaderParameter(fsh, gl.COMPILE_STATUS)) {
        throw new Error("Fragment shader error: " + gl.getShaderInfoLog(fsh));
      }
      const prog = gl.createProgram()!;
      gl.attachShader(prog, vsh);
      gl.attachShader(prog, fsh);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw new Error("Linking error: " + gl.getProgramInfoLog(prog));
      }
      return prog;
    };

    const drawSquare = () => {
      mat4.multiply(modelviewProj, projection, modelview);
      gl.uniformMatrix4fv(uTransformMatrixLoc, false, modelviewProj);
      mat3.normalFromMat4(normalMatrix, modelview);
      gl.uniformMatrix3fv(uNormalMatrixLoc, false, normalMatrix);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    };

    const draw = () => {
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      mat4.lookAt(modelview, [0, 0, 10], [0, 0, 0], [0, 1, 0]);
      mat4.rotateX(modelview, modelview, rotateX);
      mat4.rotateY(modelview, modelview, rotateY);
      mat4.rotateZ(modelview, modelview, rotateZ);

      const saveMV = mat4.clone(modelview);

      [0, 1, 2, 3, 4, 5].forEach(i => {
        mat4.copy(modelview, saveMV);
        if (i === 1) mat4.rotateY(modelview, modelview, Math.PI / 2);
        if (i === 2) mat4.rotateY(modelview, modelview, Math.PI);
        if (i === 3) mat4.rotateY(modelview, modelview, -Math.PI / 2);
        if (i === 4) mat4.rotateX(modelview, modelview, -Math.PI / 2);
        if (i === 5) mat4.rotateX(modelview, modelview, Math.PI / 2);
        gl.bindTexture(gl.TEXTURE_2D, textureObjects[i]);
        drawSquare();
      });
    };

    const initGL = () => {
      gl.enable(gl.DEPTH_TEST);

      const prog = createProgram(gl, vertexShaderSource, fragmentShaderSource);
      gl.useProgram(prog);

      gl.uniform3f(gl.getUniformLocation(prog, "u_normal"), 0, 0, 1);
      gl.uniform3f(gl.getUniformLocation(prog, "u_diffuse"), 1, 1, 1);

      const coordsBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1, 1,-1,1, 1,1,1, -1,1,1]), gl.STATIC_DRAW);
      const aCoordsLoc = gl.getAttribLocation(prog, "a_coords");
      gl.vertexAttribPointer(aCoordsLoc, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aCoordsLoc);

      const texCoordsBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordsBuf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0,0, 1,0, 1,1, 0,1]), gl.STATIC_DRAW);
      const aTexCoordsLoc = gl.getAttribLocation(prog, "a_texcoords");
      gl.vertexAttribPointer(aTexCoordsLoc, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aTexCoordsLoc);

      mat4.perspective(projection, Math.PI / 8, 1, 5, 15);

      uTransformMatrixLoc = gl.getUniformLocation(prog, "u_transformMatrix")!;
      uNormalMatrixLoc = gl.getUniformLocation(prog, "u_normalMatrix")!;
      gl.uniform1i(gl.getUniformLocation(prog, "u_texture"), 0);

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);

      textureURLs.forEach((url, i) => {
        const texture = gl.createTexture()!;
        textureObjects.push(texture);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([200, 200, 200, 255]));

        const img = new Image();
        img.onload = () => {
          gl.bindTexture(gl.TEXTURE_2D, texture);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
          gl.generateMipmap(gl.TEXTURE_2D);
          texturesLoaded++;
          if (texturesLoaded === 6) draw();
        };
        requestCORSIfNotSameOrigin(img, url);
        img.src = url;
      });
    };

    const canvas = canvasRef.current;
    if (!canvas) return;
    gl = canvas.getContext("webgl")!;
    if (!gl) return;

    initGL();
    draw();

    const keyHandler = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft": rotateY -= 0.05; break;
        case "ArrowRight": rotateY += 0.05; break;
        case "ArrowUp": rotateX -= 0.05; break;
        case "ArrowDown": rotateX += 0.05; break;
        case "PageUp": rotateZ += 0.05; break;
        case "PageDown": rotateZ -= 0.05; break;
        case "Home":
        case "Enter": rotateX = rotateY = rotateZ = 0; break;
        default: return;
      }
      e.preventDefault();
      draw();
    };

    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">A Textured Cube with Basic Lighting</h2>
      <p>Use arrow keys, PageUp, and PageDown to rotate. Home or Enter resets.</p>
      <canvas ref={canvasRef} width={600} height={600} className="bg-black" />
    </div>
  );
}
