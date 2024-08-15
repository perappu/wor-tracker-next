// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/sidebar';
import Dropdowns from "@/components/dropdowns";

export const metadata = {
  title: "WoR Tracker",
  description: "World of Reos tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <div className="flex min-h-screen relative">
        <Sidebar><Dropdowns /></Sidebar>
        
        <main className="bg-gray-100 w-screen h-100 p-10">
        <article className='prose-sm md:prose-base lg:prose-lg prose-slate'>
        {children}
        </article>
        </main>
        </div>
      </body>
    </html>
  );
}