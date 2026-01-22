import { TitleHeader } from "../components/TitleHeader"

export const AkselPage = () => {
  return (
    <div className="relative basis-auto p-10">
      <TitleHeader />

      <div className="mt-15 flex items-center gap-3">
        <h1 className="text-white text-3xl font-bold">
          Stack Tecnológico
        </h1>
        <div className="bg-white flex-1 h-0.5 bg-separator"></div>
      </div>
    </div>
  )
}
