import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './components/Navbar';
import Servicios from './components/Servicios';
import Soluciones from './components/soluciones';
import Planes from './components/planes';
import Testimonios from './components/Testimonios';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavbarPrincipal/>
      <Banner/>
      <Planes/>
      <Servicios/>
      <Soluciones/>
      <Testimonios/>
     


    </div >

    
  );
}

export default App;
