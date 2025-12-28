'use client';

import { FileText, Calculator, TrendingUp, Shield } from 'lucide-react';
const services = [{
  title: 'Smart Tax Filing',
  description: 'A seamless blend of technology and expertise that simplifies complex filings and keeps your business ahead of compliance deadlines.',
  icon: FileText
}, {
  title: 'Financial Planning',
  description: 'Look beyond tax season with personalized insights to grow your wealth and optimize your future.',
  icon: TrendingUp
}, {
  title: 'Business Taxes',
  description: 'Tax filing for self-employed individuals, freelancers, and private limited companies done accurately and on time.',
  icon: Calculator
}, {
  title: 'CRA Audit Protection',
  description: 'Support for CRA audits, reviews, and all related correspondence  handled by our experts.',
  icon: Shield
}];
export function Services() {
  return <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Everything you need, <br />
            <span className="text-cyan-500">nothing you don't.</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive tax services designed for modern life. Simple,
            transparent pricing with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => <div key={service.title} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-cyan-50 text-cyan-500 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}