import "./App.css";
import HomePage from "./LexJohn Pages/Home Page/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";
// import AboutUs from "./components/aboutPageComponent/aboutus/AboutUs";
// import ContactPage from "./components/contactPage/ContactPage";

function App() {
  return (
    <>
      <HashRouter hashType="hashbang">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
