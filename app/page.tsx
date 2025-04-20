'use client';

import {
  Calendar,
  Clock,
  Gift,
  Hash,
  Mail,
  Phone,
  MapPin,
  Church,
  BellElectric,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import Schedule from '@/components/Schedule';
import LocationSection from '@/components/LocationSection';
import ParticlesBackground from '@/components/particles-background';
import PhotoCarousel from '@/components/PhotoCarousel';
import GodparentsSection from '@/components/GodparentsSection';
import SendWhatsapp from '@/components/SendWhatsapp';

const weddingPhotos = [
  { url: '/images/b1.jpeg', alt: 'Imagen 1' },
  { url: '/images/b2.jpeg', alt: 'Imagen 2' },
  { url: '/images/b3.jpeg', alt: 'Imagen 3' },
  { url: '/images/b4.jpeg', alt: 'Imagen 4' },
  { url: '/images/b5.jpeg', alt: 'Imagen 5' },
  { url: '/images/b6.jpeg', alt: 'Imagen 6' },
];

const xvPhotos = [
  { url: '/images/xv1.jpeg', alt: 'XV Imagen 1' },
  { url: '/images/xv2.jpeg', alt: 'XV Imagen 2' },
];

export default function Home() {
  return (
    <main className='relative min-h-screen bg-[#f8f5f0] text-gray-800'>
      {/* Contenedor para las partículas */}
      <div className='absolute inset-0'>
        <ParticlesBackground />
      </div>
      <div className='relative z-10'>
        <HeroSection />

        {/* Details Section */}
        <section className='py-12 sm:py-20 px-4'>
          <div className='max-w-4xl mx-auto space-y-8 sm:space-y-12'>
            <Card className='p-6 sm:p-8 text-center space-y-6'>
              <h2 className='text-4xl sm:text-5xl font-serif texto'>
                Nuestra Boda y XV años
              </h2>
              <div className='grid sm:grid-cols-2 gap-8'>
                <div>
                  <div className='w-10 h-10 sm:w-12 sm:h-12  flex items-center justify-center mx-auto'>
                    <Church className='w-9 h-9 sm:w-8 sm:h-8 text-black' />
                  </div>
                  <h3 className='text-4xl sm:text-4xl font-semibold mb-2'>
                    Ceremonia
                  </h3>
                  <p className='flex items-center justify-center gap-2 text-xl'>
                    <Calendar className='w-4 h-4 text-2xl' />
                    30 de Agosto, 2025
                  </p>
                  <p className='flex items-center justify-center gap-2 text-xl'>
                    <Clock className='w-4 h-4' />
                    12:00 PM
                  </p>
                </div>
                <div>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto'>
                    <BellElectric className='w-9 h-9 sm:w-8 sm:h-8 text-black' />
                  </div>
                  <h3 className='text-4xl sm:text-4xl font-semibold mb-2'>
                    Recepción
                  </h3>
                  <p className='flex items-center justify-center gap-2 text-xl'>
                    <Calendar className='w-4 h-4 text-2xl' />
                    30 de Agosto, 2025
                  </p>
                  <p className='flex items-center justify-center gap-2 text-xl'>
                    <Clock className='w-4 h-4' />
                    5:00 PM
                  </p>
                </div>
              </div>
            </Card>

            <LocationSection />

            <Schedule />

            <GodparentsSection />

            {/* Parents Section */}
            <Card className='p-6 sm:p-8 text-center'>
              <h2 className='text-5xl sm:text-5xl font-serif mb-6 texto'>
                Con la bendición de nuestros padres
              </h2>
              <div className='grid sm:grid-cols-2 gap-6 sm:gap-8'>
                <div>
                  <h3 className='text-2xl sm:text-3xl font-semibold mb-2'>
                    Padres de la novia
                  </h3>
                  <p className='text-xl'>
                    Sr y Sra. Leticia Alday y Felix Alday
                  </p>
                </div>
                <div>
                  <h3 className='text-2xl sm:text-3xl font-semibold mb-2'>
                    Padres del novio
                  </h3>
                  <p className='text-xl'>
                    Sr y Sra. Jesus Zamora & Rosa Maria Ayala
                  </p>
                </div>
              </div>
            </Card>

            {/* Galería de la boda */}
            <Card className='p-6 sm:p-8 space-y-6'>
              <div className='text-center'>
                <h2 className='text-5xl sm:text-5xl font-serif mb-4 texto'>
                  Galería de la Boda
                </h2>
              </div>
              <PhotoCarousel photos={weddingPhotos} />
            </Card>

            {/* Galería de XV años */}
            <Card className='p-6 sm:p-8 space-y-6'>
              <div className='text-center'>
                <h2 className='text-5xl sm:text-5xl font-serif mb-4 texto'>
                  Galería de XV años
                </h2>
              </div>
              <PhotoCarousel photos={xvPhotos} />
            </Card>

            {/* Contact */}
            <Card className='p-6 sm:p-8 text-center'>
              <h2 className='text-4xl sm:text-4xl font-serif mb-6 texto'>
                ¿Alguna pregunta?
              </h2>
              <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-8'>
                <div className='flex items-center justify-center gap-2 text-xl'>
                  <Phone className='w-4 h-4' />
                  <span>5592837305</span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
      {/* Botón flotante de WhatsApp */}
      <SendWhatsapp />
    </main>
  );
}
