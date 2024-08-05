import { MapPin, Utensils } from "lucide-react";
import { House } from 'lucide-react';
import { Send } from 'lucide-react';
import { Clock } from 'lucide-react';
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface CardProps {
  location: string,
  address: string,
  time: ReactNode
}

export default function CardFood({ location, address, time }: CardProps) {

  return (
    <main className="p-5 rounded-lg drop-shadow-2xl h-full flex flex-col gap-10 bg-gray-100">
      <section className="flex justify-start items-end w-full rounded-2xl">
        {/* <img src="/public/img.jpeg" alt="Descrição da imagem" className="rounded-lg transform rotate-90 w-full h-auto object-cover" /> */}
        <article className="flex w-full gap-5">
          <div className="w-[12rem] bg-white w-full rounded-3xl h-[3rem] flex items-center justify-center gap-2 p-2">
            <Utensils className="text-[#B61515]" /> <p className="flex gap-2 text-primary text-xl text-[#B61515]">Alimentação</p>
          </div>
          <div className="w-[12rem] bg-white w-full rounded-3xl h-[3rem] flex items-center justify-center gap-2 p-2">
            <Clock className="text-primary" /> <p className="text-primary text-xl">
              {time}
            </p>
          </div>
        </article>
      </section>
      <h1 className="text-4xl font-bold">{location}</h1>
      <div className="flex justify-start items-center gap-3">
        <MapPin className="text-primary" size={30} />
        <p className="text-2xl">{address}</p>
      </div>
      <div className="flex justify-center gap-3 h-full">
        <NavLink to="/descriptionShelter" title="DescriptionShelter" className="w-full">
          <button className="text-primary bg-gray-200 w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 cursor-pointer">
            <House className="text-primary" size={32} />
            Perfil
          </button>
        </NavLink>
        <NavLink to="/" title="" className="w-full">
        <button className="bg-primary w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 text-white cursor-pointer">
          <Send className="text-white" size={32} />
          Ir para
        </button>
        </NavLink>
      </div>
    </main>
  )
}