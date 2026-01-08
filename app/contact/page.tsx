import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with TaxEase Web Service for any inquiries or to get started with our services.',
};

export default function ContactPage() {
  return <ContactForm />;
}