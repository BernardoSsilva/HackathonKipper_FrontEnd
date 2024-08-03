import { Routes, Route } from 'react-router-dom'
import Home from './home'
import DescriptionShelter from './[id]/descriptionShelter'

export function Router() {
  return (
    <Routes>
      <Route path="/">{/*Nós estamos envolvendo todas as rotas neste Route. Apliquei a / porque eu quero aplicar esse layout em todas as rotas. Assim, suponhamos que temos uma rota /admin e aplicamos o DefaultLayout nela. Desse modo, nós estamos passado o layout para todas as rotas que começam com /admin. Além disso, se tivermos rotas por dentro desta, todas elas começaram por /admin. Exemplo: /admin/products, pois uma é filha da outra*/}
        <Route path="/" element={<Home />} /> {/*Nesse caso, como queremos que o usuário não digite nada, ou seja, caia direto na Home, colocamos/. O element é o componente dessa rota */}
        <Route path="/descriptionShelter" element={<DescriptionShelter />} />
      </Route>
    </Routes>
  )
}