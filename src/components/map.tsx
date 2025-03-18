"use client";
 {/*import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function Map() {
  return (
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
  );
}
*/}

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// 📍 Coordonnées de Just Rent - Corona Plaza, Andranomena
const position: [number, number] = [-18.850514, 47.477803];

export default function MapComponent() {
  const [customIcon, setCustomIcon] = useState<any>(null);

  useEffect(() => {
    const newIcon = new L.Icon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
      iconSize: [32, 48],
      iconAnchor: [16, 48],
      popupAnchor: [0, -40],
    });
    setCustomIcon(newIcon);
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={17}
      style={{ width: "100%", height: "100%", minHeight: "400px", borderRadius: "8px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {customIcon && (
        <Marker position={position} icon={customIcon}>
          <Popup>📍 Just Rent - Corona Plaza, Andranomena</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
