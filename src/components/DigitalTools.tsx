'use client';

import { Check, Smartphone, Lock, Clock, RefreshCw } from 'lucide-react';
const features = [{
  name: 'Client Tracking Platform',
  description: 'Clients can securely log in with their unique ID to check the real time status of their assignment.',
  icon: Smartphone
}, {
  name: 'Bank-Level Security',
  description: 'Secure cloud storage protect every document you upload',
  icon: Lock
}, {
  name: 'Real-time Updates',
  description: 'Get notified the moment your return is filed and successfully processed.',
  icon: RefreshCw
}, {
  name: 'Expert Support',
  description: 'Our team is available during business hours to answer questions and guide you through every step.',
  icon: Clock
}];
export function DigitalTools() {
  return <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
    {/* Abstract background shapes */}
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Built for the modern <br />
            <span className="text-cyan-400">digital workflow.</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            We’ve redesigned the tax and accounting experience to be smooth, intuitive, and fully online without clunky portals or paperwork hassles.    </p>

          <div className="space-y-6">
            {features.map(feature => <div key={feature.name} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <feature.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-1 text-gray-400">{feature.description}</p>
              </div>
            </div>)}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl bg-gray-800 border border-gray-700 p-8 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-2xl"></div>

            {/* Mock UI Interface */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                <div>
                  <div className="h-4 w-32 bg-gray-600 rounded mb-2"></div>
                  <div className="h-3 w-20 bg-gray-700 rounded"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-cyan-500/20"></div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700/50 border border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-green-500/20 flex items-center justify-center text-green-400">
                      <Check className="h-4 w-4" />
                    </div>
                    <div className="text-sm text-gray-300">Client’s Documents Submission — Completed</div>
                  </div>
                  <span className="text-xs text-gray-500">Just now</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700/50 border border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <RefreshCw className="h-4 w-4 animate-spin-slow" />
                    </div>
                    <div className="text-sm text-gray-300">
                      Documents Verification and Approval
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">Processing...</span>
                </div>

                <div className="h-32 rounded-lg bg-gray-700/30 border border-gray-700 border-dashed flex items-center justify-center">
                  <div className="text-center">
                    <div className="h-8 w-8 mx-auto rounded-full bg-gray-700 flex items-center justify-center mb-2">
                      <span className="text-xl text-gray-500">+</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      Drag & drop files
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl bg-gray-800/50 border border-gray-700"></div>
        </div>
      </div>
    </div>
  </section>;
}