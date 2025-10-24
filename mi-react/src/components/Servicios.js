import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

function Servicios() {
  return (
    <div className='container' >
        <div >
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="boldText" href="#">Servicios</Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text> Estudio energético, Instalación certificada SEC, Monitoreo, Mantención.</Navbar.Text>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div className='row' >
            <div className=' col-lg-3' >
                <Card style={{ width: '100%'}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Estudio Energético</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className=' col-lg-3' >
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Instalación Certificada</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>  
            <div className=' col-lg-3'>
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Monitoreo</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>  
            <div className=' col-lg-3'>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Mantención</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>
        </div>
    </div>
  );
}

export default Servicios;