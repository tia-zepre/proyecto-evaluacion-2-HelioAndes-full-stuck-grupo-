import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import kitsolar from '../Assest/Images/kitsolar.jpg';
import kitEmpresa from '../Assest/Images/kitEmpresa.jpg';
import kitHibrido from '../Assest/Images/kitHibrido.jpg';

function Planes() {
  return (
    <div className='container mt-2' >
        <div >
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="boldText" href="#">Planes</Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>Elige el plan que se ajusta a tu proyecto</Navbar.Text>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div className='row' >
            <div className=' col-lg-4' >
                <Card style={{ width: '100%'}}>
                    <Card.Img variant="top" src={kitsolar} style={{width:'40%', height:'150px',objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title>3–5 kW</Card.Title>
                        <Card.Text>
                        Sistemas fotovoltaicos de energía solar diseñadas
                         para el consumo eléctrico de una vivienda 
                         estándar, permitiendo un ahorro significativo
                          en la factura eléctrica.
                        </Card.Text>
                        <Button variant="success" href='https://www.cambioenergetico.com' style={{ width:  '100%'}}>Solicitar Evaluación</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className=' col-lg-4' >
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src={kitEmpresa} style={{width:'60%', height:'150px',objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title>Pyme 10–20 kW</Card.Title>
                        <Card.Text>
                        Sistemas fotovoltaicos con mayor capacidad,
                         ideales para pequeñas y medianas empresas que
                          buscan reducir costos operativos y mejorar
                           su sostenibilidad.
                        </Card.Text>
                       <Button variant="success" href='https://www.cambioenergetico.com' style={{ width:  '100%'}}>Solicitar Evaluación</Button>
                    </Card.Body>
                </Card>
            </div>  
            <div className=' col-lg-4'>
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src={kitHibrido} style={{width:'50%', height:'150px',objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title>Híbrido + Baterías</Card.Title>
                        <Card.Text>
                        Sistemas conectados a la red que utilizan
                         baterías para almacenar excedentes y proveer 
                         energía durante cortes de luz o cuando la producción
                          solar es baja, maximizando el autoconsumo y el respaldo.
                        </Card.Text>
                        <Button variant="success" href='https://www.cambioenergetico.com' style={{ width:  '100%'}}>Solicitar Evaluación</Button>
                    </Card.Body>
                </Card>
            </div>  
            
        </div>
    </div>
  );
}

export default Planes;