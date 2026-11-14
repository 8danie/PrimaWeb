import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InfoSection from '@/components/layout/InfoSection';
import OfferSection from '@/components/home/OfferSection';
import { fetchPrograms, fetchSiteConfig } from '@/lib/api';

export const metadata = {
  title: 'Our Programs - Brighton Learning Center',
  description: 'Discover the learning and development programs offered at Brighton.',
};

export const revalidate = 60;

export default async function ProgramPage() {
  const [programs, config] = await Promise.all([
    fetchPrograms(),
    fetchSiteConfig(),
  ]);

  return (
    <div className="sub_page">
      <div className="hero_area">
        <Header />
      </div>

      <OfferSection programs={programs} isHomePage={false} />

      <InfoSection config={config} />

      <Footer />
    </div>
  );
}
