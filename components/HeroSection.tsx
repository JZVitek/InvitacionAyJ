'use client';

import { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import Image from 'next/image';

export default function HeroSection() {
  const weddingDate = new Date('2025-07-30T17:00:00');

  // State to toggle between the two texts
  const [isWedding, setIsWedding] = useState(true);

  // Toggle the text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsWedding((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className='relative min-h-[100dvh] flex items-center justify-center'>
      <div className='absolute inset-0'>
        <Image
          src='https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Wedding background'
          className='w-full h-full object-cover'
          fill
          priority
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-black/40' />
      </div>
      <div className='relative text-center text-white space-y-8 sm:space-y-12 max-w-3xl mx-auto px-4'>
        <div className='space-y-4 sm:space-y-6'>
          <h3 className='text-lg sm:text-xl font-light tracking-[0.2em] uppercase dancing-script-text'>
            Save the Date
          </h3>
          <div className='w-24 sm:w-32 h-[1px] bg-white/50 mx-auto' />
          <h1 className='font-serif'>
            {isWedding ? (
              <>
                <span className='block text-9xl sm:text-8xl mb-2 dancing-script-text'>
                  Andrea
                </span>
                <span className='inline-block w-6 sm:w-8 h-[1px] bg-white/50 mx-3 sm:mx-4 align-middle'></span>
                <span className='text-6xl sm:text-6xl dancing-script-text'>
                  &
                </span>
                <span className='inline-block w-6 sm:w-8 h-[1px] bg-white/50 mx-3 sm:mx-4 align-middle'></span>
                <span className='block text-9xl sm:text-8xl mt-2 dancing-script-text'>
                  José
                </span>
              </>
            ) : (
              <>
                <span className='block text-8xl sm:text-8xl mb-2 dancing-script-text'>
                  XV
                </span>
                <span className='inline-block w-6 sm:w-8 h-[1px] bg-white/50 mx-3 sm:mx-4 align-middle'></span>
                <span className='text-6xl sm:text-6xl dancing-script-text'>
                  Años
                </span>
                <span className='inline-block w-6 sm:w-8 h-[1px] bg-white/50 mx-3 sm:mx-4 align-middle'></span>
                <span className='block text-8xl sm:text-8xl mt-2 dancing-script-text'>
                  Stephanie
                </span>
              </>
            )}
          </h1>
          <div className='w-24 sm:w-32 h-[1px] bg-white/50 mx-auto' />
          <p className='text-3xl sm:text-2xl font-light tracking-wider dancing-script-text'>
            Sab 30 de Agosto, 2025
          </p>
        </div>
        <CountdownTimer targetDate={weddingDate} />
      </div>
    </section>
  );
}
