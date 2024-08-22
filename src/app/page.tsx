import React from 'react';

function RenderName() {
  return <div>asd</div>;
}

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-slate-500"><RenderName /></div> {/* Name */}
      
    </>
  );
}