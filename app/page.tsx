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
  Heart,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import LocationSection from '@/components/LocationSection';
import ParticlesBackground from '@/components/particles-background';
import PhotoCarousel from '@/components/PhotoCarousel';
import SendWhatsapp from '@/components/SendWhatsapp';
import ConfirmReservation from '@/components/ConfirmReservation';
import Schedule from '@/components/Schedule';
import GiftSection from '@/components/GiftSection';

const weddingPhotos = [
  { url: '/images/b1.jpeg', alt: 'Imagen 1' },
  { url: '/images/b2.jpeg', alt: 'Imagen 2' },
  { url: '/images/b3.jpeg', alt: 'Imagen 3' },
  { url: '/images/foto_principal.jpeg', alt: 'Imagen 4' },
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
            <Card className='p-6 sm:p-8 text-center'>
              <h2 className='text-4xl sm:text-5xl font-serif mb-10 texto text-black'>
                Nuestra Boda
              </h2>

              <div className='grid sm:grid-cols-2 gap-12 sm:gap-8 relative'>
                {/* Ceremonia */}
                <div className='flex flex-col items-center'>
                  {/* Círculo con Icono */}
                  <div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-sm mb-2'>
                    <Church className='w-7 h-7 text-white' />
                  </div>

                  {/* Conector Visual */}
                  <div className='flex flex-col items-center mb-4'>
                    <div className='w-[1px] h-3 bg-gray-400'></div>
                    <Heart className='w-2 h-2 text-gray-400 fill-gray-400' />
                  </div>

                  <h3 className='text-3xl sm:text-3xl font-semibold mb-3'>
                    Ceremonia
                  </h3>

                  <div className='space-y-1'>
                    <p className='flex items-center justify-center gap-2 text-xl'>
                      <Calendar className='w-5 h-5 text-gray-600' />
                      27 de Marzo, 2026
                    </p>
                    <p className='flex items-center justify-center gap-2 text-xl'>
                      <Clock className='w-5 h-5 text-gray-600' />
                      07:20 PM
                    </p>
                  </div>
                </div>

                {/* Recepción */}
                <div className='flex flex-col items-center'>
                  {/* Círculo con Icono */}
                  <div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-sm mb-2'>
                    <BellElectric className='w-7 h-7 text-white' />
                  </div>

                  {/* Conector Visual */}
                  <div className='flex flex-col items-center mb-4'>
                    <div className='w-[1px] h-3 bg-gray-400'></div>
                    <Heart className='w-2 h-2 text-gray-400 fill-gray-400' />
                  </div>

                  <h3 className='text-3xl sm:text-3xl font-semibold mb-3'>
                    Recepción
                  </h3>

                  <div className='space-y-1'>
                    <p className='flex items-center justify-center gap-2 text-xl'>
                      <Calendar className='w-5 h-5 text-gray-600' />
                      27 de Marzo, 2026
                    </p>
                    <p className='flex items-center justify-center gap-2 text-xl'>
                      <Clock className='w-5 h-5 text-gray-600' />
                      08:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <LocationSection />

            {/* Itinerario del evento */}
            <Schedule />

            {/* Confirmación de reservación */}
            <Card className='p-6 sm:p-8 space-y-6'>
              <ConfirmReservation />
            </Card>

            <Card className='p-6 sm:p-8 space-y-6'>
              <GiftSection />
            </Card>

            {/* Galería de la boda */}
            <Card className='p-6 sm:p-8 space-y-6'>
              <div className='text-center'>
                <h2 className='text-5xl sm:text-5xl font-serif mb-4 texto'>
                  Nuestros momentos
                </h2>
              </div>
              <PhotoCarousel photos={weddingPhotos} />
            </Card>

            {/* Contact */}
            <Card className='p-6 sm:p-8 text-center'>
              <h2 className='text-4xl sm:text-4xl font-serif mb-6 texto'>
                ¿Alguna pregunta?
              </h2>
              <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-8'>
                <div className='flex items-center justify-center gap-2 text-xl'>
                  <Phone className='w-4 h-4' />
                  <span>+18307081047</span>
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
