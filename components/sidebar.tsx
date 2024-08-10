"use client";

export default function Sidebar(dropdowns : any) {

  return (<>
    <nav className="h-screen bg-slate-800 p-5 pt-8 w-72 transition-all duration-300 relative prose prose-slate !prose-invert">
      <a href="/"><h2>Stokori&apos;s Reos Tracker</h2></a>
      {dropdowns}
    </nav>
  </>);
}