import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from "react"

interface Props {
  images: string[]
}

export const CarrouselMobileAksel = ({ images }: Props) => {

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
      api.off('select', onSelect)
    }
  }, [api]);

  return (
    <div className="flex justify-center my-3 w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          containScroll: 'trimSnaps',
          loop: true
        }}
        className="w-full max-w-sm md:max-w-5xl mx-auto"
      >
        <CarouselContent
          className="">
          {
            images.map((img, index) => (
              <CarouselItem
                key={index}
                className="basis-[85%] md:basis-1/3">
                <div className="p-1">
                  <img
                    src={img}
                    alt=""
                    className={`
                      transition duration-300
                      rounded-xl
                      object-cover
                      ${index === current
                        ? 'shadow scale-100'
                        : 'blur-[3px]'}
                    `} />
                </div>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious
          className="hidden sm:flex bg-blue-dark text-cyan box-cyan w-10 h-10"
        />
        <CarouselNext
          className="hidden sm:flex bg-blue-dark text-cyan box-cyan w-10 h-10"
        />
      </Carousel>
    </div>
  )
}
