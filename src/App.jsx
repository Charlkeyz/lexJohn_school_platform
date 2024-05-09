import "./App.css";
import Footer from "./components/Footer/footer";
import Navbar from "./components/NavBar/Navbar";
import AboutUs from "./components/aboutPageComponent/aboutus/AboutUs";
import ContactPage from "./components/contactPage/ContactPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <AboutUs /> */}
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
