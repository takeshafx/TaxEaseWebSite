'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-cyan-600 font-semibold' : 'text-gray-600 hover:text-cyan-600';
  };

  return <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="h-8 w-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              T
              
            </div> */}
          <Image src="/images/logo.png" alt="TaxEase Advisory Logo" width={1000}
            height={1000}
            className="h-8 w-auto" />
          {/* <span className="font-bold text-xl tracking-tight text-gray-900">
              TaxEase Advisory 
            </span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className={`${isActive('/')} transition-colors`}>
            Home
          </Link>
          <Link href="/services" className={`${isActive('/services')} transition-colors`}>
            Services
          </Link>
          <Link href="/about" className={`${isActive('/about')} transition-colors`}>
            About
          </Link>
          <Link href="/contact" className={`${isActive('/contact')} transition-colors`}>
            Contact
          </Link>
          {/* <button className="text-cyan-600 hover:text-cyan-700 transition-colors font-medium">
            Log in
          </button> */}
          <Link href="/contact" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900 p-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
      <div className="px-4 pt-2 pb-6 space-y-2">
        <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
          Services
        </Link>
        <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
        <div className="pt-4 flex flex-col gap-3">
          {/* <button className="w-full text-center text-cyan-600 font-medium py-2">
            Log in
          </button> */}
          <Link href="/contact" className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </div>}
  </nav>;
}