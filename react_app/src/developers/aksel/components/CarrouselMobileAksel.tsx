import { Card, CardContent } from "@/components/ui/card"
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
    <div className="flex justify-center mt-3 w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          containScroll: 'trimSnaps',
          loop: true
        }}
        className="w-full max-w-sm mx-auto"
      >
        <CarouselContent
          className="">
          {
            images.map((img, index) => (
              <CarouselItem
                key={index}
                className="basis-[85%] md:basis-1/3">
                <div className="p-1">
                  <Card
                    className={`
                      transition duration-300
                      ${index === current
                        ? 'shadow shadow-cyan-500 scale-110'
                        : 'blur-[1px]'}
                    `}>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img
                        src={img}
                        alt="" />
                    </CardContent>
                  </Card>
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
