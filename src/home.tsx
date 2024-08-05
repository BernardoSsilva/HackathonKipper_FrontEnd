import { LifeBuoy, MapPinHouse } from "lucide-react";

export default function Home() {

  return (
    <div className="flex flex-col gap-8 mt-10 p-6 justify-center">
      <div className="flex flex-col gap-2">
        <h2 className="font-inter text-gray-900 font-normal text-md text-left">
          Está precisando de ajuda ou quer fazer a diferença?
        </h2>

        <button className="font-inter text-white text-md bg-primary rounded-2xl p-6 flex items-center justify-start gap-6 w-full hover:bg-opacity-75 hover:transition-all hover:duration-75">
          <LifeBuoy size={32} />
          <p className="bold text-white text-opacity-80 font-bold text-left">
            Preciso de ajuda ou quero ajudar
          </p>
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-inter text-gray-900 text-md text-left font-normal">
          Cadastre um abrigo, ponto de doação, ajuda médica e mais...
        </h2>

        <button className="font-inter text-white text-md bg-primary rounded-2xl p-6 flex items-center justify-start gap-6 w-full hover:bg-opacity-75 hover:transition-all hover:duration-75">
          <MapPinHouse size={32} />
          <p className="bold text-white text-opacity-80 font-bold text-left">
            Cadastrar ponto de ajuda
          </p>
        </button>
      </div>
    </div>

  )
}