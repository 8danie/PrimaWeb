import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InfoSection from '@/components/layout/InfoSection';
import ContactForm from '@/components/forms/ContactForm';
import { fetchSiteConfig } from '@/lib/api';

export const metadata = {
  title: 'Contact Us - Brighton Learning Center',
  description: 'Request a call back or visit Brighton Learning Center.',
};

export const revalidate = 60;

export default async function ContactPage() {
  const config = await fetchSiteConfig();

  return (
    <div className="sub_page">
      <div className="hero_area">
        <Header />
      </div>

      <ContactForm />

      <InfoSection config={config} />

      <Footer />
    </div>
  );
}
