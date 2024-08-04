import { HandHeart, HeartPulse, House, Utensils } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isHouseFocused, setIsHouseFocused] = useState(false)
  const [isUtensils, setIsUtensils] = useState(false)
  const [isHeartPulse, setIsHeartPulse] = useState(false)
  const [isHandHeart, setHandHeart] = useState(false)
  return (
    <main className="flex justify-around py-10">
      <div className="flex flex-col items-center gap-3">
       <button onClick={() => {setIsHouseFocused(true), setIsUtensils(false), setIsHeartPulse(false), setHandHeart(false)}}>
        <House size={60} className={isHouseFocused ? 'text-primary' : 'text-gray-100'}/>
        </button> 
        <p className="text-lg">Abrigos</p>
      </div>
      <div className="flex flex-col items-center gap-3">
      <button onClick={() => {setIsHouseFocused(false), setIsUtensils(true), setIsHeartPulse(false), setHandHeart(false)}}>
        <Utensils size={60} className={isUtensils ? 'text-primary' : 'text-gray-100'}/>
        </button> 
        <p className="text-lg">Alimentação</p>
      </div>
      <div className="flex flex-col items-center gap-3">
      <button onClick={() => {setIsHouseFocused(false), setIsUtensils(false), setIsHeartPulse(true), setHandHeart(false)}}>
        <HeartPulse size={60} className={isHeartPulse ? 'text-primary' : 'text-gray-100'}/>
        </button> 
        <p className="text-lg">Saúde</p>
      </div>
      <div className="flex flex-col items-center gap-3">
      <button onClick={() => {setIsHouseFocused(false), setIsUtensils(false), setIsHeartPulse(false), setHandHeart(true)}}>
        <HandHeart size={60} className={isHandHeart ? 'text-primary' : 'text-gray-100'}/>
        </button> 
        <p className="text-lg">Doações</p>
      </div>

    </main>
  )
}