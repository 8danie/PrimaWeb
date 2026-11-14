import React from 'react';
import { ProgramOffer } from '@/lib/types';
import { DEFAULT_PROGRAMS } from '@/lib/api';
import OfferIcon from './OfferIcon';

interface OfferSectionProps {
  programs?: ProgramOffer[];
  isHomePage?: boolean;
}

export default function OfferSection({ programs = DEFAULT_PROGRAMS, isHomePage = false }: OfferSectionProps) {
  const currentPrograms = programs && programs.length > 0 ? programs : DEFAULT_PROGRAMS;

  return (
    <section className={`offer_section ${isHomePage ? 'hero_next_section-margin' : ''} layout_padding`}>
      <div className="container">
        <div className="heading_container">
          <h2>what we offer</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </p>
        </div>
        <div className="row">
          {currentPrograms.map((p) => (
            <div key={p.id} className="col-md-6">
              <div className="content-box">
                <div className="img-box">
                  <OfferIcon name={p.icon_name} />
                </div>
                <div className="detail-box">
                  <h6>{p.title}</h6>
                  <p>{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
