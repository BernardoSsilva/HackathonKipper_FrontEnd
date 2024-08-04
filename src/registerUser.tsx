import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { CircleCheck} from "lucide-react";
import { NavLink } from "react-router-dom";
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
  },
});
export default function RegisterUser(){
  return(
    <main className="flex flex-col justify-center h-full my-[10rem]">
<main className="flex flex-col gap-16">
      <section className="p-5 rounded-lg drop-shadow-2xl h-full flex flex-col gap-10 bg-gray-100">
      <div className="flex justify-center"><h1 className="text-primary text-xl">CADASTRE SUA CONTA</h1></div>
      <div className="flex flex-col gap-[1rem]">
      <StyledTextField id="outlined-basic" label="Nome" variant="outlined"/>
      <StyledTextField id="outlined-basic" label="E-mail" variant="outlined" />
      <StyledTextField id="outlined-basic" label="Telefone" variant="outlined" />
      <StyledTextField id="outlined-basic" label="Instagram (opcional)" variant="outlined" />
      <StyledTextField id="outlined-basic" label="Senha" variant="outlined" type="password"/>
      </div>
    </section>
    <div className="flex justify-center gap-3 h-full">
         <NavLink to="/" title="DescriptionShelter" className="w-full"> 
          <button className="text-primary bg-gray-200 w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 cursor-pointer">
            Cancelar
          </button>
        </NavLink> 
        {/* <NavLink to="/" title="" className="w-full"> */}
        <button className="bg-primary w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 text-white cursor-pointer">
          <CircleCheck className="text-white" size={32} />
          Salvar
        </button>
        {/* </NavLink> */}
      </div>
    </main>
    </main>
  )
}