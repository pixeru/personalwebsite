"use client";
import React, { useEffect, useRef } from 'react';

function RenderName() {
  return <div className="text-white z-10 relative">asd</div>;
}

function CosmicTravelBackground() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const stars = [];
    const starCount = 210;

    class Star {
      constructor() {
        this.element = document.createElement('div');
        this.reset();
        scene.appendChild(this.element);
      }

      reset() {
        this.x = Math.random() * 200;
        this.y = Math.random() * 100;
        this.z = Math.random() * 200 - 100;
        this.rx = Math.random() * 360;
        this.animationDuration = 1.5 + Math.random() * 1.5;
        this.animationDelay = Math.random() * 1.5;
      }

      update() {
        this.element.style.setProperty('--x', `${this.x}vmax`);
        this.element.style.setProperty('--y', `${this.y}vh`);
        this.element.style.setProperty('--z', `${this.z}vmin`);
        this.element.style.setProperty('--rx', `${this.rx}deg`);
        this.element.style.animation = `animate ${this.animationDuration}s infinite ease-in ${this.animationDelay}s`;
      }
    }

    for (let i = 0; i < starCount; i++) {
      const star = new Star();
      stars.push(star);
      star.update();
    }

    const resetStar = (star) => {
      star.reset();
      star.update();
    };

    const animationEndHandler = (event) => {
      resetStar(stars.find(star => star.element === event.target));
    };

    scene.addEventListener('animationend', animationEndHandler);

    return () => {
      scene.removeEventListener('animationend', animationEndHandler);
      stars.forEach(star => star.element.remove());
    };
  }, []);

  return <main ref={sceneRef} className="scene"></main>;
}

export default function Home() {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          background: #000;
          overflow: hidden;
          background-image: 
            radial-gradient(circle at 40% 50%, #610b4b 0%, #a30d8a00 40%),
            radial-gradient(circle at 65% 60%, #420a50 0%, #580e7500 45%),
            radial-gradient(circle at 40% 60%, #076066 0%, #17777700 45%);
          background-blend-mode: screen;
        }
        .scene {
          height: 100vh;
          width: 100%;
          overflow: hidden;
          perspective: 10vmin;
        }
        .scene div {
          width: 1.5vmin;
          height: 1.5vmin;
          transform: 
            translateZ(-100vmin)
            rotateY(90deg)
            rotateX(var(--rx))
            translateZ(var(--x))
            scaleX(1);
          position: absolute;
          top: var(--y);
          left: 0;
          background: #fff;
          box-shadow: 0 0 20px rgb(10, 239, 255);
          will-change: transform, opacity;
        }
        @keyframes animate {
          0%, 90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: 
              translateZ(0vmin)
              rotateY(90deg)
              rotateX(var(--rx))
              translateZ(var(--x))
              scaleX(6);
          }
        }
      `}</style>
      <div className="relative h-screen w-full">
        <CosmicTravelBackground />
        <div className="absolute inset-0 flex items-center justify-center">
          <RenderName />
        </div>
      </div>
    </>
  );
}