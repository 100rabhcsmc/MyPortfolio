"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface NavLink {
  href: string;
  label: string;
  icon: ReactNode;
}

// Simple SVG icons for mobile navigation
const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const ProjectsIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const BlogIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const AboutIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const navLinks: NavLink[] = [
  { href: "/", label: "Home", icon: <HomeIcon className="w-5 h-5" /> },
  { href: "/projects", label: "Projects", icon: <ProjectsIcon className="w-5 h-5" /> },
  { href: "/blog", label: "Blog", icon: <BlogIcon className="w-5 h-5" /> },
  { href: "/about", label: "About", icon: <AboutIcon className="w-5 h-5" /> },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Navigation - Top Header */}
      <nav className="flex md:hidden fixed top-0 left-0 right-0 h-14 bg-[#0a050d] backdrop-blur-md border-b border-foreground/10 z-50">
        <div className="w-full px-4 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold text-foreground hover:text-foreground/80 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-[#1a1a2e] border-2 border-foreground/20 flex items-center justify-center text-white font-bold text-sm">
              SC
            </div>
            Saurabh Chavan
          </Link>
        </div>
      </nav>

      {/* Desktop/Tablet Navigation - Top Bar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 h-16 bg-[#0a050d] backdrop-blur-md border-b border-foreground/10 z-50">
        <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-semibold text-foreground hover:text-foreground/80 transition-colors"
          >
            <img
              src="https://ui-avatars.com/api/?name=Saurabh+Chavan&background=1a1a2e&color=fff&size=128"
              alt="Saurabh Chavan"
              className="w-10 h-10 rounded-full object-cover border-2 border-foreground/20"
            />
            Saurabh Chavan
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-base font-bold transition-colors ${
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom Bar */}
      <nav className="flex md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0a050d] backdrop-blur-md border-t border-foreground/10 z-50 safe-area-inset-bottom">
        <ul className="w-full flex items-center justify-around">
          {navLinks.map((link) => (
            <li key={link.href} className="flex-1">
              <Link
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 py-2 transition-colors ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                {/* Icon */}
                <span
                  className={`transition-transform ${
                    isActive(link.href) ? "scale-110" : ""
                  }`}
                >
                  {link.icon}
                </span>
                {/* Label */}
                <span
                  className={`text-xs font-medium ${
                    isActive(link.href) ? "font-semibold" : ""
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="hidden md:block h-16" />
      <div className="block md:hidden h-14" />
    </>
  );
}
