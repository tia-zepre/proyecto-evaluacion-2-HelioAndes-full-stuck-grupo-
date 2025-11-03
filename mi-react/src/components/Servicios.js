import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import logoEstudio from '../Assest/Images/logo2.jpg';
import logoInstalacion from '../Assest/Images/logo3.jpg';
import monitoreopaneles from '../Assest/Images/monitoreopaneles.jpg';
import mantenimiento from '../Assest/Images/mantenimiento.jpg';



function Servicios() {
  return (
    <div className='container mt-4' >
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
                    <Card.Img variant="top" src={logoEstudio} style={{width:'100', height:'150px',objectFit:'cover'}} />
                    <Card.Body>
                        <Card.Title>Estudio Energético</Card.Title>
                        <Card.Text>
                        Análisis detallado del consumo de energía para
                         dimensionar el sistema fotovoltaico óptimo para
                          tu hogar o pyme, maximizando el ahorro y la eficiencia.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className=' col-lg-3' >
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src={logoInstalacion} style={{width:'100%', height:'150px' , objectFit:'cover'}} />
                    <Card.Body>
                        <Card.Title>Instalación Certificada</Card.Title>
                        <Card.Text>
                       Montaje e implementación del sistema solar fotovoltaico cumpliendo
                        con todas las normativas y estándares de seguridad de la Superintendencia
                         de Electricidad y Combustibles.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>  
            <div className=' col-lg-3'>
                <Card style={{ width:  '100%'}}>
                    <Card.Img variant="top" src={monitoreopaneles} style={{width:'100', height:'150px',objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title>Monitoreo</Card.Title>
                        <Card.Text>
                       Seguimiento continuo del rendimiento de tu planta solar a través de plataformas
                        digitales, permitiendo detectar fallas rápidamente y asegurar la máxima producción de energía.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>  
            <div className=' col-lg-3'>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={mantenimiento} style={{width:'100', height:'150px',objectFit:'cover'}} />
                    <Card.Body>
                        <Card.Title>Mantención</Card.Title>
                        <Card.Text>
                       Servicios preventivos y correctivos para preservar
                        la vida útil de los equipos, asegurando el óptimo funcionamiento 
                        y eficiencia del sistema a lo largo del tiempo.
                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>
        </div>
    </div>
  );
}

export default Servicios;