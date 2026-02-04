import { GitHub } from "@/assets/ui/GitHub.icon"
import { LinkedIn } from "@/assets/ui/LinkedIn.icon"
import { Mail, MapPin } from "lucide-react"

export const TitleHeaderSamuel = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-10 gap-5 md:items-center">
      <div className="flex justify-center">
        <img
          src="./icons/angular.png"
          alt=""
          className="w-40 h-45 col-span-1 md:col-span-1 border-purple-light rounded-xl"
        />
      </div>
      <div
        className="md:col-span-7 text-center md:text-left">
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
        className="md:col-span-2 flex flex-row gap-5 justify-center md:justify-end">
        <button
          className="bg-purple rounded-full p-1.5">
          <Mail
            className="text-white w-6 h-6"
          />
        </button>
        <button
          className="bg-purple rounded-full p-1.5">
          <LinkedIn
            className="text-white w-6 h-6" />
        </button>
        <button
          className="bg-purple rounded-full p-1.5">
          <GitHub
            className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
