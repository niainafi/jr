"use client";


import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
        center={[-18.850346261691552, 47.47786921339237]}
        zoom={13}
        className="w-full h-full rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[-18.850346261691552, 47.47786921339237]} icon={customIcon}>
          <Popup>📍{`Just Ride`}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

const customIcon = new L.Icon({
  iconUrl: "/images/marker/business.png", 
  iconSize: [30, 40], 
  iconAnchor: [20, 40], 
  popupAnchor: [0, -40],
});


