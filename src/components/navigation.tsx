import React, { useState } from "react";
import { Button } from "./button";
import { SiGithub } from "@icons-pack/react-simple-icons";

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    // { name: "Blog", href: "/blog" },
    // { name: "Help", href: "/help" },
    { name: "By a Human", href: "/by-a-human" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              {/* <span className="text-2xl font-bold">ColdJot</span> */}
              <img src="/logo.svg" alt="ColdJot Logo" className="h-auto w-32" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://github.com/dropocol/coldjot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            {/* <Button size="sm">Coming Soon</Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background">
          <div className="space-y-1 p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 space-y-2">
              {/* <Button variant="ghost" className="w-full justify-start">
                <a href="https://app.coldjot.com/auth/signin">Sign In</a>
              </Button> */}
              <Button className="w-full">Coming Soon</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
