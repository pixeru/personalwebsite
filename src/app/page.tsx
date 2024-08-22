"use client";
import React, { useEffect } from 'react';

function RenderName() {
  return <div className="text-white z-10 relative">asd</div>;
}

function CosmicTravelBackground() {
  useEffect(() => {
    const scene = document.querySelector('.scene');
    const createDiv = () => {
      for (let i = 0; i < 210; i++) {
        const div = document.createElement('div');
        scene.appendChild(div);
      }
    };
    createDiv();

    const stars = document.querySelectorAll('.scene > div');
    stars.forEach(star => {
      let x = `${Math.random() * 200}vmax`;
      let y = `${Math.random() * 100}vh`;
      let z = `${Math.random() * 200 - 100}vmin`;
      let rx = `${Math.random() * 360}deg`;
      star.style.setProperty('--x', x);
      star.style.setProperty('--y', y);
      star.style.setProperty('--z', z);
      star.style.setProperty('--rx', rx);
      let delay = `${Math.random() * 1.5}s`;
      star.style.animationDelay = delay;
    });
  }, []);

  return <main className="scene"></main>;
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
          top: 0%;
          left: 0%;
          animation: animate 1.5s infinite ease-in;
          background: #fff;
          box-shadow: 0 0 20px rgb(10, 239, 255);
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