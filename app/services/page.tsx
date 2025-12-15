'use client';

import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { Check, FileText, Briefcase, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [{
    icon: <FileText className="h-6 w-6 text-cyan-500" />,
    title: 'Individual Tax Filing',
    description: 'Comprehensive tax return preparation for individuals and families. We handle W-2s, 1099s, investments, and more.',
    features: ['Federal & State Returns', 'Deduction Optimization', 'Electronic Filing', 'Audit Protection Available']
  }, {
    icon: <Briefcase className="h-6 w-6 text-cyan-500" />,
    title: 'Business Tax Services',
    description: 'Expert tax solutions for freelancers, LLCs, and corporations. Stay compliant while maximizing your business deductions.',
    features: ['Schedule C & K-1s', 'Quarterly Estimates', 'Payroll Tax Support', 'Entity Classification']
  }, {
    icon: <TrendingUp className="h-6 w-6 text-cyan-500" />,
    title: 'Tax Planning',
    description: "Proactive strategies to minimize your tax liability before year-end. Don't just file taxes, plan for your future.",
    features: ['Year-round Strategy', 'Retirement Planning', 'Investment Tax Analysis', 'Real Estate Advisory']
  }, {
    icon: <Shield className="h-6 w-6 text-cyan-500" />,
    title: 'Audit Support',
    description: 'Full representation and support in case of IRS inquiries. We stand behind our work and beside you.',
    features: ['IRS Correspondence', 'In-person Representation', 'Penalty Abatement', 'Resolution Negotiation']
  }];
  const pricing = [{
    name: 'Basic',
    price: 'Free',
    description: 'For simple tax returns (W-2 only)',
    features: ['Federal & State Filing', 'Standard Deduction', 'W-2 Import', 'Email Support'],
    cta: 'Start Free',
    highlight: false
  }, {
    name: 'Professional',
    price: '$199',
    description: 'For homeowners and investors',
    features: ['Itemized Deductions', 'Investment Income', 'Rental Property', 'Priority Chat Support', 'Audit Assistance'],
    cta: 'Get Started',
    highlight: true
  }, {
    name: 'Premium',
    price: '$499',
    description: 'For freelancers and business owners',
    features: ['Business Income (Sch C)', 'Self-Employment Tax', 'Quarterly Estimates', 'Dedicated CPA Review', 'Year-round Planning'],
    cta: 'Contact Sales',
    highlight: false
  }];
  return <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <Navigation />

      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-cyan-900/5 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Tax Services for{' '}
              <span className="text-cyan-600">Every Situation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple returns to complex business filings, our team of CPAs
              and tax professionals has you covered.
            </p>
          </div>
        </section>

        {/* Detailed Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-cyan-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>)}
                </ul>
              </div>)}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-gray-600">
                No hidden fees. Pay only for what you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {pricing.map((tier, index) => <div key={index} className={`bg-white rounded-2xl p-8 border ${tier.highlight ? 'border-cyan-500 ring-4 ring-cyan-500/10 shadow-xl relative z-10' : 'border-gray-100 shadow-sm'}`}>
                  {tier.highlight && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {tier.price}
                    </span>
                    {tier.price !== 'Free' && <span className="text-gray-500 ml-1">/return</span>}
                  </div>
                  <p className="text-gray-600 text-sm mb-8">
                    {tier.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => <li key={idx} className="flex items-start text-sm text-gray-700">
                        <Check className="h-5 w-5 text-cyan-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>

                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${tier.highlight ? 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg shadow-cyan-500/25' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                    {tier.cta}
                  </button>
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 text-center">
          <div className="bg-gray-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to simplify your taxes?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                Join thousands of happy clients who have switched to TaxFlow for
                a stress-free tax season.
              </p>
              <button className="inline-flex items-center bg-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/25">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
}
