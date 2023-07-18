import Link from "next/link";
import "tailwindcss/tailwind.css";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                /* Menu open icon */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                /* Menu close icon */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="bold text-white">Beau McDowell</h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className={`${
                    router.pathname === "/"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                  aria-current={
                    router.pathname === "/" ? "page" : undefined
                  }
                >
                  Home
                </a>
                <a
                  href="photos"
                  className={`${
                    router.pathname === "/photos"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } block px-3 py-2 rounded-md text-base font-medium`}
                  aria-current={
                    router.pathname === "/photos" ? "page" : undefined
                  }
                >
                  Photos
                </a>
                <a
                  href="https://github.com/ernestmcdowell"
                  target="_blank"
                  className={`${
                    router.pathname === "/github"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } block px-3 py-2 rounded-md text-base font-medium`}
                  aria-current={
                    router.pathname === "/github" ? "page" : undefined
                  }
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="home"
              className={`${
                router.pathname === "/home"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } block px-3 py-2 rounded-md text-base font-medium`}
              aria-current={router.pathname === "/home" ? "page" : undefined}
            >
              Home
            </a>
            <a
              href="photos"
              className={`${
                router.pathname === "/photos"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } block px-3 py-2 rounded-md text-base font-medium`}
              aria-current={
                router.pathname === "/photos" ? "page" : undefined
              }
            >
              Photos
            </a>
            <a
              href="https://github.com/ernestmcdowell"
                  target="_blank"
              className={`${
                router.pathname === "/github"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } block px-3 py-2 rounded-md text-base font-medium`}
              aria-current={
                router.pathname === "/github" ? "page" : undefined
              }
            >
              Github
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
