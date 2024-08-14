"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

import { ScriptProps } from "next/script";

export default function Sidebar({ children }: ScriptProps) {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (<>
  <div onClick={() => setSidebarOpen(!sidebarOpen)} className={`absolute top-10 left-10 bg-slate-800 text-white text-xl z-10 outline rounded-md ${sidebarOpen ? "lg:left-60" : "lg:left-16"}`}><IoMenu /></div>
    <nav className={`h-screen sticky top-0 bg-slate-800 p-5 pt-8 transition-all duration-300 relative prose prose-slate !prose-invert ${sidebarOpen ? "max-w-full opacity-100 lg:block lg:w-72" : "p-0 opacity-0 lg:opacity-100 lg:block lg:w-20"}`}>
    
      <div className={`${sidebarOpen ? "visible" : "hidden"}`}>
        <a href="/"><h2>Stokori&apos;s Reos Tracker</h2></a>
      {children}</div>
    </nav>
        
  </>);
}