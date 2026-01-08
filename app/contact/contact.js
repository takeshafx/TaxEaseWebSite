import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <Layout title="Contact | Duffin's Donuts">
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-gray-600">Visit us in Vancouver or send us a message.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Store Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-lg text-brand-red">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Address</h3>
                      <p className="text-gray-600">1391 East 41st Avenue,<br/>Vancouver, BC, Canada</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-lg text-brand-red">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phone</h3>
                      <p className="text-gray-600">(604) 325‑5544</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-lg text-brand-red">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Hours</h3>
                      <p className="text-gray-600">Mon – Fri: 6 AM – 12 AM</p>
                      <p className="text-gray-600">Sat – Sun: Open 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-200 rounded-2xl h-80 overflow-hidden shadow-sm">
                <iframe 
                  src="https://maps.google.com/maps?q=1391+East+41st+Avenue,+Vancouver,+BC&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
