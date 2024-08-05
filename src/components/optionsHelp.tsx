import { HandHeart, HeartPulse, House, Utensils } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function OptionsHelp() {
  const [isHouseFocused, setIsHouseFocused] = useState(false)
  const [isUtensils, setIsUtensils] = useState(false)
  const [isHeartPulse, setIsHeartPulse] = useState(false)
  const [isHandHeart, setHandHeart] = useState(false)
  return (
 <>
    <main className="flex justify-around py-10">
      <NavLink to="/home" title="">
        <div className="flex flex-col items-center gap-3">
          <button onClick={() => { setIsHouseFocused(false), setIsUtensils(false), setIsHeartPulse(false), setHandHeart(false) }}>
            <House size={32} className={!isHouseFocused ? 'text-primary' : 'text-gray-100'} />
          </button>
          <p className="text-md">Abrigos</p>
        </div>
      </NavLink>
      <NavLink to="/home/optionFood" title="">
        <div className="flex flex-col items-center gap-3">
          <button onClick={() => { setIsHouseFocused(true), setIsUtensils(true), setIsHeartPulse(false), setHandHeart(false) }}>
            <Utensils size={32} className={isUtensils ? 'text-primary' : 'text-gray-100'} />
          </button>
          <p className="text-md">Alimentação</p>
        </div>
      </NavLink>
      <NavLink to="/home/optionHealth" title="">
      <div className="flex flex-col items-center gap-3">
        <button onClick={() => { setIsHouseFocused(true), setIsUtensils(false), setIsHeartPulse(true), setHandHeart(false) }}>
          <HeartPulse size={32} className={isHeartPulse ? 'text-primary' : 'text-gray-100'} />
        </button>
        <p className="text-md">Saúde</p>
      </div>
      </NavLink>
      <NavLink to="/home/optionDonation" title="">
      <div className="flex flex-col items-center gap-3">
        <button onClick={() => { setIsHouseFocused(true), setIsUtensils(false), setIsHeartPulse(false), setHandHeart(true) }}>
          <HandHeart size={32} className={isHandHeart ? 'text-primary' : 'text-gray-100'} />
        </button>
        <p className="text-md">Doações</p>
      </div>
      </NavLink>
    </main>
    <Outlet/>
 </>
  )
}