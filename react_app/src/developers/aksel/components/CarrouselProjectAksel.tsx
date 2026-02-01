import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react";

export const CarrouselProjectAksel = ({ images }: { images: string[] }) => {
  
  const GAP = 32;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sizeWidth, setSizeWidth] = useState(140);
  const imgCarrousel = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const newSize = (imgCarrousel.current?.offsetWidth ?? sizeWidth) + GAP
    setSizeWidth(newSize);
    console.log({ sizeWidth });
    
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden flex justify-center">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-[#112240] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-[#112240] to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center transition-transform duration-500 ease-out py-4 gap-3"
          style={{ transform: `translateX(calc(50% - ${currentIndex * sizeWidth}px))` }}
        >
          {images.map((img, idx) => {
            const isActive = idx === currentIndex
            return (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                ref={ idx === 0 ? imgCarrousel : null }
                className={`relative h-40 md:h-60 w-20  md:w-40 rounded-xl overflow-hidden border-2 transition-all duration-500 ease-out shrink-0 cursor-pointer flex justify-center ${isActive
                    ? "border-cyan-500/70 shadow-lg shadow-cyan-500/30 scale-110 z-20"
                    : "border-[#1e3a5f] opacity-50 scale-90 blur-[1px] hover:opacity-70"
                  }`}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Screenshot ${idx + 1}`}
                  className="object-cover object-top w-full h-full"
                />
              </div>
            )
          })}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 bg-[#0a0f1a]/90 backdrop-blur-sm rounded-full text-cyan-400 transition-all duration-300 hover:bg-cyan-500/20 hover:scale-110 active:scale-95 border border-cyan-500/30"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 bg-[#0a0f1a]/90 backdrop-blur-sm rounded-full text-cyan-400 transition-all duration-300 hover:bg-cyan-500/20 hover:scale-110 active:scale-95 border border-cyan-500/30"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-cyan-400 w-6" : "bg-[#1e3a5f] w-1.5 hover:bg-cyan-400/50"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}