"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function GamePage() {
  const [activeTab, setActiveTab] = useState('ACTIVITY');
  
  // Game data
  const gameData = {
    title: "PORTAL REVOLUTION",
    lastPlayed: "Dec 22, 2024",
    playTime: "3.5 hours",
    achievements: "2/21",
    cloudStatus: "UP TO DATE"
  };

  // Friends who played
  const friendsWhoPlayed = [
    { id: 1, avatar: "/friend1.jpg" }
  ];

  // Friends with game on wishlist
  const friendsWithWishlist = [
    { id: 1, avatar: "/friend2.jpg" }
  ];

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
              <span className="text-white">P</span>
              <span className="text-red-600 text-6xl">O</span>
              <span className="text-white">RTAL</span>
            </div>
            <div className="bg-red-700 text-white px-3 py-1 w-fit font-bold">REVOLUTION</div>
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
            <div className="text-gray-400">LAST PLAYED</div>
            <div>{gameData.lastPlayed}</div>
          </div>
          
          <div className="text-sm">
            <div className="text-gray-400">PLAY TIME</div>
            <div>{gameData.playTime}</div>
          </div>
          
          <div className="text-sm">
            <div className="text-gray-400">ACHIEVEMENTS</div>
            <div className="flex items-center gap-2">
              {gameData.achievements}
              <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-1/10 h-full bg-blue-400"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="ml-auto flex gap-4">
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Cloud sync status */}
      <div className="flex justify-center py-2 bg-gray-800 text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          <span>STEAM CLOUD: {gameData.cloudStatus}</span>
        </div>
      </div>
      
      {/* Navigation tabs */}
      <div className="flex justify-center py-2 bg-gray-900">
        <div className="flex">
          {['ACTIVITY', 'YOUR STUFF', 'COMMUNITY', 'GAME INFO'].map((tab) => (
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
      <footer className="fixed bottom-0 left-0 right-0 bg-black p-2 flex justify-between">
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
      </footer>
    </div>
  );
}