import { Routes, Route } from 'react-router-dom'
import DescriptionShelter from './[id]/descriptionShelter'
import DefaultLayout from './layout'
import Registerlocality from './registerLocality'
import LoginUser from './loginUser'
import RegisterUser from './registerUser'
import Home from './home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<LoginUser />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/descriptionShelter" element={<DescriptionShelter />} />
        <Route path="/registerLocality" element={<Registerlocality />} />
        <Route path="/registerUser" element={<RegisterUser />} />
      </Route>
    </Routes>
  )
}