import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AdminLoginPage from './pages/AdminLoginPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/admin-login' element={<AdminLoginPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
