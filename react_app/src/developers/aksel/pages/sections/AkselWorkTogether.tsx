import { Mail } from "../../../../assets/ui/Mail.icon"

export const AkselWorkTogether = () => {
  return (
    <div className="mt-15 flex justify-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl text-white font-bold justify-center flex">
          ¿Trabajamos Juntos?
        </h1>
        <p className="secondary-text justify-center flex text-center">
          Estoy abierto a nuevas oportunidades y proyectos interesantes.
        </p>
        <div className="flex justify-center">
          <a href="mailto:akselherrera18@gmail.com">
            <button
              className="flex flex-row gap-3 cursor-pointer items-center bg-blue-gradient rounded-4xl px-5 py-3">
              <Mail
                className="text-white w-5 h-5" />
              <span className="text-white">
                Contáctame
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
