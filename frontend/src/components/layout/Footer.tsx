import React from 'react';

export default function Footer() {
  return (
    <section className="container-fluid footer_section">
      <p>
        &copy; {new Date().getFullYear()} All Rights Reserved By{' '}
        <a href="https://html.design/" target="_blank" rel="noopener noreferrer">Free Html Templates</a>
      </p>
    </section>
  );
}
