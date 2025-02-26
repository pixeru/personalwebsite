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
  
  // Weather icon component with animations
  const WeatherIcon = ({ condition }) => {
    switch (condition) {
      case 'clear':
        return (
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent border-l-transparent border-r-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        );
      case 'clouds':
        return (
          <div className="relative w-10 h-10">
            <div className="absolute w-8 h-4 bg-gray-300 rounded-full bottom-0 left-1"></div>
            <div className="absolute w-5 h-3 bg-gray-300 rounded-full top-0 right-1"></div>
          </div>
        );
      case 'rain':
        return (
          <div className="relative w-10 h-10">
            <div className="absolute w-8 h-4 bg-gray-300 rounded-full top-0 left-1"></div>
            <div className="absolute w-1 h-4 bg-blue-400 bottom-0 left-3 animate-bounce"></div>
            <div className="absolute w-1 h-4 bg-blue-400 bottom-0 left-5 animate-bounce delay-100"></div>
          </div>
        );
      case 'snow':
        return (
          <div className="relative w-10 h-10">
            <div className="absolute w-8 h-4 bg-gray-300 rounded-full top-0 left-1"></div>
            <div className="absolute w-2 h-2 bg-white rounded-full bottom-0 left-3 animate-bounce"></div>
            <div className="absolute w-2 h-2 bg-white rounded-full bottom-0 left-6 animate-bounce delay-150"></div>
          </div>
        );
      case 'storm':
        return (
          <div className="relative w-10 h-10">
            <div className="absolute w-8 h-4 bg-gray-500 rounded-full top-0 left-1"></div>
            <div className="absolute w-2 h-5 bg-yellow-400 transform rotate-45 bottom-0 left-4"></div>
          </div>
        );
      default:
        return (
          <div className="relative w-10 h-10">
            <div className="absolute w-8 h-4 bg-gray-300 rounded-full top-2 left-1"></div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#171717] text-white overflow-x-hidden font-sans">
      {/* Header with time and social links */}
      <header className="flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold">Portfolio Showcase</h1>
        <div className="flex items-center gap-4">
          <a href="https://bit.ly/joshualinkedin" target="_blank" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 mr-1">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
            </svg>
            <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              <span className="sr-only">LinkedIn</span>
              <span>in</span>
            </div>
          </a>
          <a href="https://bit.ly/joshuaprayogomedium" target="_blank" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-5 h-5 mr-1">
              <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z"/>
            </svg>
            <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">M</div>
          </a>
          <div className="bg-gray-800 px-3 py-1 rounded-sm">
            <span className="text-xl">{currentTime}</span>
          </div>
          <img src="/pfp.jpg" alt="Joshua Prayogo" className="w-8 h-8 rounded-full" />
        </div>
      </header>

      {/* Main content area */}
      <main className="px-6 py-4">
        {/* Featured project */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10"></div>
          <img 
            src={portfolioProjects[0].imageUrl} 
            alt={portfolioProjects[0].title} 
            className="w-full h-64 object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 p-6 z-20">
            <h2 className="text-4xl font-bold mb-2">{portfolioProjects[0].title.toUpperCase()}</h2>
            <p className="text-gray-300 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
              </svg>
              COMPLETED: {portfolioProjects[0].completionDate}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {portfolioProjects[0].technologies?.map((tech, i) => (
                <span key={i} className="bg-blue-800/80 px-2 py-1 rounded text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={portfolioProjects[0].projectUrl} 
              target="_blank" 
              className="mt-1 inline-block bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-2 rounded text-white font-bold"
            >
              VIEW DETAILS
            </a>
          </div>
        </div>

        {/* Projects carousel */}
        <div className="mb-12">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-800">
            {portfolioProjects.map((project, index) => (
              <a 
                key={index} 
                href={project.projectUrl} 
                target="_blank" 
                className="flex-none w-64 group"
              >
                <div className="relative h-36 mb-2 overflow-hidden rounded">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {index === 0 && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 text-xs">
                      FEATURED
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description.substring(0, 50)}...</p>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-gray-900 rounded-full px-2 py-1">
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

        {/* Portfolio updates (like Steam news) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioUpdates.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              className="relative overflow-hidden group rounded"
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
          ))}
        </div>
      </main>

      {/* Footer with navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 flex justify-between items-center border-t border-gray-800">
        <div className="bg-gray-800 rounded px-3 py-1">
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