import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InfoSection from '@/components/layout/InfoSection';
import AboutPreview from '@/components/home/AboutPreview';
import { fetchAboutSection, fetchSiteConfig } from '@/lib/api';

export const metadata = {
  title: 'About Us - Brighton Learning Center',
  description: 'Learn more about Brighton Learning Center for your kids.',
};

export const revalidate = 60;

export default async function AboutPage() {
  const [about, config] = await Promise.all([
    fetchAboutSection(),
    fetchSiteConfig(),
  ]);

  return (
    <div className="sub_page">
      <div className="hero_area">
        <Header />
      </div>

      <AboutPreview about={about} />

      <InfoSection config={config} />

      <Footer />
    </div>
  );
}
