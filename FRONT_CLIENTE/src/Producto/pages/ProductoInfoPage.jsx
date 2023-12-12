import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProducto } from "../helpers/getProducto";

export const ProductoInfoPage = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productoData = await getProducto(id);
        setProducto(productoData);
      } catch (error) {
        console.error("Error fetching producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  return (
    <>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
          <h1>Datos del Producto "{producto.nombre}"</h1>
          <Link to="/productos" className="btn btn-primary">
            Volver
          </Link>
        </div>
        <hr></hr>
        <div className="container" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <div>
            <img src={producto.foto} style={{ width: "400px" }} alt={`Foto de ${producto.nombre}`} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p> <h4>Nombre: </h4>{producto.nombre}</p>
            <p> <h4>Descripción: </h4>{producto.descripcion}</p>
            <p> <h4>Precio: </h4>{producto.precio}</p>
            <p> <h4>Stock: </h4>{producto.stock}</p>
            <p> <h4>Estado: </h4>{producto.estado}</p>

            {/* Agregué una condición para mostrar la información de la foto solo si está presente */}
            {producto.foto && (
              <div>
                <h4>Foto:</h4>
                <img src={producto.foto} style={{ width: "200px" }} alt={`Foto de ${producto.nombre}`} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
