'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
export function Hero() {
  return <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden bg-white">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-50 via-white to-white opacity-70"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50/50 px-3 py-1 text-sm font-medium text-cyan-600 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></span>
            Tax Season 2026 is Open
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Tax filing for the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-600">
              Everyone              </span>
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Skip paperwork and office visits, expert CPAs handle online tax filing for freelancers, self-employed individuals, and private limited companies. Fast, secure, and on time.          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Link href="/contact" className="group inline-flex items-center justify-center rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
              Start Filing Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            {/* <button className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-medium text-gray-600 transition-colors hover:text-gray-900 hover:bg-gray-50">
              How it works
            </button> */}
          </div>

          {/* <div className="mt-16 flex items-center justify-center lg:justify-start gap-8 text-gray-400 grayscale opacity-60">
              
              <div className="h-8 w-24 bg-current rounded opacity-20"></div>
              <div className="h-8 w-24 bg-current rounded opacity-20"></div>
              <div className="h-8 w-24 bg-current rounded opacity-20"></div>
              <div className="h-8 w-24 bg-current rounded opacity-20"></div>
            </div> */}
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-2xl -z-10"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Modern tax consultation meeting" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-cyan-100 flex items-center justify-center text-xs font-bold text-cyan-600">
                    +100
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  Happy Clients
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Trusted freelancers and businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}