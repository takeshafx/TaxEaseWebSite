import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { Award, ShieldCheck, Clock, Quote } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about TaxEase Web Service and our team of expert tax professionals.',
};

export default function AboutPage() {
  const stats = [{
    label: 'Years Experience',
    value: '15+'
  }, {
    label: 'Returns Filed',
    value: '50k+'
  }, {
    label: 'Audit Success',
    value: '100%'
  }, {
    label: 'Team Members',
    value: '24'
  }];
  const team = [{
    name: 'Vishaka Sewwandi',
    role: 'Founder & Lead ACA',
    bio: 'Former Big 4 senior manager with 6 years of experience in accounting, tax, and assurance.',
    image: '/images/vishaka_profile.png'
  }, {
    name: 'Bhadra Hemamali',
    role: 'Senior Manager – Advisory Services',
    bio: 'Specializes in M&A advisory, business valuations, financial due diligence, and financial modelling',
    image: '/images/bhadra_profile.png'
  }, {
    name: 'Hashan Fernando',
    role: 'Client Success Director',
    bio: 'Ensures every client receives personalized attention and support.',
    image: '/images/hashan_profile.png'
  }];
  const testimonials = [{
    text: 'TaxEase made filing my business taxes incredibly easy. I saved hours of work and got a bigger refund than I expected.',
    author: 'James Wilson',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100'
  }, {
    text: "The best tax experience I've ever had. The platform is intuitive and my CPA was super responsive to all my questions.",
    author: 'Emily Chen',
    role: 'Freelance Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100'
  }, {
    text: 'Finally, a tax service that understands modern digital assets. They handled my crypto and stock options perfectly.',
    author: 'Marcus Johnson',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100'
  }];
  return <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <Navigation />

      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We're changing how people think about{' '}
              <span className="text-cyan-600">taxes.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Taxease was founded on a simple premise: tax season shouldn't be
              the most stressful time of the year. We combine human expertise
              with modern technology to deliver a seamless experience.
            </p>
          </div>

          {/* Office Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
            <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Modern TaxFlow office" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Headquartered in Vancouver
                </h3>
                <p className="text-white/80">
                  Serving clients nationwide with a team of dedicated
                  professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-900 py-16 mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => <div key={index}>
                  <div className="text-4xl font-bold text-cyan-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expertise First</h3>
              <p className="text-gray-600">
                Every return is reviewed by a certified CPA. We don't rely
                solely on algorithms; we use them to enhance our human
                expertise.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Bank-Level Security</h3>
              <p className="text-gray-600">
                Your data is protected with 256-bit encryption and secure client
                portals. We treat your privacy with the highest priority.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Always Available</h3>
              <p className="text-gray-600">
                We're not just here for tax season. Our team is available
                year-round to answer questions and help you plan ahead.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-24 mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Experts
              </h2>
              <p className="text-gray-600">The people behind the platform.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 scale-110"></div>
                    <Image src={member.image} alt={member.name} width={128} height={128} className="w-full h-full object-cover rounded-full border-4 border-white shadow-md" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan-600 text-sm font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                <Quote className="h-8 w-8 text-cyan-100 absolute top-6 left-6" />
                <p className="text-gray-600 mb-8 relative z-10 pt-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                  <Image src={testimonial.image} alt={testimonial.author} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </section>
      </main>

      <Footer />
    </div>;
}
