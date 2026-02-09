import { GitHub } from "@/assets/ui/GitHub.icon"
import { LinkedIn } from "@/assets/ui/LinkedIn.icon"
import { Mail, MapPin } from "lucide-react"

export const TitleHeaderSamuel = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12 gap-5 md:items-center">
      <div className="flex justify-center col-span-2 md:col-span-2">
        <img
          src="./icons/swift.png"
          alt=""
          className="w-40 h-45 border-purple-light rounded-xl shadow-xl shadow-primary/20 animate-pulse-glow"
        />
      </div>
      <div
        className="col-span-2 md:col-span-7 text-center md:text-left">
        <h1
          className="text-white text-xl md:text-3xl font-bold">
          Edgar Samuel Guerrero Sandoval
        </h1>
        <p className="purple-light-color text-sm md:text-xl mt-2">
          Sr. Developer
        </p>
        <p
          className="flex flex-row gap-1 justify-center md:justify-start text-secondary text-sm mt-2 text-center">
          <MapPin
            className="w-5 h-5" />
          México
        </p>
      </div>
      <div
        className="col-span-2 md:col-span-3 flex flex-row gap-5 justify-center md:justify-end">
        <button
          className="bg-purple rounded-full p-1.5 hover:text-white transition-all ease-in-out duration-300 btn-email hover:scale-110 hover:rotate-6">
          <Mail
            className="purple-light-color w-6 h-6"
          />
        </button>
        <button
          className="bg-purple rounded-full p-1.5 transition-all ease-in-out duration-300 btn-linkedin hover:scale-110 hover:rotate-6">
          <LinkedIn
            className="purple-light-color w-6 h-6" />
        </button>
        <button
          className="bg-purple rounded-full p-1.5  transition-all ease-in-out duration-300 btn-github hover:scale-110 hover:rotate-6">
          <GitHub
            className="purple-light-color w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
