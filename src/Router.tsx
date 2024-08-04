import { Routes, Route } from 'react-router-dom'
import DescriptionShelter from './[id]/descriptionShelter'
import DefaultLayout from './layout'
import Register from './register'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Register />} /> 
        <Route path="/descriptionShelter" element={<DescriptionShelter />} />
      </Route>
    </Routes>
  )
}