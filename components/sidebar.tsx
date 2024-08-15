"use client";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

import { ScriptProps } from "next/script";

export default function Sidebar({ children }: ScriptProps) {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (<>
    <nav className={`h-screen sticky top-0 bg-slate-800 p-5 pt-8 transition-all duration-300 relative prose prose-slate !prose-invert ${sidebarOpen ? "max-w-full opacity-100 lg:block lg:w-72" : "lg:opacity-100 lg:block lg:w-20"}`}>
    <div onClick={() => setSidebarOpen(!sidebarOpen)} className={`relative w-7 bg-slate-800 text-white text-xl z-10 p-1 outline rounded-md text-center`}><IoMenu /></div>

      <div className={`${sidebarOpen ? "visible" : "hidden"}`}>
        <a href="/"><h2>Stokori&apos;s Reos Tracker</h2></a>
      {children}</div>
    </nav>
        
  </>);
}