"use client";

export default function Sidebar({ dropdowns }) {

  return (<>
    <div className="h-screen bg-slate-800 p-5 pt-8 w-72 duration-300 relative prose prose-slate !prose-invert">
      <h2>Stokori's Reos Tracker</h2>
      {dropdowns}
    </div>
  </>);
}