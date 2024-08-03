import { MapPin } from "lucide-react";
import { House } from 'lucide-react';
import { Send } from 'lucide-react';
import { Bed } from 'lucide-react';
import { Clock } from 'lucide-react';

export default function Card() {
  return (
    <main className="p-5 rounded-lg border border-black h-full flex flex-col gap-5">
      <section className="flex justify-end items-end bg-primary w-full h-40 rounded-2xl">
        {/* <img src="/public/img.jpeg" alt="Descrição da imagem" className="rounded-lg transform rotate-90 w-full h-auto object-cover" /> */}
       <article className="flex w-1/2 gap-1 pb-3 pr-3">
       <div className="bg-white w-full rounded-3xl h-[3rem] flex items-center justify-center gap-2 p-2">
       <Bed className="text-primary"/> <p className="flex gap-2 text-primary text-xl"><p className="font-bold">324</p> vagas</p>
        </div>
        <div className="bg-white w-full rounded-3xl h-[3rem] flex items-center justify-center gap-2 p-2">
        <Clock className="text-primary"/> <p className="text-primary text-xl">
            07:00 - 23:59
          </p>
        </div>
       </article>
      </section>
      <h1 className="text-3xl font-bold">Abrigo - Centro Criciúma</h1>
      <div className="flex justify-start items-center gap-3">
        <MapPin className="text-primary" size={30} />
        <p className="text-2xl">R. Visc. de Cairú, 450-532 - Santa Barbara - Criciúma</p>
      </div>
      <div className="flex justify-center gap-3 h-full">
        <button className="bg-gray-100 w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 cursor-pointer">
          <House className="text-primary" size={32} />
          Perfil
        </button>
        <button className="bg-primary w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 text-white cursor-pointer">
          <Send className="text-white" size={32} />
          Ir para
        </button>
      </div>
    </main>
  )
}