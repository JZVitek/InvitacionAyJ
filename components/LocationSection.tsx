'use client';

import { Church, PartyPopper, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
    name: 'The Shrine Of Saint Therese',
    address: '855 E Floradora Ave, Fresno, CA 93728, Estados Unidos',
    mapsUrl:
      'https://www.google.com/maps/place/The+Shrine+Of+Saint+Therese/@36.7615322,-119.8033211,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x809467501dadd5a1:0x4e9c4fb4f5b3bb6d!2s855+E+Floradora+Ave,+Fresno,+CA+93728,+Estados+Unidos!2m2!1d-119.8008826!2d36.7615306!3m5!1s0x809467501dadd5a1:0x4e9c4fb4f5b3bb6d!8m2!3d36.7615279!4d-119.8007462!16s%2Fg%2F1vhlyfgs?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D',
    icon: Church,
    image: '/images/church.png',
  },
  {
    name: 'The Palomino Event Center',
    address:
      '2111 Tuolumne St, Fresno, CA 93721, Estados Unidos',
    mapsUrl:
      'https://www.google.com/maps/place/The+Palomino+Event+Center/@36.7503833,-119.817827,14z/data=!4m6!3m5!1s0x809461fb33abfcf1:0x1dbe05c85975fde!8m2!3d36.739237!4d-119.793709!16s%2Fg%2F11v9kbpg0z?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D',
    icon: PartyPopper,
    image: '/images/palomino.jpg',
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
      <div className='grid sm:grid-cols-2 gap-8'>
        {locations.map((location) => (
          <div key={location.name} className='text-center space-y-4'>
            <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center mx-auto'>
              <location.icon className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
            </div>
            <h3 className='text-3xl sm:text-3xl font-semibold'>
              {location.name}
            </h3>
            <div className='relative h-48 sm:h-64 rounded-lg overflow-hidden'>
            <Image
                src={location.image}
                alt={location.name}
                fill
                style={{ objectFit: 'cover' }}
                className='transition-transform duration-300 hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300' />
            </div>
            <p className='text-gray-600 text-xl'>{location.address}</p>
            <Button
              variant='outline'
              onClick={() => openMaps(location.mapsUrl)}
              className='text-2xl w-full hover:bg-primary hover:text-white transition-colors duration-300'
            >
              <MapPin className='w-4 h-4 mr-2' />
              Abrir en Maps
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
