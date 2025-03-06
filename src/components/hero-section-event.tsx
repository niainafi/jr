import React from 'react';
import Header from './common/layout/header';

export default function HeroSection() {
  return (
    <div className="relative h-[380px] md:h-[500px] lg:h-[600px] xl:h-[450px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          background: "url(/images/evenement/head-event.jpg) no-repeat center center/cover" 
        }}
        
      />
    <div className="absolute inset-0" />
      <Header />
    </div>
  );
}
