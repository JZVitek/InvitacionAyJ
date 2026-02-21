'use client';

import CountdownTimer from './CountdownTimer';
import Image from 'next/image';
import fotoPrincipal from '../public/images/foto_principal.jpeg';

export default function HeroSection() {
  const weddingDate = new Date('2026-03-27T19:20:00');

  // Mantenemos el champagne pero con un toque más de saturación para que no sea blanco
  const accentColor = 'text-[#F5E6AD]'; 
  const borderColor = 'bg-[#F5E6AD]/60';

  return (
    <section className='relative min-h-[100dvh] flex items-center justify-center overflow-hidden'>
      {/* Background Image & Overlay */}
      <div className='absolute inset-0'>
        <Image
          src={fotoPrincipal}
          alt='Wedding background'
          className='w-full h-full object-cover'
          fill
          priority
          sizes='100vw'
        />
        {/* Doble Overlay: Uno oscuro general y un gradiente central para rescatar las letras */}
        <div className='absolute inset-0 bg-black/50' />
        <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/20' />
      </div>

      {/* Content Container - Añadí un filtro de sombra más pesado */}
      <div 
        className={`relative text-center ${accentColor} space-y-8 sm:space-y-12 max-w-3xl mx-auto px-4`}
        style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.8))' }}
      >
        
        <div className='space-y-4 sm:space-y-6'>
          <h3 className='text-lg sm:text-xl font-bold tracking-[0.3em] uppercase dancing-script-text'>
            Save the Date
          </h3>
          
          <div className={`w-24 sm:w-32 h-[1.5px] ${borderColor} mx-auto`} />

          <h1
            className='font-serif transition-opacity duration-500'
            style={{ 
              opacity: 1,
              textShadow: '2px 2px 15px rgba(0,0,0,0.5)' // Sombra directa al texto
            }}
          >
            <span className='block text-7xl md:text-8xl lg:text-9xl mb-2 dancing-script-text leading-tight font-medium'>
              Valeria
            </span>
            
            <div className="flex items-center justify-center gap-4 my-2">
              <span className={`w-8 sm:w-12 h-[1.5px] ${borderColor}`}></span>
              <span className='text-5xl sm:text-6xl dancing-script-text font-medium'>&</span>
              <span className={`w-8 sm:w-12 h-[1.5px] ${borderColor}`}></span>
            </div>

            <span className='block text-7xl md:text-8xl lg:text-9xl mt-2 dancing-script-text font-medium leading-tight'>
              José
            </span>
          </h1>

          <div className={`w-24 sm:w-32 h-[1.5px] ${borderColor} mx-auto`} />

          <p className='text-2xl sm:text-4xl font-semibold tracking-wider dancing-script-text'>
            Viernes 27 de Marzo, 2026
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="pt-4 brightness-110">
          <CountdownTimer targetDate={weddingDate} />
        </div>
      </div>
    </section>
  );
}