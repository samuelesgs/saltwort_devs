import { GitHub } from "@/assets/ui/GitHub.icon"
import { LinkedIn } from "@/assets/ui/LinkedIn.icon"
import { Coffee, Mail, MessageCircle, Send, Sparkles } from "lucide-react"
import { SectionTitleSamuel } from "../../components/SectionTitleSamuel"

export const SamuelCollaborate = () => {
  return (
    <section
      id="section-collaborate">
      <div
        className="text-white mt-10 box-content px-4 py-8 btn-border rounded-xl">
        <div
          className="flex flex-col md:flex-row justify-center md:justify-start gap-10">
            <SectionTitleSamuel
              title="COLABOREMOS"
              icon={<Sparkles className="w-6 h-6" />}/>
          <p
            className="flex flex-row gap-2 items-center text-sm bg-purple px-2 py-1 rounded-xl purple-light-color">
            <Coffee
              className="w-4 h-4" />
            Disponible para colaborar
          </p>
        </div>
        <div
          className="grid md:grid-cols-2">
          <div
            className="md:col-span-1">
            <h1
              className="text-3xl text-center md:text-start font-bold mt-4">
              ¿Tienes un projecto en mente?
            </h1>
            <p
              className="text-center text-sm text-secondary px-8 mt-4 md:text-start md:px-0">
              Me encantaría escuchar sobre tu próximo proyecto. Ya sea una aplicación móvil, una plataforma web o una API robusta, estoy listo para ayudarte a hacerlo realidad.
            </p>
          </div>
          <div
            className="flex flex-col gap-5 justify-center md:cols-span-1">
            <div
              className="flex justify-center">
              <button
                className="
                  flex flex-row gap-3 items-center
                  justify-center bg-purple-light
                  font-bold w-50 h-15 rounded-xl mt-4
                  shadow-xl shadow-primary/20 animate-pulse-glow
                ">
                <MessageCircle
                />
                Hablemos
                <Send />
              </button>
            </div>
            <div
              className="flex justify-center items-center">
              <p
                className="text-sm text-secondary">
                También puedes encontrarme en:
              </p>
              <div
                className="md:col-span-2 flex flex-row gap-2 justify-center md:justify-end ml-5">
                <button
                  className="bg-purple rounded-full p-1.5">
                  <Mail
                    className="purple-light-color w-6 h-6"
                  />
                </button>
                <button
                  className="bg-purple rounded-full p-1.5">
                  <LinkedIn
                    className="purple-light-color w-6 h-6" />
                </button>
                <button
                  className="bg-purple rounded-full p-1.5">
                  <GitHub
                    className="purple-light-color w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
