import React from 'react';
import CATALAN from '../../img/CATALAN.jpg'; // Importa la imagen de la especialidad 1
import MARVIN from '../../img/MARVIN.jpg'; // Importa la imagen de la especialidad 2
import MIGUEL from '../../img/MIGUEL.jpg'; // Importa la imagen de la especialidad 3

export const EspecialidadesPage = () => {
  return (
    <section className="specialties-section">
      <div className="container">
        <h2 className="text-center mb-4">Chefs destacados</h2>
        <div className="row">
          {/* Tarjeta de especialidad 1 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 d-flex flex-column">
              <img src={CATALAN} className="card-img-top" alt="Especialidad 1" />
              <div className="card-body">
                <h3 className="card-title">Fernando Catalam</h3>
                <p className="card-text"> Coordinador de Escuela de Gastronomía UDI </p>
              </div>
            </div>
          </div>

          {/* Tarjeta de especialidad 2 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 d-flex flex-column">
              <img src={MARVIN} className="card-img-top" alt="Especialidad 2" />
              <div className="card-body">
                <h3 className="card-title">Marvin Chambi</h3>
                <p className="card-text">Especialista en el área de servicio, barismo, coctelería, pastelería y arte makimono o Garde Manger</p>
              </div>
            </div>
          </div>

          {/* Tarjeta de especialidad 3 */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 d-flex flex-column">
              <img src={MIGUEL} className="card-img-top" alt="Especialidad 3" />
              <div className="card-body">
                <h3 className="card-title">Miguel Nuñez</h3>
                <p className="card-text"> Chef Especialista en carnes </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
