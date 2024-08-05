import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Search } from "lucide-react";
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
  },
});
export default function FilteringOptions() {
  return (
    <main className="p-5 flex flex-col gap-16 rounded-lg drop-shadow-2xl bg-gray-100">
      <section className="h-full flex flex-col gap-10">
        <div className="flex justify-center"><h1 className="text-primary text-xl">ACESSE SUA CONTA</h1></div>
        <div className="flex flex-col gap-[1rem]">
          <StyledTextField id="outlined-basic" label="Nome do local" variant="outlined" />
          <StyledTextField id="outlined-basic" label="Cidade" variant="outlined" type="password" />
          <StyledTextField id="outlined-basic" label="Bairro" variant="outlined" type="password" />
        </div>
      </section>
      <div className="flex justify-center gap-3 h-full">
        <button className="text-white bg-primary w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 cursor-pointer">
        <Search size={30}/> Pesquisar
        </button>
      </div>
    </main>
  )
}