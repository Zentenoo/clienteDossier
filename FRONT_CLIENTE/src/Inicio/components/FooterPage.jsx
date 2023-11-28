import React from 'react';

export const FooterPage = () => {
  return (
    <footer className="bg-dark text-light py-4">
      {/* Información de contacto y enlaces a redes sociales */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <h5>Información de contacto</h5>
              <p>Dirección del restaurante</p>
              <p>Teléfono de contacto</p>
              <p>Correo electrónico</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="social-links">
              <h5>Redes Sociales</h5>
              {/* Enlaces a redes sociales */}
              <a href="#" className="text-light mr-3">Facebook</a>
              <a href="#" className="text-light mr-3">Instagram</a>
              {/* Puedes agregar más enlaces según necesites */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
