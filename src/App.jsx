import './App.css'
import HomePage from './LexJohn Pages/Home Page/HomePage'
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <HashRouter hashType="hashbang">
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </HashRouter>
      
      
    </>
  );
}

export default App;
