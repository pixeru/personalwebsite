"use client";
import React, { useEffect, useRef } from 'react';

function RenderName() {
    return (
      <div className="name-container relative z-10 p-4">
        <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center">
          Hi! I&apos;m Joshua Prayogo. 
          <br/> 
          <div className="text-white text-xl sm:text-2xl mt-2">
            I&apos;m a Software / Game Developer.
          </div>
        </div>
      </div>
    );
}

interface ShootingStarInterface {
    element: HTMLDivElement;
    reset: () => void;
  }
  
  function CosmicTravelBackground() {
    const sceneRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const scene = sceneRef.current;
      if (!scene) return;
  
      const shootingStars: ShootingStarInterface[] = [];
      const shootingStarCount = 20;
  
      class ShootingStar implements ShootingStarInterface {
        element: HTMLDivElement;
        private scene: HTMLDivElement;
  
        constructor(scene: HTMLDivElement) {
          this.scene = scene;
          this.element = document.createElement('div');
          this.element.className = 'shooting-star';
          this.reset();
          this.scene.appendChild(this.element);
        }
  
        reset() {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = startX - 50 - Math.random() * 50;
          const endY = startY + 50 + Math.random() * 50;
          const animationDuration = 1 + Math.random();
          this.element.style.setProperty('--start-x', `${startX}vw`);
          this.element.style.setProperty('--start-y', `${startY}vh`);
          this.element.style.setProperty('--end-x', `${endX}vw`);
          this.element.style.setProperty('--end-y', `${endY}vh`);
          this.element.style.setProperty('--duration', `${animationDuration}s`);
          this.element.style.animation = 'none';
          this.element.offsetHeight; // Trigger reflow
          this.element.style.animation = `shoot var(--duration) linear`;
        }
      }
  
      for (let i = 0; i < shootingStarCount; i++) {
        const star = new ShootingStar(scene);
        shootingStars.push(star);
      }
  
      const animationEndHandler = (event: AnimationEvent) => {
        if (event.target instanceof HTMLElement && event.target.className === 'shooting-star') {
          const star = shootingStars.find(s => s.element === event.target);
          if (star) star.reset();
        }
      };
  
      scene.addEventListener('animationend', animationEndHandler);
  
      return () => {
        scene.removeEventListener('animationend', animationEndHandler);
        shootingStars.forEach(star => star.element.remove());
      };
    }, []);
  
    return (
      <div ref={sceneRef} className="scene">
        {[...Array(200)].map((_, i) => (
          <div key={i} className="twinkling-star" style={{
            '--delay': `${Math.random() * 5}s`,
            '--duration': `${3 + Math.random() * 2}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--scale': `${0.1 + Math.random() * 0.9}`
          } as React.CSSProperties} />
        ))}
      </div>
    );
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
          }
          .scene {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background-image: 
              radial-gradient(circle at 40% 50%, #610b4b 0%, #a30d8a00 40%),
              radial-gradient(circle at 65% 60%, #420a50 0%, #580e7500 45%),
              radial-gradient(circle at 40% 60%, #076066 0%, #17777700 45%);
            background-blend-mode: screen;
            pointer-events: none;
          }
          .twinkling-star {
            position: absolute;
            width: 1px;
            height: 1px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
            animation: twinkle var(--duration) infinite both;
            animation-delay: var(--delay);
            top: var(--y);
            left: var(--x);
          }
          .shooting-star {
            position: absolute;
            width: 1px;
            height: 1px;
            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
            transform: rotate(-45deg);
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0; transform: translateZ(0) scale(0.1); }
            10%, 90% { opacity: 1; transform: translateZ(0) scale(var(--scale)); }
          }
          @keyframes shoot {
            0% {
              transform: translate(var(--start-x), var(--start-y)) rotate(-45deg) scale(0);
              opacity: 0;
            }
            5% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translate(var(--end-x), var(--end-y)) rotate(-45deg) scale(1);
              opacity: 0;
            }
          }
          .name-container {
            position: relative;
          }
          .name-container::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 120%;
            height: 120%;
            background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%);
            z-index: -1;
            opacity: 0.5;
            pointer-events: none;
          }
          @media (max-width: 640px) {
            .shooting-star {
              width: 1px;
              height: 1px;
            }
          }
          @media (min-width: 641px) and (max-width: 1024px) {
            .shooting-star {
              width: 1.5px;
              height: 1.5px;
            }
          }
          @media (min-width: 1025px) {
            .shooting-star {
              width: 2px;
              height: 2px;
            }
          }
        `}</style>
        <div className="relative h-screen w-full flex items-center justify-center">
          <CosmicTravelBackground />
          <RenderName />
        </div>
      </>
    );
}


  
  