'use client';

import React, { useState } from 'react';
import { Testimonial } from '@/lib/types';
import { DEFAULT_TESTIMONIALS } from '@/lib/api';

interface TestimonialsSliderProps {
  testimonials?: Testimonial[];
}

export default function TestimonialsSlider({ testimonials = DEFAULT_TESTIMONIALS }: TestimonialsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentTestimonials = testimonials && testimonials.length > 0 ? testimonials : DEFAULT_TESTIMONIALS;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveIndex((prev) => (prev === 0 ? currentTestimonials.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveIndex((prev) => (prev + 1) % currentTestimonials.length);
  };

  return (
    <section className="client_section layout_padding">
      <div className="container layout_padding2-top">
        <div className="heading_container">
          <h2>Parent’s Feedback</h2>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {currentTestimonials.map((item, idx) => (
              <div
                key={item.id || idx}
                className={`carousel-item ${idx === activeIndex ? 'active' : ''}`}
                style={{
                  display: idx === activeIndex ? 'block' : 'none',
                  transition: 'opacity 0.6s ease-in-out',
                }}
              >
                <div className="client_container layout_padding">
                  <div className="img-box">
                    <img src={item.avatar || "/images/client.png"} alt={item.client_name} />
                  </div>
                  <div className="detail-box">
                    <h4>{item.client_name}</h4>
                    <h6>{item.client_role}</h6>
                    <p>{item.quote}</p>
                    <img src="/images/quote.png" alt="Quote Icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            onClick={handlePrev}
            style={{ cursor: 'pointer' }}
          >
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            onClick={handleNext}
            style={{ cursor: 'pointer' }}
          >
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}
