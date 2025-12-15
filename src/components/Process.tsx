'use client';

import { UploadCloud, Bot, CheckCircle2, Send } from 'lucide-react';
const steps = [{
  id: 1,
  title: 'Upload Documents',
  description: 'Snap photos or upload PDFs securely to your encrypted vault.',
  icon: UploadCloud
}, {
  id: 2,
  title: 'AI Analysis',
  description: 'Our system instantly categorizes and scans for potential deductions.',
  icon: Bot
}, {
  id: 3,
  title: 'Expert Review',
  description: 'A certified CPA verifies every detail to ensure 100% accuracy.',
  icon: CheckCircle2
}, {
  id: 4,
  title: 'File & Relax',
  description: 'We file your return electronically and you get your refund fast.',
  icon: Send
}];
export function Process() {
  return <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="text-cyan-600 font-semibold tracking-wide uppercase text-sm">
            How it works
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From messy receipts to <br />
            filed in minutes.
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step) => <div key={step.id} className="relative flex flex-col items-start">
                <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-lg mb-8 text-cyan-500 relative z-10 group transition-transform hover:scale-105 duration-300">
                  <step.icon className="h-10 w-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-sm border-4 border-white">
                    {step.id}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}