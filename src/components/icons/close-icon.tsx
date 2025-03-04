import React from 'react';

interface CloseIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function CloseIcon({
  width = 24, // Taille réduite
  height = 24, // Taille réduite
  color = 'white',
}: CloseIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-300 transform hover:scale-110 hover:opacity-80"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

