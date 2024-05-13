import "./App.css";
import HomePage from "./LexJohn Pages/Home Page/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutPageComponent/aboutus/AboutUs";
import ContactPage from "./components/contactPage/ContactPage";
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
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
