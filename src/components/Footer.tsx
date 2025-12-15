'use client';

import Link from 'next/link';

export function Footer() {
  return <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 bg-gray-900 rounded flex items-center justify-center text-white font-bold text-xs">
                T
              </div>
              <span className="font-bold text-lg text-gray-900">TaxFlow</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Modern tax filing for the digital age. Fast, secure, and
              expert-verified.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/services" className="hover:text-cyan-600 transition-colors">
                  Individual Filing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-600 transition-colors">
                  Business Taxes
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-600 transition-colors">
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-600 transition-colors">
                  Audit Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-cyan-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-600 transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  Tax Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 TaxFlow Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>;
}