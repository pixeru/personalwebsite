"use client";
import React, { useEffect, useRef, useState } from 'react';

function RenderName() {
    const [isHovered, setIsHovered] = useState(false);

    const iconStyle = {
        transition: 'transform 0.3s ease-in-out',
        transform: isHovered ? 'scale(1.2)' : 'scale(1)',
        display: 'inline-block',
        verticalAlign: 'middle',
        cursor: 'pointer'
    };

    return (
        <div className="relative z-10 p-4">
            <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center">
                Hi! I&apos;m Joshua Prayogo. 
                <br/> 
                <div className="text-white text-xl sm:text-2xl mt-2">
                    I&apos;m a Software / Game Developer.
                    <br/>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512" 
                        className="w-6 h-6 ml-2"
                        style={iconStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => window.open('https://www.linkedin.com/in/joshua-prayogo-b8a057261/', '_blank')}
                    >
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
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
        }
        .hero-section {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }
        .scene {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 40% 50%, #610b4b 0%, #a30d8a00 40%),
            radial-gradient(circle at 65% 60%, #420a50 0%, #580e7500 45%),
            radial-gradient(circle at 40% 60%, #076066 0%, #17777700 45%);
          background-blend-mode: screen;
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
          .portfolio-section {
            background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(43,43,43,1) 80%);
            min-height: 100vh;
            padding: 2rem;
            color: white;
          }
          .transition-transform {
            transition-property: transform;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
          }  
          .scale-110 {
                transform: scale(1.1);
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
        <div className="hero-section">
          <CosmicTravelBackground />
          <div className="flex items-center justify-center h-full">
            <RenderName />
          </div>
        </div>
        <div className="portfolio-section">
          <h2 className="text-3xl font-bold mb-8">My Portfolio</h2>
          {/* Add your portfolio content here */}
        </div>
      </>
    );
}


  
  