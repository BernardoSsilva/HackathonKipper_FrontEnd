import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Router } from './Router'
import { authContext } from './contexts/authContextProvider'

function App() {

  return (
    <authContext.Provider>
      <main>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </main>
    </authContext.Provider>
  )
}

export default App
