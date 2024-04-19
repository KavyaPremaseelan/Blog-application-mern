import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/Signin'
import { Projects } from './pages/Projects'
import Header from './components/Header'
import FooterCom from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    <FooterCom/>
    </BrowserRouter>
  )
}

export default App
