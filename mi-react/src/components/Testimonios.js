import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

function Testimonios() {
  return (
    <div className='container' >
        <div >
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="boldText" href="#">Testimonios</Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>Clientes ya confian en HelioAndes</Navbar.Text>
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
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
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
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
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

export default Testimonios;