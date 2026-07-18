import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function MapComponent({ style, interactive = true }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Kolej Sancaktepe coordinates - exact location from Google Maps
  const position = [40.98249787796874, 29.210358806835465];

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: position,
      zoom: 16,
      scrollWheelZoom: interactive,
      dragging: interactive,
      zoomControl: interactive,
      doubleClickZoom: interactive,
      touchZoom: interactive,
      boxZoom: interactive,
      keyboard: interactive,
    });

    mapInstanceRef.current = map;

    // Add tile layer with custom styling similar to the filter applied
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
      className: 'map-tiles',
    }).addTo(map);

    // Add marker
    const marker = L.marker(position).addTo(map);
    marker.bindPopup('<b>Kolej Sancaktepe TED-AD</b><br>Eyüp Sultan Mah. Zulal Sk. B Blok No:2/2/1<br>Sancaktepe / İstanbul');

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [interactive]);

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '100%',
        border: 0,
        display: 'block',
        filter: 'saturate(0.65) contrast(1.1) brightness(0.88) hue-rotate(200deg)',
        ...style,
      }}
    />
  );
}
