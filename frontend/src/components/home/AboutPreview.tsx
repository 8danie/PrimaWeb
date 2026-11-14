import React from 'react';
import Link from 'next/link';
import { AboutSectionData } from '@/lib/types';
import { DEFAULT_ABOUT } from '@/lib/api';

interface AboutPreviewProps {
  about?: AboutSectionData;
}

export default function AboutPreview({ about = DEFAULT_ABOUT }: AboutPreviewProps) {
  const currentAbout = about || DEFAULT_ABOUT;

  return (
    <section className="about_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src="/images/about-img.jpg" alt="About Brighton" />
            </div>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="detail-box">
              <div className="heading_container">
                <h2>{currentAbout.title}</h2>
              </div>
              <p>{currentAbout.content}</p>
              <div>
                <Link href={currentAbout.button_url || '/about'}>
                  {currentAbout.button_text || 'Read More'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
