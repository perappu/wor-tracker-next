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
      <body>
        <div className="flex">
        <Sidebar><Dropdowns /></Sidebar>
        
        <main className="bg-gray-100 w-screen h-screen p-10">
        {children}
        </main>
        </div>
      </body>
    </html>
  );
}