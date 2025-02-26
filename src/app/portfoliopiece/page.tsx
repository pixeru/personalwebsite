"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function GamePage() {
  const [activeTab, setActiveTab] = useState('ACTIVITY');
  
  // Game data
  const projectData = {
    title: "PORTAL REVOLUTION",
    yearCreated: "2024",
    toolsUsed: "Unreal Engine",
    achievements: "2/21",
    projectStatusIcon: "completed",
    projectStatus: "COMPLETED"
  };

  // Friends who played
  const friendsWhoPlayed = [
    { id: 1, avatar: "/friend1.jpg" }
  ];

  // Friends with game on wishlist
  const friendsWithWishlist = [
    { id: 1, avatar: "/friend2.jpg" }
  ];

  const [showCopied, setShowCopied] = useState(false);

const handleShare = () => {
  // Copy current URL to clipboard
  navigator.clipboard.writeText(window.location.href)
    .then(() => {
      // Show the copied message
      setShowCopied(true);
      
      // Hide the message after 2 seconds
      setTimeout(() => {
        setShowCopied(false);
      }, 2000);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header with time and profile */}
      <header className="flex justify-between items-center p-4 bg-black/50">
        <div className="flex gap-4">
          <div className="w-6 h-6">
            {/* Search icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            {/* Notification bell */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div className="text-lg font-medium">2:30 PM</div>
          <div className="w-8 h-8 bg-blue-500 rounded-md overflow-hidden">
            {/* User avatar placeholder */}
            <div className="w-full h-full bg-blue-700"></div>
          </div>
        </div>
      </header>

      {/* Game banner and info */}
      <div className="relative h-96 w-full">
        {/* Game background - in a real app, use Image component with proper src */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full bg-gray-800 bg-opacity-50">
            {/* This would be your game banner image */}
            <div className="w-full h-full bg-[url('/placeholder.jpg')] bg-cover bg-center opacity-80"></div>
          </div>
        </div>
        
        {/* Game logo and info - positioned over the banner */}
        <div className="absolute bottom-0 left-0 p-8 z-20">
          <div className="flex flex-col gap-4">
            <div className="text-5xl font-bold flex items-center">
              <span className="text-white">h</span>
              <span className="text-red-600 text-6xl">A</span>
              <span className="text-white">LF</span>
            </div>
            <div className="bg-red-700 text-white px-3 py-1 w-fit font-bold">LIVE 3</div>
          </div>
        </div>
      </div>

      {/* Game stats and play button */}
      <div className="flex items-center p-4 bg-gray-900 border-b border-gray-800">
        <button className="bg-green-600 hover:bg-green-700 rounded text-white py-2 px-8 flex items-center gap-2 mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="text-lg">Play</span>
        </button>
        
        <div className="flex gap-6">
          <div className="text-sm">
            <div className="text-gray-400">YEAR CREATED</div>
            <div>{projectData.yearCreated}</div>
          </div>
          
          <div className="text-sm">
            <div className="text-gray-400">TOOLS USED</div>
            <div>{projectData.toolsUsed}</div>
          </div>
          
          {/* <div className="text-sm">
            <div className="text-gray-400">ACHIEVEMENTS</div>
            <div className="flex items-center gap-2">
              {projectData.achievements}
              <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-1/10 h-full bg-blue-400"></div>
              </div>
            </div>
          </div> */}
        </div>
        
        {/* Share Button */}
        <div className="ml-auto flex gap-4">
  <div className="relative">
    <button 
      className="bg-gray-800 hover:bg-gray-700 p-2 rounded"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    </button>
    
    {showCopied && (
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap animate-[fadeInOut_2s_ease-in-out]">
        Copied!
        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-black/80 border-r-[6px] border-r-transparent"></div>
      </div>
    )}
  </div>
</div>
      </div>
      
      {/* Cloud sync status */}
      <div className="flex justify-center py-2 bg-gray-800 text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          {projectData.projectStatusIcon === "completed" ? (
            // Checkmark icon for completed projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-green-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : projectData.projectStatusIcon === "ongoing" ? (
            // Circular progress icon for ongoing projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          ) : null}
          <span>PROJECT STATUS: {projectData.projectStatus}</span>
        </div>
      </div>
      
      {/* Navigation tabs */}
      <div className="flex justify-center py-2 bg-gray-900">
        <div className="flex">
          {['ACTIVITY', 'GALLERY'].map((tab) => (
            <button 
              key={tab}
              className={`px-4 py-2 ${activeTab === tab ? 'bg-gray-700 rounded-sm' : 'text-gray-400'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      {/* Friends section */}
      <div className="p-6">
        <h2 className="text-xl mb-4">Friends</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-gray-400 text-sm mb-2">PLAYED PREVIOUSLY</h3>
            <div className="bg-gray-800 rounded p-4 min-h-16 flex items-center">
              {friendsWhoPlayed.length > 0 ? (
                <div className="flex gap-2">
                  {friendsWhoPlayed.map(friend => (
                    <div key={friend.id} className="w-10 h-10 bg-gray-600 rounded">
                      {/* Friend avatar would go here */}
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-gray-500">None of your friends have played this game</span>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-400 text-sm mb-2">ON THEIR WISHLIST</h3>
            <div className="bg-gray-800 rounded p-4 min-h-16 flex items-center">
              {friendsWithWishlist.length > 0 ? (
                <div className="flex gap-2">
                  {friendsWithWishlist.map(friend => (
                    <div key={friend.id} className="w-10 h-10 bg-gray-600 rounded">
                      {/* Friend avatar would go here */}
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-gray-500">None of your friends have this on their wishlist</span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Activity section */}
      <div className="px-6 py-4">
        <h2 className="text-xl mb-4">Activity</h2>
        <div className="bg-gray-800 rounded p-4 text-gray-400">
          Say something about this game to your friends...
        </div>
      </div>
      
      {/* Footer with menu and controls */}
      {/* <footer className="fixed bottom-0 left-0 right-0 bg-black p-2 flex justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gray-700 px-2 py-1 rounded text-sm">STEAM</div>
          <div className="text-gray-400">MENU</div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-sm mr-1">A</div>
            <span className="text-gray-400">SELECT</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-sm mr-1">B</div>
            <span className="text-gray-400">BACK</span>
          </div>
        </div>
      </footer> */}
    </div>
  );
}