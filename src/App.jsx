import './App.css'
import Footer from './components/Footer/footer'
import Navbar from './components/NavBar/Navbar'

function App() {
  return (
    <>
      <HashRouter hashType="hashbang">
        <Navbar/>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/services' element={<ServicePage/>}/>
            <Route path='/Career' element= {<CareerPage/>}/>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </>
  );
}

export default App;
