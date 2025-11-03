import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './components/Navbar';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Soluciones from './components/soluciones';
import Planes from './components/planes';
import Testimonios from './components/Testimonios';
import CalculadoraIntegral from './components/CalculadoraIntegral';

function App() {
  return (
    <div>
      <NavbarPrincipal/>
      <Hero/>
      <Servicios/>
      <Soluciones/>
      <CalculadoraIntegral/>
      <Planes/>
      <Testimonios/>


    </div >

    
  );
}

export default App;
