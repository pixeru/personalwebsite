"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from "next-sanity";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";

const client = createClient({
  projectId: "slabvdrx",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Project data structure
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  completionDate?: string;
  technologies?: string[];
  status?: "completed" | "ongoing" | "planned";
}

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt,
  "imageUrl": mainImage.asset->url
}`;

// Content data
const portfolioProjects: Project[] = [
  {
    title: "Veiled Truth",
    description: "A 3D Detective-Mystery Anime Game created using Unity",
    imageUrl: "/veiled_truth.png",
    projectUrl: "https://www.resume.id/works/c97f0b654d1de643",
    completionDate: "2023-11",
    technologies: ["Unity", "C#", "Blender", "3D Modeling"],
    status: "ongoing"
  },
  {
    title: "MeasureMaster",
    description: "Published asset for measuring distances in 3D/2D space",
    imageUrl: "/measuremaster.png",
    projectUrl: "https://assetstore.unity.com/packages/tools/utilities/measuremaster-294420",
    completionDate: "2023-08",
    technologies: ["Unity", "C#", "Asset Store"],
    status: "completed"
  },
  {
    title: "EXIT Anti Cheat",
    description: "Advanced security system to prevent shortcut exploits",
    imageUrl: "/exit_ac.jpg",
    projectUrl: "https://www.resume.id/works/7954859f0604a854",
    completionDate: "2022-12",
    technologies: ["C++", "Win32 API", "System Security"],
    status: "completed"
  },
  {
    title: "Raspberry Pi Door Lock",
    description: "IoT security system with remote access capabilities",
    imageUrl: "/rasp_lock.jpg",
    projectUrl: "https://www.resume.id/works/e3d305421fb106ef",
    completionDate: "2022-07",
    technologies: ["Python", "Raspberry Pi", "IoT", "Electronics"],
    status: "completed"
  }
];

const portfolioUpdates = [
  {
    category: "CERTIFICATION",
    title: "UNITY DEVELOPER",
    date: "February 18, 2024",
    imageUrl: "/parasync.png",
    link: "https://bit.ly/joshuaprayogoportfolio"
  },
  {
    category: "BLOG POST",
    title: "GAME DEV JOURNEY",
    date: "February 10, 2024",
    imageUrl: "/GlobalGameJam2025.jpg",
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

// Main page component (default export only)
export default function PortfolioSteamPage() {
  const [activeTab, setActiveTab] = useState("PROJECTS");
  const [currentTime, setCurrentTime] = useState("");
  const [showCopied, setShowCopied] = useState(false);
  const [clientPosts, setClientPosts] = useState<SanityDocument[]>([]);
  
  // Fetch posts on client side
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
        setClientPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  
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
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Portfolio data for status display
  const portfolioData = {
    title: "PORTFOLIO SHOWCASE",
    yearCreated: "2024",
    lastUpdated: "February 25, 2024",
    projectStatusIcon: "ongoing"
  };
  
  return (
    <div className="h-screen text-white relative overflow-x-hidden overflow-y-auto">
      {/* Non-parallax background with blur effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-[url('/Wallpaper_HighresScreenshot00010.png')] bg-cover bg-center blur-xl opacity-30 scale-110 transform-gpu"
        style={{ 
          zIndex: -1,
          filter: 'brightness(0.4) saturate(1.5)'
        }}
      ></div>
      
      {/* Subtle gradient overlay on top of blurred image */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/70 to-black/90" style={{ zIndex: -1 }}></div>

      {/* Header with time and social links */}
      <header className="flex justify-between items-center p-4 bg-black/50 backdrop-blur-sm z-10">
        <div className="flex gap-4">
          <div className="w-6 h-6">
            {/* Search icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
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
          <div className="text-lg font-medium">{currentTime}</div>
          <img src="/pfp.jpg" alt="Joshua Prayogo" className="w-8 h-8 rounded-md overflow-hidden" />
        </div>
      </header>

      {/* Banner section with featured project */}
      <div className="relative h-96 w-full">
        {/* Subtle gradient overlay on top of blurred image */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-black/90" style={{ zIndex: -1 }}></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full bg-black/30 backdrop-blur-sm">
            {/* Featured project image - sharper than background */}
            {/* TOP IMAGE */}
            <div className="w-full h-full bg-[url('/Wallpaper_HighresScreenshot00010.png')] bg-cover bg-center opacity-90"></div>
          </div>
        </div>
        
        {/* Portfolio title overlay */}
        <div className="absolute bottom-0 left-0 p-8 z-20">
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-bold flex items-center drop-shadow-lg">
              <span className="text-red-600 text-6xl">P</span>
              <span className="text-white">ORT</span>
              <span className="text-red-600 text-6xl">F</span>
              <span className="text-white">OLIO</span>
            </div>
            <div className="bg-red-700 text-white px-3 py-1 w-fit font-bold shadow-lg">SHOWCASE</div>
          </div>
        </div>
      </div>

      {/* Action area with buttons and status */}
      <div className="flex items-center p-4 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <a href="#projects" className="bg-green-600 hover:bg-green-700 rounded text-white py-2 px-8 flex items-center gap-2 mr-6 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
          <span className="text-lg">Explore</span>
        </a>
        
        <div className="flex gap-6">
          <div className="text-sm">
            <div className="text-gray-400">LAST UPDATED</div>
            <div>{portfolioData.lastUpdated}</div>
          </div>
          
          <div className="text-sm">
            <div className="text-gray-400">YEAR CREATED</div>
            <div>{portfolioData.yearCreated}</div>
          </div>
        </div>
        
        {/* Share Button */}
        <div className="ml-auto flex gap-4">
          <div className="relative">
            <button 
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded transition-colors duration-200"
              onClick={handleShare}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            
            {showCopied && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                Copied!
                <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-black/80 border-r-[6px] border-r-transparent"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Navigation tabs */}
      <div className="flex justify-center py-2 bg-gray-900/80 backdrop-blur-sm z-10" id="projects">
        <div className="flex">
          {["PROJECTS", "SKILLS", "CONTACT"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${activeTab === tab ? 'bg-gray-700 rounded-sm' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <main className="px-6 py-4 relative z-10">
        {/* Projects carousel */}
        <div className="mb-12">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-800">
            {/* PROJECTS LIST */}
          {clientPosts.map((post, index) => (
            <Link 
              key={post._id} 
              href={`/${post.slug.current}`}
              className={`flex-none group ${index === 0 ? 'w-[700px]' : 'w-64'} ${index > 0 ? 'ml-6' : ''}`}
            >
              <div className={`relative ${index === 0 ? 'h-96 w-full' : 'h-96 w-full'} mb-2 overflow-hidden rounded bg-gray-800/50 backdrop-blur-sm shadow-lg`}>
                <img 
                  src={post.imageUrl || '/placeholder.jpg'} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1.5 text-sm font-bold">
                    FEATURED
                  </div>
                )}
                {/* Post status indicator - if you have status data */}
                {post.status && (
                  <div className="absolute top-2 left-2 bg-black/60 rounded px-2 py-1 flex items-center gap-1">
                    {post.status === "published" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    )}
                    <span className="text-xs">{post.status?.toUpperCase()}</span>
                  </div>
                )}
                {index === 0 && post.categories && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.categories?.map((category, catIndex) => (
                        <span key={catIndex} className="bg-blue-600/80 text-xs px-2 py-0.5 rounded">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <h2 className={`font-bold ${index === 0 ? 'text-xl' : 'text-lg'} text-xl font-semibold`}>{post.title}</h2>
              <p className="text-sm text-gray-400">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              {index === 0 && (
                <div className="mt-2 flex items-center text-blue-400 text-sm">
                  <span>Read Post</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </Link>
          ))}
          </div>
        </div>
      </main>

      {/* Footer with navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 flex justify-between items-center border-t border-gray-800 z-20">
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