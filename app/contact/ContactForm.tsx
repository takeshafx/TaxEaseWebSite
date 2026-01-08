'use client';

import { useState } from 'react';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle, X } from 'lucide-react';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'individual',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: 'individual',
          message: ''
        });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
    <Navigation />

    <main className="flex-grow pt-24 pb-16">
      <section className="bg-cyan-50/50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-cyan-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our services or ready to get started? We're
            here to help.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" name="phone" value={formState.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Interested In
                  </label>
                  <select id="service" name="service" value={formState.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-white">
                    <option value="individual">Individual Tax Filing</option>
                    <option value="business">Corporate Tax Filing</option>
                    <option value="planning">Corporate Accounting</option>
                    <option value="audit">Bookkeeping</option>
                    <option value="other">CRA Audit Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formState.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?" required></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 text-white font-semibold py-4 rounded-lg hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="h-4 w-4" />}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-50 p-3 rounded-lg mr-4 text-cyan-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600"> info@taxeaseadvisory.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-50 p-3 rounded-lg mr-4 text-cyan-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (672) 338-5499</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Mon-Fri from 8am to 6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-50 p-3 rounded-lg mr-4 text-cyan-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Office Location
                    </h3>
                    <p className="text-gray-600">
                      3104 – 13618 100 Ave
                      Surrey BC V3T 0A8
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl h-64 w-full overflow-hidden shadow-sm border border-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=13618+100+Ave,+Surrey,+BC+V3T+0A8&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>

    {showToast && (
      <div className="fixed bottom-8 right-8 z-50 bg-white border-l-4 border-cyan-500 shadow-2xl rounded-lg p-6 flex items-start gap-4 max-w-md">
        <div className="text-cyan-500 mt-0.5">
          <CheckCircle className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900">Message Sent!</h3>
          <p className="text-gray-600 text-sm mt-1">Thanks for reaching out. We'll get back to you shortly.</p>
        </div>
        <button onClick={() => setShowToast(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>
    )}

    <Footer />
  </div>;
}
