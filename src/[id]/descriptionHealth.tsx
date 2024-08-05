import { MapPin } from "lucide-react";
import { Bed } from 'lucide-react';
import { Clock } from 'lucide-react';
import { House } from 'lucide-react';
import { Send } from 'lucide-react';
import { NavLink } from "react-router-dom";

export default function DescriptionHealth() {
  return (
    <>
    <main className="p-5 rounded-lg h-full flex flex-col gap-10">
        <main className="p-5 rounded-lg drop-shadow-2xl h-full flex flex-col gap-10 bg-gray-100">
          <section className="flex justify-start items-end w-full rounded-2xl">
            {/* <img src="/public/img.jpeg" alt="Descrição da imagem" className="rounded-lg transform rotate-90 w-full h-auto object-cover" /> */}
            <article className="flex w-full gap-5">
              <div className="w-[12rem] bg-white w-full rounded-3xl h-[3rem] flex items-center justify-center gap-2 p-2">
                <Bed className="text-primary" /> <p className="flex gap-2 text-primary text-xl"><p className="font-bold">64</p> vagas</p>
              </div>
              <div className="w-[12rem] bg-white w-full rounded-3xl h-[3rem] flex items-center justify-center gap-2 p-2">
                <Clock className="text-primary" /> <p className="text-primary text-xl">
                  07:00 - 23:59
                </p>
              </div>
            </article>
          </section>
          <h1 className="text-4xl font-bold">Abrigo amigo - Centro Criciúma</h1>
          <div className="flex justify-start items-center gap-3">
            <MapPin className="text-primary" size={30} />
            <p className="text-2xl">R. Visc. de Cairú, 450-532 - Santa Barbara - Criciúma</p>
          </div>
        </main>
        <div className="flex justify-center gap-3 h-full">
          <NavLink to="/" title="DescriptionShelter" className="w-full">
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

        <section className="flex flex-col gap-10">

          <article className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">Descrição do local:</h1>
            <p>O Abrigo lar oferece um espaço seguro e acolhedor para pessoas desabrigadas devido a desastres naturais ou
              outras emergências. Localizado em <strong className="font-bold">R. Visc. de Cairú, 450-532 - Santa Barbara - Criciúma</strong>, o abrigo está equipado
              com camas, alimentação, banheiros, proporcionando conforto e suporte essencial para quem perdeu suas casas.
              Além do abrigo físico, oferecemos apoio psicológico, serviços médicos básicos, ajuda com documentação e mais.
            </p>
          </article>

          <article className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">Endereço detalhado</h1>
            <ul className="list-disc list-inside">
              <li>Fisicamente: Visite nosso local para entregar doações diretamente;</li>
              <li>Conta Bancária: <strong className="font-bold">0000 0900 0000 - 322</strong>;</li>
              <li>PIX: <strong className="font-bold">abrigolar@email.com (Itaú)</strong>.</li>
            </ul>
          </article>

          <article className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">Como você pode nos ajudar?</h1>
            <ul className="list-disc list-inside">
              <li>Fisicamente: Visite nosso local para entregar doações diretamente;</li>
              <li>Conta Bancária: <strong className="font-bold">0000 0900 0000 - 322</strong>;</li>
              <li>PIX: <strong className="font-bold">abrigolar@email.com (Itaú)</strong>.</li>
            </ul>
          </article>

          <article className="flex flex-col gap-5">
            <p>Se você deseja se voluntariar e ajudar de forma ativa, entre em contato conosco através do telefone (Whatsapp)
              <strong className="font-bold"> +55 48 9 9999-9999</strong>, ou por nosso e-mail <strong className="font-bold">abrigolar@email.com</strong> e rede social (Instagram) <strong className="font-bold">@abrigolar</strong>.</p>
            <p>Sua contribuição e apoio são essenciais para proporcionar segurança e conforto aos que mais precisam.
              Agradecemos seu apoio!</p>
          </article>

        </section>
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
    </>        )
}