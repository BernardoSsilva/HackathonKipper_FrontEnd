import { Routes, Route } from 'react-router-dom'
import DescriptionShelter from './[id]/descriptionShelter'
import DefaultLayout from './layout'
import Registerlocality from './registerLocality'
import LoginUser from './loginUser'
import RegisterUser from './registerUser'
import Home from './home'
import OptionFood from './optionFood'
import OptionsHelp from './components/optionsHelp'
import OptionHealth from './optionHealth'
import OptionDonation from './optionDonation'
import DescriptionFood from './[id]/descriptionFood'
import DescriptionHealth from './[id]/descriptionHealth'
import DescriptionDonation from './[id]/descriptionDonation'

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginUser />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<OptionsHelp />}>
          <Route path="optionFood" element={<OptionFood />} />
          <Route path="optionHealth" element={<OptionHealth />} />
          <Route path="optionDonation" element={<OptionDonation />} />
          <Route path="/home/descriptionShelter" element={<DescriptionShelter />} />
          <Route path="/home/descriptionFood" element={<DescriptionFood />} />
          <Route path="/home/descriptionHealth" element={<DescriptionHealth />} />
          <Route path="/home/descriptionDonation" element={<DescriptionDonation />} />
        </Route>
        <Route path="descriptionShelter" element={<DescriptionShelter />} />
        <Route path="registerLocality" element={<Registerlocality />} />
        <Route path="registerUser" element={<RegisterUser />} />
      </Route>
    </Routes>
  )
}