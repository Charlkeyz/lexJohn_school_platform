import './App.css'
import HomePage from './LexJohn Pages/Home Page/HomePage'
import { HashRouter, Routes, Route } from "react-router-dom";
import ServicePage from './LexJohn Pages/Service page/ServicePage';
import CareerPage from './LexJohn Pages/Career Page/CareerPage';


function App() {
  

  return (
    <>
      <HashRouter hashType="hashbang">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/services' element={<ServicePage/>}/>
          <Route path='/Career' element= {<CareerPage/>}/>
        </Routes>
      </HashRouter>
      
      
    </>
  )
}

export default App
