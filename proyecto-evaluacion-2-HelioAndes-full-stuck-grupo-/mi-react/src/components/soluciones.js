import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import kitsolar from '../Assest/Images/kitsolar.jpg';
import kitEmpresa from '../Assest/Images/kitEmpresa.jpg';
import kitHibrido from '../Assest/Images/kitHibrido.jpg';

function Soluciones() {
  return (
    <div className='container mt-4' >
        <div >
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="boldText" href="#">Soluciones</Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>kits residenciales, PyME, off-grid con baterías e híbridos</Navbar.Text>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div className='row' >
            <div className=' col-lg-4' >
                <Card style={{ width: '100%'}}>
                   <Card.Img variant="top" src={kitsolar} style={{width:'40%', height:'150px',objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title>Hogar 3–5 kW</Card.Title>
                        <Card.Text>
                       Balance ideal entre costo y ahorro mensual
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className=' col-lg-4' >
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src={kitEmpresa} style={{width:'100', height:'150px',objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title> Pyme 10–20 kW</Card.Title>
                        <Card.Text>
                        Para operación diurna con buena irradiación
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>  
            <div className=' col-lg-4'>
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src={kitHibrido} style={{width:'100', height:'150px',objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title>Off-grid con baterías e híbridos</Card.Title>
                        <Card.Text>
                       Autonomias en zonas sin red Eléctrica
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>  
            
        </div>
    </div>
  );
}

export default Soluciones;