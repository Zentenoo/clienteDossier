import { useEffect, useState } from "react"
import { getAllProducto } from "../helpers/getAllProducto";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

export const ProductoList = () => {
    const [producto, setProducto] = useState([]);

    const navigate = useNavigate()
    const getListProducto = async () => {
        const data = await getAllProducto();
        if (data == "error") {
            navigate(`../../`);
        } else {
            setProducto(data);
        }
    };
    useEffect(() => {
        getListProducto();
    }, [])
    console.log(producto)
    return (
        <div className="container">
            <div className="row">
                {producto.map(producto => (
                    <div className="col-lg-4 mb-4" key={producto.id}>
                        <div className="card">
                            <img src={producto.foto} className="card-img-top" style={{ width: "100%", height: "200px", objectFit: "cover" }} alt={producto.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p className="card-text">Precio: {producto.precio}</p>
                                <p className="card-text">Stock: {producto.stock}</p>
                                <p className="card-text">
                                    Estado: {producto.estado ? <i className="bi bi-check-circle"></i> : <i className="bi bi-x-circle"></i>}
                                </p>
                                <div className="d-flex justify-content-between">
                                <Link to={`/producto/${producto.id}`} className="btn btn-success small">
                                  <FaInfoCircle /> Info
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


