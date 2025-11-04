
import React from 'react';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';





function Footer() {

 return (

  

    <div className="container">



   <footer className="col-12 d-flex justify-content-between p-3 mb-4 text-center py-4">

    <p className="fw-bold mb-0">&copy; 2025 HelioAndes Energía</p>



    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">

     <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>

    </a>



    <ul className="nav col-md-4 justify-content-end">

     <a href="#privacidad" className="nav-link px-2 text-muted">Privacidad</a>

     <a href="#terminos" className="nav-link px-2 text-muted">Términos</a>

    </ul>

    

   </footer>

  </div>

  

 );

}



export default Footer;

