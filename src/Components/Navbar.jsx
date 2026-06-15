import { useState } from "react";
import { youssef } from "../data/youssef";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 flex justify-between items-center bg-black font-bold text-white p-4 z-50">
      <span>
        <span className="text-blue-400">{`<`}</span>youssef
        <span className="text-blue-400">.dev </span>
        <span className="text-blue-400">{`/>`}</span>
      </span>
      {/* Desktop Links */}
      <div className="hidden md:flex text-lg gap-4">
        <a href="#about" className="hover:text-blue-600 transition-all">
          About
        </a>
        <a href="#projects" className="hover:text-blue-600 transition-all">
          Projects
        </a>
        <a href="#stack" className="hover:text-blue-600 transition-all">
          Stack
        </a>
        <a href="#contact" className="hover:text-blue-600 transition-all">
          Contact
        </a>
        {youssef.openToWork ? (
          <div className="flex items-center gap-2 px-6">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400 animate-pulse"></span>
            <span className="font-mono text-xs text-green-400">
              Open to work
            </span>
          </div>
        ) : null}
      </div>

      {/* Mobile Hamburger & Language */}
      <div className="flex lg:hidden items-center gap-2">
        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden px-4 py-2 text-white rounded focus:outline-none hover:text-blue-600 transition-all"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Full-width Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-screen bg-black/50  border-t border-gray-200 dark:border-neutral-700 shadow-lg z-50">
          <a
            href="#about"
            className="block px-6 py-4 text-white dark:text-white hover:text-blue-600 transition-all"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-6 py-4 text-white dark:text-white hover:text-blue-600 transition-all"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Projects
          </a>
          <a
            href="#stack"
            className="block px-6 py-4 text-white dark:text-white hover:text-blue-600 transition-all"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Stack
          </a>
          <a
            href="#contact"
            className="block px-6 py-4 text-white dark:text-white hover:text-blue-600 transition-all"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Contact
          </a>

          {youssef.openToWork && (
            <div className="flex items-center gap-2 px-6 py-4">
              <span className="inline-block h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400 animate-pulse"></span>

              <span className="font-mono text-xs text-green-400">
                Open to work
              </span>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
