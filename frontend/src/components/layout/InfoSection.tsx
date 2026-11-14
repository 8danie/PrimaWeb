import React from 'react';
import Link from 'next/link';
import NewsletterForm from '../forms/NewsletterForm';
import { SiteConfiguration } from '@/lib/types';
import { DEFAULT_CONFIG } from '@/lib/api';

interface InfoSectionProps {
  config?: SiteConfiguration;
}

export default function InfoSection({ config = DEFAULT_CONFIG }: InfoSectionProps) {
  return (
    <section className="info_section layout_padding">
      <div className="container">
        <div className="info_form">
          <div className="row">
            <div className="offset-lg-3 col-lg-3">
              <h5 className="form_heading">Newsletter</h5>
            </div>
            <div className="col-md-6">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="info_logo">
              <div>
                <Link href="/">
                  <img src="/images/logo.png" alt="Brighton Logo" />
                  <span>{config.site_name}</span>
                </Link>
              </div>
              <p>{config.footer_about_text}</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_links">
              <h5>Contact Us</h5>
              <p className="pr-0 pr-md-4 pr-lg-5">{config.contact_info_text}</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_insta">
              <h5>INFORMATION</h5>
              <p className="pr-0 pr-md-4 pr-md-5">{config.information_text}</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pl-0 pl-lg-5 pl-md-4">
              <h5>MY ACCOUNT</h5>
              <p>{config.account_text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
