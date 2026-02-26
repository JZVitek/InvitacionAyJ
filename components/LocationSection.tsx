'use client';

import { Church, PartyPopper, MapPin, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface Location {
  name: string;
  address: string;
  mapsUrl: string;
  icon: typeof Church | typeof PartyPopper;
  image: string;
}

const locations: Location[] = [
  {
    name: 'Casino Roma (MILAN)',
    address: 'Benito Juárez 201, Chula Vista, 67188 Guadalupe, N.L.',
    mapsUrl: 'https://maps.google.com/?q=Casino+Roma+Guadalupe',
    icon: PartyPopper,
    image: '/images/roma_casino.webp',
  },
];

export default function LocationSection() {
  const openMaps = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Card className='p-6 sm:p-8'>
      <h2 className='text-4xl sm:text-5xl font-serif text-center mb-6 sm:mb-8 texto'>
        Ubicación
      </h2>
      <div className='grid gap-12'>
        {locations.map((location) => (
          <div key={location.name} className='text-center flex flex-col items-center'>
            
            {/* Círculo con Icono (Estilo Itinerario) */}
            <div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-sm mb-2'>
              <location.icon className='w-7 h-7 text-white' />
            </div>

            {/* Detalle del conector (Línea y Corazón) */}
            <div className='flex flex-col items-center mb-4'>
              <div className='w-[1px] h-3 bg-gray-400'></div>
              <Heart className='w-2 h-2 text-gray-400 fill-gray-400' />
            </div>

            {/* Nombre del lugar */}
            <h3 className='text-3xl sm:text-3xl font-semibold mb-4'>
              {location.name}
            </h3>

            {/* Imagen con bordes suavizados */}
            <div className='relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-4 shadow-md'>
              <Image
                src={location.image}
                alt={location.name}
                fill
                style={{ objectFit: 'cover' }}
                className='transition-transform duration-500 hover:scale-105'
              />
            </div>

            {/* Dirección */}
            <p className='text-gray-600 text-xl mb-6 max-w-sm'>
              {location.address}
            </p>

            {/* Botón Estilo Negro / Redondeado (Como el de Confirmación) */}
            <button
              onClick={() => openMaps(location.mapsUrl)}
              className='bg-black text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm transition-all duration-300 hover:bg-gray-800 active:scale-95 flex items-center gap-2'
            >
              <MapPin className='w-4 h-4' />
              Ver en Google Maps
            </button>
            
          </div>
        ))}
      </div>
    </Card>
  );
}