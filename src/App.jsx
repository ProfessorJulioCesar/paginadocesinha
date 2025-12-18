import { Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Home from './pages/home'
import Ano1 from './pages/1ano'
import Ano2 from './pages/2ano'
import Ano3 from './pages/3ano'

export default function App(){
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/1ano' element={<Ano1/>} />
      <Route path='/2ano' element={<Ano2/>} />
      <Route path='/3ano' element={<Ano3/>} />
    </Routes>
  );
}