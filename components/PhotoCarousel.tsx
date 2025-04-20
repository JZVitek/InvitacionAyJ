'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface PhotoCarouselProps {
  photos: { url: string; alt: string }[];
}

export default function PhotoCarousel({ photos }: PhotoCarouselProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden aspect-[3/4]">
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    width={800} // Ajusta el ancho según sea necesario
                    height={600} // Ajusta la altura según sea necesario
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}