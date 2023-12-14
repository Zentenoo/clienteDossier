import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { deletePlato } from "../helpers/deletePlato";
// import { EditPlato } from "../pages/EditPlato";
import { getAllReserva } from "../helpers/getAllReserva";

export const ReservaList = () => {
    const [reserva, setReserva] = useState([]);
    const navigate = useNavigate();

    const getListPlato = async () => {
        const data = await getAllReserva();
        if (data === "error") {
            navigate(`../../`);
        } else {
            setReserva(data);
        }
    };

    useEffect(() => {
        getListPlato();
    }, []);


    return (
        <div className="container">
            <div className="row">
                {reserva.map((reserva) => (
                    <div className="col-lg-4 mb-4" key={reserva.id}>
                        <div className="card">
                            <div className="card-header bg-danger text-white" style={{ textAlign: 'center', fontSize: '15px' }}>
                                <strong>{reserva.fechareserva}</strong>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{reserva.cupo}</h5>
                                <p className="card-title">{reserva.observacion}</p>                                
                                <p className="card-text">{reserva.descripcion}</p>
                                <p className="card-text" style={{ color: 'green' }}>Total: {reserva.total}$</p>
                                <p className="card-text">
                                    Estado: {reserva.estado ? <i className="bi bi-check-circle"></i> : <i className="bi bi-x-circle"></i>}
                                </p>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModalLabel${reserva.id}e`}>
                                            <i className="bi bi-pencil-square"></i> Editar
                                        </button>
                                        <div className="modal fade" id={`exampleModalLabel${reserva.id}e`} tabIndex="-1" aria-labelledby={`#exampleModalLabel${reserva.id}e`} aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id={`exampleModalLabel${reserva.id}e`} style={{ color: "black" }}>Editar reserva "{reserva.id}"?</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    {/* <div className="modal-header d-flex justify-content-between">
                                                        <Editreserva reserva={reserva}/>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#exampleModal${reserva.id}`}>
                                            <i className="bi bi-trash"></i> Eliminar
                                        </button>
                                        <div className="modal fade" id={`exampleModal${reserva.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${reserva.id}`} aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id={`exampleModalLabel${reserva.id}`}>Desea eliminar el reserva "{reserva.id}"?</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-header d-flex justify-content-between">
                                                        <button onClick={async () => await eliminar(reserva.id)} type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                                            <i className="bi bi-trash"></i> Eliminar
                                                        </button>
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                            Cancelar
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
