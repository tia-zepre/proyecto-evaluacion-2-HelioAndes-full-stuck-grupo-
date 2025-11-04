import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './components/Navbar';
import Servicios from './components/Servicios';
import Soluciones from './components/soluciones';
import Planes from './components/planes';
import Testimonios from './components/Testimonios';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculadoraIntegral from './components/CalculadoraIntegral';
import FAQ from './components/FAQ';
import Contacto from './components/Contanto';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavbarPrincipal/>
      <Banner/>
      <Servicios/>
      <Soluciones/>
      <CalculadoraIntegral/>
      <Planes/>
      <Testimonios/>
      <FAQ/>
      <Contacto/>   
      <Footer/>   
      
     


    </div >

    
  );
}

export default App;
