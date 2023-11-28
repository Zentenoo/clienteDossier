import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Portada_web_1 from '../../img/Portada_web_1.jpg';
import Portada_web_2 from '../../img/Portada_web_2.jpg';

export const MainSectionPage = () => {
  return (
    <Carousel className="main-section w-100" interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Portada_web_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="container text-center">
            <h1 className="main-title display-3 font-weight-bold">Bienvenido a Udi Dossier</h1>
            <p className="main-text lead font-weight-bold">Descubre la variedad de servicios que tenemos para ti</p>
            <button className="btn btn-primary btn-lg">Ver Servicios</button>
          </div>
        </Carousel.Caption>
       
      </Carousel.Item>

      <Carousel.Item>
  <img
    className="d-block w-100"
    src={Portada_web_2}
    alt="Second slide"
  />
  <Carousel.Caption className="text-center">
    <div className="container" >
      <p className="main-text lead font-weight-bold text-light">
        El Restaurante Escuela UDI by DOSSIER, es un proyecto pionero en Bolivia. Nace como respuesta a la constante búsqueda por la excelencia en el proceso de formación de los estudiantes de la Licenciatura en Gastronomía poniendo en práctica el "aprender haciendo"; se convierte en el espacio ideal para desarrollar habilidades y competencias en un sector cada vez más especializado, sirviendo al alumno en la formación de cada área de conocimiento, tanto en las artes culinarias como del negocio gastronómico. Acompaña un equipo de docentes que persiguen siempre la excelencia académica y profesional, a este proyecto se une el Grupo Dossier capitaneado por el Chef Franklin Gushi, poniendo a disposición del alumno UDI toda la experiencia de un referente en alta cocina boliviana. Junto a todos los equipos y herramientas de última generación, trabajamos las técnicas y habilidades que requiera el profesional gastronómico del futuro. Esperamos nos acompañe y sea partícipe del futuro de la gastronomía boliviana, BIENVENIDOS.
      </p>
    </div>
  </Carousel.Caption>
</Carousel.Item>

    </Carousel>
  );
};
