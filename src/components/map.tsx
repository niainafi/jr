"use client";


import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return; // Évite les doubles initialisations
    setMounted(true);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div ref={mapRef} className="w-full h-full rounded-lg">
      <MapContainer
        center={[-18.8792, 47.5079]}
        zoom={13}
        className="w-full h-full rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}




