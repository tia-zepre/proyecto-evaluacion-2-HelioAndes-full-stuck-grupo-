import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Planes() {
  return (
    <div className='container' >
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
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>3–5 kW</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="success"  style={{ width:  '100%'}}>Solicitar Evaluación</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className=' col-lg-4' >
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>10–15 kW</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="success"  style={{ width:  '100%'}}>Solicitar Evaluación</Button>
                    </Card.Body>
                </Card>
            </div>  
            <div className=' col-lg-4'>
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Híbrido + Baterías</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="success"  style={{ width:  '100%'}}>Solicitar Evaluación</Button>
                    </Card.Body>
                </Card>
            </div>  
            
        </div>
    </div>
  );
}

export default Planes;