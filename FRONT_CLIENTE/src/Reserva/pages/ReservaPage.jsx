import { ReservaList } from "../components/ReservaList"
import { CreateReserva } from "./CreateReserva"


export const ReservaPage = () => {
  return (
    <>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px' }}>
          <h1>Lista de Reservas</h1>
          <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
              Crear Reserva
            </button>
            <div className="modal fade" id="exampleModalLabel" tabIndex="-1" aria-labelledby="#exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel" style={{ color: "black" }}>Crear Nuevo Reserva</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-header d-flex justify-content-between">
                    <CreateReserva/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
      <ReservaList />
    </>
  )
}