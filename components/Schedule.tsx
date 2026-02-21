'use client';

import { CakeSlice, Heart, GlassWater } from 'lucide-react';
import { Card } from '@/components/ui/card';

const schedule = [
  {
    time: '07:00 PM',
    event: 'Bienvenida',
    icon: GlassWater,
  },
  {
    time: '07:20 PM',
    event: 'Ceremonia Civil',
    icon: Heart,
  },
  {
    time: '08:00 PM',
    event: 'Recepción',
  },
];

export default function Schedule() {
  return (
    <Card className='p-6 sm:p-8'>
      <h2 className='text-4xl sm:text-5xl font-serif text-center mb-10 texto'>
        Itinerario
      </h2>
      
      {/* Contenedor principal: Horizontal en desktop, Vertical en mobile */}
      <div className='relative flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-4 max-w-3xl mx-auto'>
        
        {/* Línea conectora horizontal (solo visible en desktop) */}
        <div className='absolute top-[32px] left-0 w-full h-[1px] bg-gray-200 hidden sm:block' />

        {schedule.map((item, index) => (
          <div key={index} className='relative flex flex-col items-center flex-1 z-10'>
            
            {/* Círculo con Icono (usando tu bg-primary) */}
            <div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-sm mb-2'>
               {/* Si el evento tiene icono lo muestra, si no (como Recepción en tu imagen), queda el círculo limpio o con un icono por defecto */}
              {item.icon ? (
                <item.icon className='w-7 h-7 text-white' />
              ) : (
                <CakeSlice className='w-7 h-7 text-white' />
              )}
            </div>

            {/* El detalle del corazón y la línea vertical de la imagen */}
            <div className='flex flex-col items-center mb-2'>
              <div className='w-[1px] h-3 bg-gray-400'></div>
              <Heart className='w-2 h-2 text-gray-400 fill-gray-400' />
            </div>

            {/* Textos: Evento arriba, Hora abajo */}
            <div className='text-center'>
              <div className='text-xl font-semibold leading-tight mb-1'>
                {item.event}
              </div>
              <div className='text-lg text-gray-600'>
                {item.time}
              </div>
            </div>

          </div>
        ))}
      </div>
    </Card>
  );
}