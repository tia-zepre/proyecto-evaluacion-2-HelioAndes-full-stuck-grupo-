import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

function Soluciones() {
  return (
    <div className='container' >
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
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Hogar 3–5 kW</Card.Title>
                        <Card.Text>
                       Kits solares diseñados para familias,
                        ideales para reducir significativamente
                         la boleta de luz y dar el primer paso
                          hacia un consumo de energía más limpio y eficiente.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className=' col-lg-4' >
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title> Pyme 10–20 kW</Card.Title>
                        <Card.Text>
                        Soluciones robustas para pequeños y 
                        medianos negocios que buscan optimizar
                         sus costos operativos a través de la autogeneración
                          de energía, mejorando su rentabilidad y sustentabilidad.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>  
            <div className=' col-lg-4'>
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Off-grid con baterías e híbridos</Card.Title>
                        <Card.Text>
                       Sistemas que ofrecen total independencia
                        de la red eléctrica. Perfectos para zonas
                         aisladas (Off-grid) o como respaldo inteligente
                          con baterías para asegurar suministro continuo
                           en cualquier situación.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>  
            
        </div>
    </div>
  );
}

export default Soluciones;