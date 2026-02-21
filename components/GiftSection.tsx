'use client';

import React from 'react';
import { Gift, Mail, Banknote } from 'lucide-react';

export default function GiftSection() {
  return (
    <div className='text-center space-y-6'>
      <div className='w-12 h-12 flex items-center justify-center mx-auto'>
        <Gift className='w-10 h-10 text-black' />
      </div>

      <h2 className='text-4xl sm:text-5xl font-serif texto'>
        ¡Lluvia de sobres!
      </h2>

      <div className='flex justify-center items-center gap-6 pt-4'>
        <div className='flex flex-col items-center gap-2'>
          <Mail className='w-8 h-8 text-black opacity-80' />
          <span className='text-xs uppercase tracking-widest font-semibold'>
            Sobre
          </span>
        </div>
        <span className='text-2xl font-light text-gray-400'>+</span>
        <div className='flex flex-col items-center gap-2'>
          <Banknote className='w-8 h-8 text-black opacity-80' />
          <span className='text-xs uppercase tracking-widest font-semibold'>
            Presente
          </span>
        </div>
      </div>
    </div>
  );
}
