import axios from 'axios';

export async function getAllReserva() {
  const url = 'http://localhost:3000/reserva';
  const resp = await axios.get(url);
  if (resp.status === 200) {
    const reserva = resp.data.map((reserva) => ({
        id: reserva.id,
        fechareserva: new Date(reserva.fechareserva).toLocaleDateString(),
        fechaservicio: new Date(reserva.fechaservicio).toLocaleDateString(),
        cupo: reserva.cupo,
        observacion: reserva.observacion,
        estado: reserva.estado,
        total: reserva.total,
        usuarioid: reserva.usuarioid,
        servicioid: reserva.servicioid,
        usuario: reserva.usuario,
        servicio: reserva.servicio
    }));
    return reserva;
  } else {
    return "error";
  }
}