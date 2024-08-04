import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { CircleCheck, Heart } from "lucide-react";
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
  },
});
export default function Register(){
  return(
    <main className="flex flex-col gap-16">
      <div className="flex items-center gap-6 rounded-lg drop-shadow-2xl p-5 justify-center bg-gray-100 mx-16"><Heart /> 
      <p className="text-xl">Que bom que você pode ajudar!</p></div>
      <div className="flex justify-center"><p className="text-lg">Só precisamos que você preencha todas as informações abaixo.</p></div>
      <section className="p-5 rounded-lg drop-shadow-2xl h-full flex flex-col gap-10 bg-gray-100">
      <div className="flex justify-center"><h1 className="text-primary text-xl">INFORMAÇÕES DO LOCAL</h1></div>
      <div className="flex flex-col gap-[1rem]">
      <StyledTextField id="outlined-basic" label="Nome do local" variant="outlined"/>
      <StyledTextField id="outlined-basic" label="Categoria do local" variant="outlined" />
      <StyledTextField id="outlined-basic" label="Número de vagas disponíveis" variant="outlined" />
      <StyledTextField
          id="outlined-multiline-static"
          label="Descrição"
          multiline
          rows={4}
          placeholder="Fale um pouco sobre o abrigo, os serviços prestados e outras informações que podem ser consideradas úteis..."
        />
      </div>
    </section>
    <section className="p-5 rounded-lg drop-shadow-2xl h-full flex flex-col gap-10 bg-gray-100">
      <div className="flex justify-center"><h1 className="text-primary text-xl">INFORMAÇÕES DE CONTATO</h1></div>
      <div className="flex flex-col gap-[1rem]">
      <StyledTextField id="outlined-basic" label="E-mail" variant="outlined"/>
      <StyledTextField id="outlined-basic" label="Telefone" variant="outlined" />
      <StyledTextField id="outlined-basic" label="Instagram" variant="outlined" />
      </div>
    </section>
    <section className="p-5 rounded-lg drop-shadow-2xl h-full flex flex-col gap-10 bg-gray-100">
      <div className="flex justify-center"><h1 className="text-primary text-xl">ENDEREÇO COMPLETO</h1></div>
      <div className="flex flex-col gap-[1rem]">
      <StyledTextField id="outlined-basic" label="CEP" variant="outlined"/>
      <StyledTextField id="outlined-basic" label="Estado" variant="outlined" />
      <StyledTextField id="outlined-basic" label="Cidade" variant="outlined" />
      <StyledTextField id="outlined-basic" label="Bairro" variant="outlined" />
      <StyledTextField id="outlined-basic" label="Rua" variant="outlined" />
      <StyledTextField id="outlined-basic" label="Número" variant="outlined" />
      <StyledTextField id="outlined-basic" label="Complemento (opcional)" variant="outlined" />
      </div>
    </section>
    <div className="flex justify-center gap-3 h-full">
        {/* <NavLink to="/descriptionShelter" title="DescriptionShelter" className="w-full"> */}
          <button className="text-primary bg-gray-200 w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 cursor-pointer">
            Perfil
          </button>
        {/* </NavLink> */}
        {/* <NavLink to="/" title="" className="w-full"> */}
        <button className="bg-primary w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 text-white cursor-pointer">
          <CircleCheck className="text-white" size={32} />
          Ir para
        </button>
        {/* </NavLink> */}
      </div>
    </main>
  )
}