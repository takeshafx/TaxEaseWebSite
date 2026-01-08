import { Navigation } from '../src/components/Navigation';
import { Footer } from '../src/components/Footer';
import { Hero } from '../src/components/Hero';
import { Services } from '../src/components/Services';
import { Process } from '../src/components/Process';
import { DigitalTools } from '../src/components/DigitalTools';
import { CTA } from '../src/components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to TaxEase Web Service. We provide professional tax services and solutions.',
};

export default function Home() {
  return <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-cyan-100 selection:text-cyan-900 flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <Hero />
        <Services />
        <Process />
        <DigitalTools />
        <CTA />
      </main>

      <Footer />
    </div>;
}
