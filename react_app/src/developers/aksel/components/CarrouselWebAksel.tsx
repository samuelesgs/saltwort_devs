import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

interface Props {
  images: string[];
}

export const CarrouselWebAksel = ({ images }: Props) => {
  return (
    <div
      className="flex justify-center mt-3">
      <Carousel
        className="w-full max-w-sm md:max-w-5xl"
        opts={{
          align: 'center',
          loop: true
        }}>
        <CarouselContent>
          {
            images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img
                    src={img}
                    alt=""
                    className="rounded-xl"/>
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
