import { ChevronLeft, ChevronRight } from "lucide-react"

export const CarrouselProjectAksel = () => {

  const images: string[] = [
    './icons/swift.png',
    './icons/swift.png',
    './icons/swift.png',
    './icons/swift.png',
    './icons/swift.png',
    './icons/swift.png',
    './icons/swift.png',
    './icons/swift.png',
  ]

  return (
    <div className="grid grid-cols-16 mt-2">
      <div className="col-span-1 flex items-center">
        <button
          className="flex box-cyan bg-blue-dark w-12 h-12 items-center justify-center rounded-full">
          <ChevronLeft
            className="text-cyan"
            size={32} />
        </button>
      </div>
      <div className="col-span-14 bg-red-200">
        <div className="col-span-10 relative h-105 flex items-center justify-center overflow-hidden">
          {images.map((img, index) => {
            const offset = index - 1;

            return (
              <img
                key={img}
                src={img}
                className={`
                absolute
                transition-all duration-500 ease-out
                rounded-xl
                box-cyan
                w-80
                h-100
                ${offset === 0
                    ? 'scale-100 opacity-100 z-20'
                    : 'scale-90 opacity-40 z-10 blur-sm'}
              `}
                style={{
                  transform: `translateX(${offset * 220}px)`
                }}
              />
            )
          })}
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <button
          className="flex box-cyan bg-blue-dark w-12 h-12 items-center justify-center rounded-full">
          <ChevronRight
            className="text-cyan"
            size={32} />
        </button>
      </div>
    </div>
  )
}
