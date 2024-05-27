"use client";

import { Sidebar } from "./sidebar";
interface PageProps {
  children: React.ReactNode;
}
const Page = ({ children }: PageProps) => {
  return (
    <div>
      <nav className="border-b sticky h-16 bg-white z-10">
        <div className="px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-800">Go Exam</h2>
        </div>
      </nav>
      <Sidebar />
      <main className="container mx-auto py-8 pl-56">{children}</main>
    </div>
  );
};

export { Page };
