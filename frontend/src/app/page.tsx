import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InfoSection from '@/components/layout/InfoSection';
import HeroSlider from '@/components/home/HeroSlider';
import OfferSection from '@/components/home/OfferSection';
import AboutPreview from '@/components/home/AboutPreview';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import ContactForm from '@/components/forms/ContactForm';
import {
  fetchHeroSlides,
  fetchPrograms,
  fetchAboutSection,
  fetchTestimonials,
  fetchSiteConfig
} from '@/lib/api';

export const revalidate = 60; // Régénération statique incrémentielle (ISR) chaque minute

export default async function HomePage() {
  const [slides, programs, about, testimonials, config] = await Promise.all([
    fetchHeroSlides(),
    fetchPrograms(),
    fetchAboutSection(),
    fetchTestimonials(),
    fetchSiteConfig(),
  ]);

  return (
    <>
      <div className="hero_area">
        <Header />
        <HeroSlider slides={slides} />
      </div>

      <OfferSection programs={programs} isHomePage={true} />

      <AboutPreview about={about} />

      <TestimonialsSlider testimonials={testimonials} />

      <ContactForm />

      <InfoSection config={config} />

      <Footer />
    </>
  );
}
