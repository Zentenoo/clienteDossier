import { useEffect, useState } from "react";
import axios from 'axios';
import { getAllUsuarios } from "../../Usuario/helpers/petUsuario";
import { getAllServicios } from "../../Servicios/helpers/getAllServicios";
// import { getAllReserva } from "../../Reserva/helpers/getAllReserva";
// import { getAllProducto } from "../../Producto/helpers/getAllProducto";

export const CreateReserva = () => {
    const [usuario, setUsuario] = useState([]);
    const [servicio, setServicio] = useState([]);
    const [formData, setFormData] = useState({
        fechareserva: "",
        fechaservicio: "",
        cupo: 0,
        observacion: "",
        estado: true,
        total: 0,
        usuarioid: "",
        servicioid: "",
    });
    const getReservas = async () => {
        const data = await getAllUsuarios();
        setUsuario(data);
    }

    const getAllProductos = async () => {
        const data = await getAllServicios();
        setServicio(data);
    }

    useEffect(() => {
        getReservas();
        getAllProductos();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            await axios.post("http://localhost:3000/reserva", {
                "fechareserva": new Date(formData.fechareserva).toLocaleDateString(),
                "fechaservicio": new Date(formData.fechaservicio).toLocaleDateString(),
                "cupo": formData.cupo,
                "observacion": formData.observacion,
                "estado": formData.estado,
                "total": formData.total,
                "usuarioid": document.getElementById("usuario").value,
                "servicioid": document.getElementById("servicio").value,
            });
            window.location.reload();
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        }
    }

    const handleCancelar = () => {
        getReservas();
    }

    const handleServicio = (e) => {
        const selectedServicioId = e.target.value;
        const selectedServicio = servicio.find(r => r.id === parseInt(selectedServicioId));
        setFormData({
            ...formData,
            servicio: selectedServicioId,
            fechaservicio: selectedServicio ? selectedServicio.fechaFin : '',

        });
    }

    return (
        <div className="container">
            <section className="d-flex justify-content-center ">
                <div className="">
                    <div className="mb-2">
                        <form onSubmit={onSubmit} action="">
                            {/* <div className="mb-3">
                                <div className="mb-3">
                                    <label htmlFor="reserva" className="form-label">Fecha </label>
                                    <select
                                        id="reserva"
                                        name="reserva"
                                        className='form-select'
                                        onChange={handleChange}
                                    >
                                        {reserva.map(reserva =>
                                            <option key={reserva.id} value={reserva.id} className="form-control"> {reserva.id} </option>
                                        )}
                                    </select>
                                </div>
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="fechareserva" className="form-label">Fecha Reserva</label>
                                <input
                                    className="form-control"
                                    type="date"
                                    id="fechareserva"
                                    name="fechareserva"
                                    value={formData.fechareserva}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="servicio" className="form-label">Servicio</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="servicio"
                                    name="servicio"
                                    value={formData.servicio}
                                    onChange={handleChange}
                                    readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="precioServicio" className="form-label">Precio Servicio</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="precioServicio"
                                    name="precioServicio"
                                    value={formData.precioServicio}
                                    onChange={handleChange}
                                    readOnly
                                />
                            </div> */}
                            <div className="mb-3">
                                <div className="mb-3">
                                    <label htmlFor="servicio" className="form-label">Servicio </label>
                                    <select
                                        id="servicio"
                                        name="servicio"
                                        className='form-select'
                                        onChange={handleServicio}
                                    >
                                        {servicio.map(servicio =>
                                            <option key={servicio.id} value={servicio.id} className="form-control"> {servicio.nombre} </option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fechaservicio" className="form-label">Servicio Fecha</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="fechaservicio"
                                    name="fechaservicio"
                                    value={formData.fechaservicio}
                                    onChange={handleChange}
                                    readOnly
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cantidad" className="form-label">Cantidad</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="cantidad"
                                    name="cantidad"
                                    value={formData.cupo}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor='estado' className="form-label">Estado</label>
                                <select
                                    id='estado'
                                    name='estado'
                                    value={formData.estado}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option value={true}>Activo</option>
                                    <option value={false}>Inactivo</option>
                                </select>
                            </div> */}
                            <div className="mb-3" style={{ color: 'green' }}>
                                <label htmlFor="total" className="form-label">Total</label>
                                <input
                                    className="form-control"
                                    style={{ color: 'green' }}
                                    type="text"
                                    id="total"
                                    name="total"
                                    value={formData.total}
                                    onChange={handleChange}
                                    readOnly
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-primary" type="submit">Agregar</button>
                                <button onClick={handleCancelar} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
