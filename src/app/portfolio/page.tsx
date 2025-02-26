"use client";
import React, { useState, useEffect } from 'react';

// Project data structure
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  completionDate?: string;
  technologies?: string[];
}

// Content data
const portfolioProjects: Project[] = [
  {
    title: "Veiled Truth",
    description: "A 3D Detective-Mystery Anime Game created using Unity",
    imageUrl: "/veiled_truth.png",
    projectUrl: "https://www.resume.id/works/c97f0b654d1de643",
    completionDate: "2023-11",
    technologies: ["Unity", "C#", "Blender", "3D Modeling"]
  },
  {
    title: "MeasureMaster",
    description: "Published asset for measuring distances in 3D/2D space",
    imageUrl: "/measuremaster.png",
    projectUrl: "https://assetstore.unity.com/packages/tools/utilities/measuremaster-294420",
    completionDate: "2023-08",
    technologies: ["Unity", "C#", "Asset Store"]
  },
  {
    title: "EXIT Anti Cheat",
    description: "Advanced security system to prevent shortcut exploits",
    imageUrl: "/exit_ac.jpg",
    projectUrl: "https://www.resume.id/works/7954859f0604a854",
    completionDate: "2022-12",
    technologies: ["C++", "Win32 API", "System Security"]
  },
  {
    title: "Raspberry Pi Door Lock",
    description: "IoT security system with remote access capabilities",
    imageUrl: "/rasp_lock.jpg",
    projectUrl: "https://www.resume.id/works/e3d305421fb106ef",
    completionDate: "2022-07",
    technologies: ["Python", "Raspberry Pi", "IoT", "Electronics"]
  }
];

const portfolioUpdates = [
  {
    category: "CERTIFICATION",
    title: "UNITY DEVELOPER",
    date: "February 18, 2024",
    imageUrl: "/pfp.jpg",
    link: "https://bit.ly/joshuaprayogoportfolio"
  },
  {
    category: "BLOG POST",
    title: "GAME DEV JOURNEY",
    date: "February 10, 2024",
    imageUrl: "/pfp.jpg",
    link: "https://bit.ly/joshuamedium"
  },
  {
    category: "PROJECT LAUNCH",
    title: "MEASUREMASTER",
    date: "January 28, 2024",
    imageUrl: "/measuremaster.png",
    link: "https://assetstore.unity.com/packages/tools/utilities/measuremaster-294420"
  },
  {
    category: "ACHIEVEMENT",
    title: "1000+ DOWNLOADS",
    date: "February 12, 2024",
    imageUrl: "/veiled_truth.png",
    link: "https://bit.ly/joshuaprayogoportfolio"
  }
];

export default function PortfolioSteamPage() {
  const [activeTab, setActiveTab] = useState("PROJECTS");
  const [currentTime, setCurrentTime] = useState("");
  
  // Update time in real-time (every second) without showing seconds
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
    };
    
    // Update immediately and then every second (for real-time feeling)
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  
  return (
    // Updated background with Steam-like gradient
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden font-sans">
      {/* Header with time and social links - added backdrop blur */}
      <header className="flex justify-between items-center px-6 py-3 bg-black/60 backdrop-blur-sm">
        <h1 className="text-2xl font-bold">Portfolio Showcase</h1>
        <div className="flex items-center gap-4">
          <a href="https://bit.ly/joshualinkedin" target="_blank" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 mr-1">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
            </svg>
          </a>
          <a href="https://bit.ly/joshuaprayogomedium" target="_blank" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-5 h-5 mr-1">
              <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z"/>
            </svg>
          </a>
          <div className="bg-gray-800/80 px-3 py-1 rounded-sm">
            <span className="text-xl">{currentTime}</span>
          </div>
          <img src="/pfp.jpg" alt="Joshua Prayogo" className="w-8 h-8 rounded-full" />
        </div>
      </header>

      {/* Main content area with gradient overlay */}
      <main className="px-6 py-4 bg-gradient-to-b from-gray-900/50 to-black/20">
        {/* Projects carousel */}
        <div className="mb-12">
          {/* Updated scrollbar colors to match Steam */}
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800">
          {portfolioProjects.map((project, index) => (
            <a 
              key={index} 
              href={project.projectUrl} 
              target="_blank" 
              className={`flex-none group ${index === 0 ? 'w-[700px]' : 'w-64'} ${index > 0 ? 'ml-6' : ''}`}
            >
              <div className={`relative ${index === 0 ? 'h-96 w-full' : 'h-96 w-full'} mb-2 overflow-hidden rounded bg-gray-800/30`}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1.5 text-sm font-bold">
                    FEATURED
                  </div>
                )}
                {index === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies?.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-600/80 text-xs px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <h3 className={`font-bold ${index === 0 ? 'text-xl' : 'text-lg'}`}>{project.title}</h3>
              <p className="text-sm text-gray-400">
                {index === 0 ? project.description : `${project.description.substring(0, 50)}...`}
              </p>
              {index === 0 && (
                <div className="mt-2 flex items-center text-blue-400 text-sm">
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </a>
          ))}
          </div>
        </div>

        {/* Navigation tabs - updated colors to match Steam */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-gray-900/70 rounded-full px-2 py-1">
            {["PROJECTS", "SKILLS", "CONTACT"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full ${
                  activeTab === tab 
                    ? "bg-blue-600 text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {tab === "CONTACT" && (
                  <span className="ml-2 bg-green-500 text-white text-xs px-1.5 rounded-full">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio updates - updated with Steam-like card styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* {portfolioUpdates.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              className="relative overflow-hidden group rounded bg-gray-800/40 hover:bg-gray-800/60 transition-colors duration-200"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 p-2 bg-blue-900/80 text-xs font-bold z-20">
                {item.category}
              </div>
              <div className="absolute bottom-0 left-0 p-4 z-20">
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.date}</p>
              </div>
            </a>
          ))} */}
        </div>
      </main>

      {/* Footer with navigation - updated with Steam styling */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 flex justify-between items-center border-t border-gray-800">
        <div className="bg-gray-800/80 rounded px-3 py-1">
          <span className="mr-2">JOSHUA</span>
          <span className="text-gray-400">PRAYOGO</span>
        </div>
        
        <div className="flex space-x-4">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-bold mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
            </div>
            <span className="text-sm">EMAIL</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-bold mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
            </div>
            <span className="text-sm">RESUME</span>
          </div>
        </div>
      </footer>
    </div>
  );
}