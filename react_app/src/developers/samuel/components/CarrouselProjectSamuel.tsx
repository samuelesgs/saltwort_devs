import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import type { TypeProject } from "../interfaces/project.interface";

interface Props {
  images: string[];
  type: TypeProject;
  
}

export const CarrouselSamuel = ({ images, type }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    }

    onSelect();
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    }
  }, [api])

  return (
    <Carousel
      className="relative w-full"
      setApi={setApi}
      opts={{
        loop: true,
        containScroll: false,
        align: 'center',
      }}>
      <CarouselContent className="-ml-1 mx-5 pt-20 pb-5">
        {images.map((img, index) => (
          <CarouselItem
            key={index}
            className={
              `basis-1/1 pl-1
              ${type === 'Mobile' ? ' md:basis-1/5' : 'md:basis-1/3'}
              ${index === current ? 'z-50' : 'z-0'}`
            }>
            <div
              className={`
                p-1
                m-4
                transition-all
                origin-bottom
                ${(current - 1) === index ? 'scale-105 -translate-y-5 z-20' : 'scale-100'}
                ${(current + 1) === index ? 'scale-105 -translate-y-5 z-20' : 'scale-100'}
                ${index === current ? 'scale-115 -translate-y-10 z-10' : 'scale-100'}
              `}>
              <img
                src={img}
                alt=""
                className={`
                  rounded-2xl object-fill p-0
                  ${type === 'Mobile' ? 'w-full h-80' : 'w-full h-auto'}
                  ${index === (current - 1) && 'opacity-90'}
                  ${index === (current + 1) && 'opacity-90'}
                  ${index !== current && 'opacity-70'}
                `} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="hidden md:flex hover:text-white absolute border border-transparent top-auto bottom-0 left-5/12 -translate-x-10 translate-y-0 text-white bg-purple"
      />
      <CarouselNext
        className="hidden md:flex hover:text-white absolute border border-transparent top-auto bottom-0 right-5/12 translate-x-10 translate-y-0 text-white bg-purple"
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-row items-center gap-2 mb-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${index === current ? "w-8 bg-purple-light animate-pulse-glow" : "w-2 bg-gray hover:bg-muted-foreground"
              }`}
          />
        ))}
      </div>
    </Carousel>
  )
}
