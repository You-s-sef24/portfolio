import { useState, useEffect } from "react";
import { youssef } from "../data/youssef";

function OpenToWorkBadge({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="inline-block h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400 animate-pulse"></span>
      <span className="font-mono text-xs text-green-400">Open to work</span>
    </div>
  );
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerLine = 64 + 1;

      let current = "";
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section && section.getBoundingClientRect().top <= triggerLine) {
          current = link.href;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (href) =>
    `transition-all ${
      activeSection === href
        ? "text-blue-400 underline underline-offset-4"
        : "hover:text-blue-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center bg-black border-b border-slate-800 font-bold text-white p-4 z-50 h-[64px]">
      <a href="#home" className="select-none">
        <span className="text-blue-400">{`<`}</span>Youssef
        <span className="text-blue-400">{` />`}</span>
      </a>

      <div className="hidden md:flex items-center text-lg gap-4">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={linkClass(link.href)}>
            {link.label}
          </a>
        ))}
        {youssef.openToWork && <OpenToWorkBadge className="pl-4" />}
      </div>

      <div className="flex md:hidden items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="px-2 py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-sky-500/50 hover:text-blue-400 transition-all"
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

      {isOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-black/95 backdrop-blur-lg border-t border-slate-800 shadow-lg z-50 flex flex-col pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block px-6 py-4 text-xl ${linkClass(link.href)}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {youssef.openToWork && (
            <OpenToWorkBadge className="px-6 py-4 mt-auto mb-8 border-t border-slate-800/50" />
          )}
        </div>
      )}
    </nav>
  );
}
