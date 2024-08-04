import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/material/styles';
import { CircleCheck, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Categories } from "./models/Categories";
import { api } from "./services/api";
import axios from "axios";
import { Ufs } from "./models/Ufs";
import { getEnumValueByKey } from "./utils/getEnumByKey";

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
  },
});

export default function Register() {
  const [selectedCategory, setSelectedCategory] = useState<Categories>(Categories.Shelter);
  const [availableVacanciesNumber, setAvailableVacanciesNumber] = useState<number | undefined>();
  const [cepValue, setCepValue] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [complement, setComplement] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [localeNumber, setLocaleNumber] = useState<string>("");
  const [uf, setUf] = useState<Ufs | undefined>();

  useEffect(() => {
    if (cepValue.length === 8) {
      fetchCepInfo();
    }
  }, [cepValue]);

  async function fetchCepInfo() {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cepValue}/json`);
      setCity(data.localidade);
      setNeighborhood(data.bairro);
      setStreet(data.logradouro);

      const ufCode = getEnumValueByKey(Ufs, data.uf);
      setUf(ufCode);
    } catch (error) {
      console.error("Error fetching CEP info:", error);
    }
  }

  return (
    <main className="flex flex-col gap-16">
      <div className="flex items-center gap-6 rounded-lg drop-shadow-2xl p-5 justify-center bg-gray-100 mx-16">
        <Heart />
        <p className="text-xl">Que bom que você pode ajudar!</p>
      </div>
      <div className="flex justify-center">
        <p className="text-lg">Só precisamos que você preencha todas as informações abaixo.</p>
      </div>
      <section className="p-5 rounded-lg drop-shadow-2xl h-full flex flex-col gap-10 bg-gray-100">
        <div className="flex justify-center">
          <h1 className="text-primary text-xl">INFORMAÇÕES DO LOCAL</h1>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <StyledTextField id="outlined-basic" label="Nome do local" variant="outlined" />
          <InputLabel>Categoria</InputLabel>
          <Select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value as Categories)}
          >
            <MenuItem value={Categories.Shelter}>Abrigos</MenuItem>
            <MenuItem value={Categories.FoodPoints}>Pontos de alimentação</MenuItem>
            <MenuItem value={Categories.DonationPoints}>Pontos de doações</MenuItem>
            <MenuItem value={Categories.MedicAux}>Pontos de auxílio médico</MenuItem>
          </Select>
          <NumberInput
            className="base-NumberInput-root"
            value={availableVacanciesNumber}
            onChange={(event: any, value: number) => setAvailableVacanciesNumber(value)}
            placeholder="Número de vagas disponíveis"
          />
          <StyledTextField
            id="outlined-multiline-static"
            label="Descrição"
            multiline
            rows={4}
            placeholder="Fale um pouco sobre o abrigo, os serviços prestados e outras informações que podem ser consideradas úteis..."
          />
          <StyledTextField
            id="outlined-multiline-static"
            label="Descrição para ajuda"
            multiline
            rows={4}
            placeholder="Fale um pouco sobre as necessidades atuais do local que possam ser supridas por mão de obra voluntária"
          />
        </div>
      </section>
      <section className="p-5 rounded-lg drop-shadow-2xl h-full flex flex-col gap-10 bg-gray-100">
        <div className="flex justify-center">
          <h1 className="text-primary text-xl">INFORMAÇÕES DE CONTATO</h1>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <StyledTextField id="outlined-basic" label="E-mail" variant="outlined" />
          <StyledTextField id="outlined-basic" label="Telefone" variant="outlined" />
          <StyledTextField id="outlined-basic" label="Instagram" variant="outlined" />
        </div>
      </section>
      <section className="p-5 rounded-lg drop-shadow-2xl h-full flex flex-col gap-10 bg-gray-100">
        <div className="flex justify-center">
          <h1 className="text-primary text-xl">ENDEREÇO COMPLETO</h1>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <StyledTextField

            onChange={(event) => setCepValue(event.target.value)}
            id="outlined-basic"
            label="CEP"
            variant="outlined"
          />
          <Select
            value={uf ?? ""}
            onChange={(event) => setUf(event.target.value as Ufs)}
          >
            <MenuItem value={Ufs.AC}>Acre</MenuItem>
            <MenuItem value={Ufs.AL}>Alagoas</MenuItem>
            <MenuItem value={Ufs.AP}>Amapá</MenuItem>
            <MenuItem value={Ufs.AM}>Amazonas</MenuItem>
            <MenuItem value={Ufs.BA}>Bahia</MenuItem>
            <MenuItem value={Ufs.CE}>Ceará</MenuItem>
            <MenuItem value={Ufs.DF}>Distrito Federal</MenuItem>
            <MenuItem value={Ufs.ES}>Espírito Santo</MenuItem>
            <MenuItem value={Ufs.GO}>Goiás</MenuItem>
            <MenuItem value={Ufs.MA}>Maranhão</MenuItem>
            <MenuItem value={Ufs.MG}>Minas Gerais</MenuItem>
            <MenuItem value={Ufs.MS}>Mato Grosso do Sul</MenuItem>
            <MenuItem value={Ufs.MT}>Mato Grosso</MenuItem>
            <MenuItem value={Ufs.PA}>Pará</MenuItem>
            <MenuItem value={Ufs.PB}>Paraíba</MenuItem>
            <MenuItem value={Ufs.PE}>Pernambuco</MenuItem>
            <MenuItem value={Ufs.PI}>Piauí</MenuItem>
            <MenuItem value={Ufs.PR}>Paraná</MenuItem>
            <MenuItem value={Ufs.RJ}>Rio de Janeiro</MenuItem>
            <MenuItem value={Ufs.RN}>Rio Grande do Norte</MenuItem>
            <MenuItem value={Ufs.RS}>Rio Grande do Sul</MenuItem>
            <MenuItem value={Ufs.RO}>Rondônia</MenuItem>
            <MenuItem value={Ufs.RR}>Roraima</MenuItem>
            <MenuItem value={Ufs.SC}>Santa Catarina</MenuItem>
            <MenuItem value={Ufs.SE}>Sergipe</MenuItem>
            <MenuItem value={Ufs.SP}>São Paulo</MenuItem>
            <MenuItem value={Ufs.TO}>Tocantins</MenuItem>
          </Select>
          <StyledTextField
            value={city}
            onChange={(event) => setCity(event.target.value)}
            id="outlined-basic"
            label="Cidade"
            variant="outlined"
          />
          <StyledTextField
            value={neighborhood}
            onChange={(event) => setNeighborhood(event.target.value)}
            id="outlined-basic"
            label="Bairro"
            variant="outlined"
          />
          <StyledTextField
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            id="outlined-basic"
            label="Rua"
            variant="outlined"
          />
          <StyledTextField
            value={localeNumber}
            onChange={(event) => setLocaleNumber(event.target.value)}
            id="outlined-basic"
            label="Número"
            variant="outlined"
          />
          <StyledTextField
            value={complement}
            onChange={(event) => setComplement(event.target.value)}
            id="outlined-basic"
            label="Complemento (opcional)"
            variant="outlined"
          />
        </div>
      </section>
      <div className="flex justify-center gap-3 h-full">
        <button className="text-primary bg-gray-200 w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 cursor-pointer">
          Perfil
        </button>
        <button className="bg-primary w-full h-[4rem] flex justify-center items-center rounded-3xl text-3xl gap-5 text-white cursor-pointer">
          <CircleCheck className="text-white" size={32} />
          Ir para
        </button>
      </div>
    </main>
  );
}
