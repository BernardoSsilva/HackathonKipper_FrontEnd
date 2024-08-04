import { AlignJustify, HandHeart, LifeBuoy, MapPinHouse, X } from "lucide-react";
import { useState } from "react";
//import { NavLink } from "react-router-dom";

export default function Header() {
  const [isClickedOptions, setIsClickedOptions] = useState(false)

  return (
    <main>
      <section className="flex justify-between py-10 border-b-4 drop-shadow-lg">
        <h1 className="text-4xl font-bold text-primary">abigo.</h1>
        <button onClick={() => setIsClickedOptions(true)}
          onBlur={() => setIsClickedOptions(false)}>
          {!isClickedOptions ? <AlignJustify size={45} /> : <X size={45} />}</button>
      </section>
      {isClickedOptions &&
        <div className="flex flex-col justify-center gap-6 h-full">
          {/* <NavLink to="/" title="" className="w-full"> */}
            <button className="text-white text-2xl bg-primary rounded-3xl p-6 flex items-center justify-start gap-5">
              <LifeBuoy size={50} /> Preciso de ajuda
            </button>
          {/* </NavLink> */}
          {/* <NavLink to="/registerLocality" title="" className="w-full"> */}
            <button className="text-white text-2xl bg-primary rounded-3xl p-6 flex items-center justify-start gap-5">
              <MapPinHouse size={50} /> Cadastrar ponto de ajuda
            </button>
          {/* </NavLink> */}
          <button className="text-white text-2xl bg-primary rounded-3xl p-6 flex items-center justify-start gap-5">
            <HandHeart size={50} /> Quero ajudar
          </button>
        </div>
      }
    </main>
  )
}