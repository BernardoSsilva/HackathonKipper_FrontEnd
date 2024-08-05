import { AlignJustify, HandHeart, LifeBuoy, MapPinHouse, X } from "lucide-react";
import { useState } from "react";
//import { NavLink } from "react-router-dom";

export default function Header() {
  const [isClickedOptions, setIsClickedOptions] = useState(false)

  return (
    <main>
      <section className="flex items-center justify-between p-4 border-b-4 drop-shadow-lg">
        <h1 className="text-2xl font-black text-primary font-raleway shadow-none">abigo.</h1>
        <button onClick={() => setIsClickedOptions(true)}
          onBlur={() => setIsClickedOptions(false)}>
          {!isClickedOptions ? <AlignJustify size={32} /> : <X size={32} />}</button>
      </section>
     
      {isClickedOptions &&
        <div className="flex flex-col justify-center gap-6 h-full">
          {/* <NavLink to="/" title="" className="w-full"> */}
            <button className="font-inter text-white text-2xl bg-primary rounded-3xl p-6 flex items-center justify-start gap-5">
              <LifeBuoy size={32} /> 
              <p className="bold text-white text-opacity-80 font-bold text-left">
              Preciso de ajuda ou quero ajudar
              </p>
            </button>
          {/* </NavLink> */}
          {/* <NavLink to="/registerLocality" title="" className="w-full"> */}
            <button className="font-inter text-white text-2xl bg-primary rounded-3xl p-6 flex items-center justify-start gap-5">
              <MapPinHouse size={32} />  <p className="bold text-white text-opacity-80 font-bold text-left">
              Cadastrar ponto de ajuda
            </p>
            </button>       
        </div>
      }

    </main>
  )
}