"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-[#1e40af]">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <Link className="shrink-0" href="/">
                <Image
                  alt="Logo"
                  className="h-auto w-32 ps-2 md:ps-0"
                  height="32"
                  priority
                  src="/icon.svg"
                  width="32"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link className="group rounded-md px-3 py-2 text-sm font-medium text-white" href="/">
                  Home
                  <span className="block h-[1px] max-w-0 bg-gray-50 transition-all duration-500 group-hover:max-w-full" />
                </Link>
                <Link className="group rounded-md px-3 py-2 text-sm font-medium text-white" href="/wishlist">
                  Wishlist
                  <span className="block h-[1px] max-w-0 bg-gray-50 transition-all duration-500 group-hover:max-w-full" />
                </Link>
                <Link className="group rounded-md px-3 py-2 text-sm font-medium text-white" href="/mybook">
                  MyBook
                  <span className="block h-[1px] max-w-0 bg-gray-50 transition-all duration-500 group-hover:max-w-full" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <SearchBar />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              className="inline-flex items-center justify-center rounded-md bg-[#1e40af] p-2 text-white hover:bg-[#1e3a8a] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className={`block h-6 w-6 ${isMenuOpen ? "hidden" : ""}`} />
              <X className={`block h-6 w-6 ${isMenuOpen ? "" : "hidden"}`} />
            </button>
          </div>
        </div>
      </nav>
      <nav
        aria-hidden={!isMenuOpen}
        className={`transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block translate-y-0" : "hidden translate-y-full"
        } md:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-5 px-6 pb-5 pt-2">
          <Link className="block rounded-md text-base font-medium text-white" href="/">
            Home
          </Link>
          <Link className="block rounded-md text-base font-medium text-white" href="/wishlist">
            Wishlist
          </Link>
          <Link className="block rounded-md text-base font-medium text-white" href="/mybook">
            MyBook
          </Link>
          <SearchBar />
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
