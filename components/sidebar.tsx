"use client";

import { ScriptProps  } from "next/script";

export default function Sidebar({ children }: ScriptProps ) {

  return (<>
    <nav className="h-screen bg-slate-800 p-5 pt-8 w-72 transition-all duration-300 relative prose prose-slate !prose-invert">
      <a href="/"><h2>Stokori&apos;s Reos Tracker</h2></a>
      {children}
    </nav>
  </>);
}