import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { CircleCheck, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
  },
});
export default function LoginUser(){
  return(
    <main className="flex flex-col gap-16 my-[10rem]">
      <div className="flex items-center gap-6 rounded-lg drop-shadow-2xl p-5 justify-center bg-gray-100 mx-16"><Heart /> 
      <p className="text-xl">Que bom te ver aqui!</p></div>
      <section className="p-5 rounded-lg drop-shadow-2xl h-full flex flex-col gap-10 bg-gray-100">
      <div className="flex justify-center"><h1 className="text-primary text-xl">ACESSE SUA CONTA</h1></div>
      <div className="flex flex-col gap-[1rem]">
      <StyledTextField id="outlined-basic" label="E-mail" variant="outlined"/>
      <StyledTextField id="outlined-basic" label="Senha" variant="outlined" type="password"/>
      </div>
    </section>
    <div className="flex justify-center gap-3 h-full">
        {/* <NavLink to="/descriptionShelter" title="DescriptionShelter" className="w-full"> */}
          <button className="text-primary bg-gray-200 w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 cursor-pointer">
            Cancelar
          </button>
        {/* </NavLink> */}
        {/* <NavLink to="/" title="" className="w-full"> */}
        <button className="bg-primary w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 text-white cursor-pointer">
          <CircleCheck className="text-white" size={32} />
          Salvar
        </button>
        {/* </NavLink> */}
      </div>
       <NavLink to="/registerUser" title="DescriptionShelter" className="w-full">
      <div className="flex justify-center gap-3"><p className="text-2xl text-primary underline">Não tenho uma conta</p></div>
      </NavLink>
    </main>
  )
}