import React from 'react';

interface GoogleMapProps {
  lat?: number;
  lng?: number;
}

export default function GoogleMap({ lat = 40.645037, lng = -73.880224 }: GoogleMapProps) {
  // Coordonnées originales de PrimaWeb : lat 40.645037, lng -73.880224 (Brooklyn / Jamaica Bay)
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=13&output=embed`;

  return (
    <div className="map_section" style={{ width: '100%', height: '100%', minHeight: '340px' }}>
      <iframe
        title="Location Map"
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '340px', borderRadius: '4px' }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
