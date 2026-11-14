'use client';

import React, { useState } from 'react';
import { submitNewsletter } from '@/lib/api';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setFeedback('');

    const res = await submitNewsletter(email);
    if (res.success) {
      setStatus('success');
      setFeedback(res.message || 'Merci pour votre inscription !');
      setEmail('');
    } else {
      setStatus('error');
      setFeedback(res.message || "Une erreur s'est produite.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? '...' : 'subscribe'}
        </button>
      </form>
      {feedback && (
        <p style={{
          color: status === 'success' ? '#28a745' : '#dc3545',
          fontSize: '0.875rem',
          marginTop: '6px'
        }}>
          {feedback}
        </p>
      )}
    </div>
  );
}
