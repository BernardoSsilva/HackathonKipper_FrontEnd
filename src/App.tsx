import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { Router } from './Router'

function App() {

  return (
    <>
      <main className='m-[2rem]'>
      <BrowserRouter> 
        <Router />
      </BrowserRouter>
      </main>
    </>
  )
}

export default App
