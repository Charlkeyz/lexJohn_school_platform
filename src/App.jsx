import './App.css'
import HomePage from './LexJohn Pages/Home Page/HomePage'
import { HashRouter, Routes, Route } from "react-router-dom";
import ServicePage from './LexJohn Pages/Service page/ServicePage';


function App() {
  

  return (
    <>
      <HashRouter hashType="hashbang">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/services' element={<ServicePage/>}/>
        </Routes>
      </HashRouter>
      
      
    </>
  )
}

export default App
