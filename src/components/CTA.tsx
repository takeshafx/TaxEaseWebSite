'use client';

import { ArrowRight } from 'lucide-react';
export function CTA() {
  return <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
          Ready to simplify your tax season?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Join thousands of freelancers, remote workers, and digital nomads who
          trust us with their finances.
        </p>

        <div className="flex flex-col items-center gap-4">
          <button className="group inline-flex items-center justify-center rounded-lg bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
            Get Started for Free
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required for initial assessment.
          </p>
        </div>
      </div>
    </section>;
}