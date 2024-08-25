"use client";
import React, { useEffect, useRef, useState } from 'react';


function RenderName() {
  const [linkedInHovered, setLinkedInHovered] = useState(false);
  const [mediumHovered, setMediumHovered] = useState(false);

  const getIconStyle = (isHovered: boolean) => ({
      transition: 'transform 0.3s ease-in-out',
      transform: isHovered ? 'scale(1.2)' : 'scale(1)',
      display: 'inline-block',
      verticalAlign: 'middle',
      cursor: 'pointer'
  });

    return (
        <div className="relative z-10 p-4">
            <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center">
                Hi! I&apos;m Joshua Prayogo. 
                <br/> 
                <div className="text-white text-xl sm:text-2xl mt-2">
                    I&apos;m a Software / Game Developer.
                    <br/>
                    {/* LinkedIn Button */}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512" 
                        className="w-6 h-6 ml-2"
                        style={getIconStyle(linkedInHovered)}
                        onMouseEnter={() => setLinkedInHovered(true)}
                        onMouseLeave={() => setLinkedInHovered(false)}
                        onClick={() => window.open('https://bit.ly/joshualinkedin', '_blank')}
                    >
                        <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>

                    {/* Medium Button */}
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 640 512"
                        className="w-6 h-6 ml-2"
                        style={getIconStyle(mediumHovered)}
                        onMouseEnter={() => setMediumHovered(true)}
                        onMouseLeave={() => setMediumHovered(false)}
                        onClick={() => window.open('https://bit.ly/joshuaprayogomedium', '_blank')}
                    >
                        <path fill="currentColor" d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

function RenderAbout(): JSX.Element {
  const profilePicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const profilePicContainer = profilePicRef.current;
      if (!profilePicContainer) return;

      function map(val: number, minA: number, maxA: number, minB: number, maxB: number): number {
          return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
      }

      function applyProfilePic3DEffect(container: HTMLDivElement, ev: MouseEvent): void {
          const img = container.querySelector('img');
          if (!img) return;

          const rect = container.getBoundingClientRect();
          const mouseX = ev.clientX - rect.left;
          const mouseY = ev.clientY - rect.top;
          const rotateY = map(mouseX, 0, rect.width, -25, 25);
          const rotateX = map(mouseY, 0, rect.height, 25, -25);
          const brightness = map(mouseY, 0, rect.height, 1.5, 0.5);

          img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          img.style.filter = `brightness(${brightness})`;
      }

      const handleMouseMove = (ev: MouseEvent): void => {
          applyProfilePic3DEffect(profilePicContainer, ev);
      };

      const handleMouseLeave = (): void => {
          const img = profilePicContainer.querySelector('img');
          if (img) {
              img.style.transform = 'rotateX(0deg) rotateY(0deg)';
              img.style.filter = 'brightness(1)';
          }
      };

      profilePicContainer.addEventListener('mousemove', handleMouseMove);
      profilePicContainer.addEventListener('mouseleave', handleMouseLeave);

      return () => {
          profilePicContainer.removeEventListener('mousemove', handleMouseMove);
          profilePicContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
  }, []);

  return (
      <div className="about-section bg-black text-white py-16">
          <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                  <div className="w-full md:w-1/4 mb-6 md:mb-0">
                      <div ref={profilePicRef} className="profile-pic-container">
                          <img className="profile-pic rounded-full w-48 h-48 mx-auto" src="/pfp.jpg" alt="Profile"/>
                      </div>
                  </div>
                  <div className="w-full md:w-3/4">
                        <h2 className="text-3xl font-bold mb-4">About Me</h2>
                        <p className="mb-6">
                            I&apos;m a game development hobbyist with a passion for anime-styled visuals.
                            I also build softwares! 
                            I&apos;m studying Computer Science at Douglas College and building my skills in game and software development. 
                            I&apos;m dedicated to creating games that combine anime and gaming to appeal to fans of both. 
                            Let&apos;s connect and create something awesome together!
                        </p>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 mb-6 md:mb-0">
                                <h2 className="text-2xl font-bold mb-2">Contact Details</h2>
                                <p className="address">
                                    <span className="block">Joshua Prayogo</span>
                                    <span className="block">amosprayogo@gmail.com</span>
                                    {/* <span className="block">+62 812-3456-7890 (call / Telegram)</span>
                                    <span className="block">joshuaprayogo at gmail.com</span> */}
                                </p>
                            </div>
                            {/* <div className="w-full md:w-1/2">
                                <p className="mb-2">
                                    <a href="./CV_Joshua_Prayogo.pdf" target="_blank" className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                        <span>Download CV</span>
                                    </a>
                                </p>
                                <p>
                                    <a href="./Resume_Joshua_Prayogo.pdf" target="_blank" className="button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                        <span>Download Resume</span>
                                    </a>
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
      title: "Veiled Truth",
      description: "A brief description of project 1. This could be a game, an app, or any other software project.",
      imageUrl: "/veiled_truth.png",
      projectUrl: "#"
  },
  {
      title: "Parasync",
      description: "A brief description of project 2. Highlight the key features or technologies used.",
      imageUrl: "/parasync.png",
      projectUrl: "#"
  },
  {
      title: "EXIT Anti Cheat (C++)",
      description: "A brief description of project 3. Mention any awards or recognition if applicable.",
      imageUrl: "/exit_ac.jpg",
      projectUrl: "#"
  },
  {
      title: "Raspberry Pi Door Lock",
      description: "A brief description of project 4. Discuss the problem it solves or its unique selling point.",
      imageUrl: "/rasp_lock.jpg",
      projectUrl: "#"
  }
];

function RenderHighlightedProjects(): JSX.Element {
  return (
      <div className="highlighted-projects-section bg-gradient-to-b from-[#32324C] to-black text-white py-16">
          <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-center">Highlighted Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {projects.map((project, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                          <div className="h-48 overflow-hidden">
                              <img 
                                  src={project.imageUrl} 
                                  alt={project.title} 
                                  className="w-full h-full object-cover"
                              />
                          </div>
                          <div className="p-4">
                              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                              <a href={project.projectUrl} className="inline-block bg-blue-500 text-white py-2 px-4 rounded text-sm hover:bg-blue-600 transition-colors duration-300">
                                  View Project
                              </a>
                          </div>
                      </div>
                  ))}
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
          .about-section {
            background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(16,16,32,1) 50%, rgba(32,32,64,1) 100%);
            height: auto;
            padding: 2rem;
            color: white;
            position: relative;
            overflow: hidden;
          }


          /* Profile Pic CSS (pfp CSS) */
          .profile-pic-container {
              perspective: 600px;
              transition: all 250ms ease-out;
              transform: scale(1);
          }

          .profile-pic-container:hover {
              z-index: 10;
              transform: scale(1.3);
          }

          .profile-pic {
              transition: all 250ms ease-out;
              transform-style: preserve-3d;
          }
          /* Profile Pic CSS (pfp CSS) END */

          
          /* Highlighted Projects CSS */
          .highlighted-projects-section {
              min-height: 75vh;
              display: flex;
              align-items: center;
          }
          /* Highlighted Projects CSS END */


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
        {/* Name and Title */}
        <div className="hero-section">
          <CosmicTravelBackground /> {/* Background*/}
          <div className="flex items-center justify-center h-full">
            <RenderName />
          </div>
        </div>

        {/* About Me */}
        <div className="about-section">
          <RenderAbout />
        </div>

        {/* Higlighted Projects */}
        <RenderHighlightedProjects />
      </>
    );
}


  
  