'use client';

import React, { useState } from 'react';
import { submitContactMessage } from '@/lib/api';
import GoogleMap from '../map/GoogleMap';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus('error');
      setFeedback('Veuillez renseigner votre nom et votre adresse email.');
      return;
    }

    setStatus('loading');
    setFeedback('');

    const res = await submitContactMessage(formData);
    if (res.success) {
      setStatus('success');
      setFeedback(res.message || 'Votre message a été envoyé avec succès !');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setStatus('error');
      setFeedback(res.message || "Une erreur est survenue lors de l'envoi.");
    }
  };

  return (
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
            Request <span>A call Back</span>
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="message"
                  className="message-box"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
              </div>
              <div className="d-flex mt-4">
                <button type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'ENVOI...' : 'SEND'}
                </button>
              </div>
              {feedback && (
                <div style={{ marginTop: '14px' }}>
                  <p style={{
                    color: status === 'success' ? '#28a745' : '#dc3545',
                    fontWeight: 'bold',
                    margin: 0
                  }}>
                    {feedback}
                  </p>
                </div>
              )}
            </form>
          </div>
          <div className="col-md-6">
            <GoogleMap />
          </div>
        </div>
      </div>
    </section>
  );
}
