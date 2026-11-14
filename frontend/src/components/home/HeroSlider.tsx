'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeroSlide } from '@/lib/types';
import { DEFAULT_SLIDES } from '@/lib/api';

interface HeroSliderProps {
  slides?: HeroSlide[];
}

export default function HeroSlider({ slides = DEFAULT_SLIDES }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  const currentSlides = slides && slides.length > 0 ? slides : DEFAULT_SLIDES;

  return (
    <section className="slider_section position-relative">
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {currentSlides.map((_, idx) => (
              <li
                key={idx}
                className={idx === activeIndex ? 'active' : ''}
                onClick={() => setActiveIndex(idx)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </ol>
          <div className="carousel-inner">
            {currentSlides.map((slide, idx) => (
              <div
                key={slide.id || idx}
                className={`carousel-item ${idx === activeIndex ? 'active' : ''}`}
                style={{
                  display: idx === activeIndex ? 'block' : 'none',
                  transition: 'opacity 0.6s ease-in-out',
                }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        {slide.title} <br />
                        <span>{slide.subtitle}</span>
                      </h1>
                      <p>{slide.description}</p>
                      <div className="btn-box">
                        <Link href={slide.primary_btn_url || '/about'} className="btn-1">
                          {slide.primary_btn_text || 'Read More'}
                        </Link>
                        <Link href={slide.secondary_btn_url || '/contact'} className="btn-2">
                          {slide.secondary_btn_text || 'Contact us'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
