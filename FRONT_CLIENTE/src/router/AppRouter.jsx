import {Routes, Route, useLocation} from "react-router-dom"
import { UsuariosRoute } from "../Usuario/routes/UsuarioRoute"
import {InicioRoutes} from "../inicio/InicioRoutes"
import { ProductoRoute } from "../Producto/routes/ProductoRoute"
import { useContext} from "react"
import { AuthContext } from "../Context/Authcontext"
import { Login } from "../Usuario/components/Login"
import { InicioPage } from "../Inicio/InicioPage"
import { ServicioRoute } from "../Servicios/routes/ServicioRoute"
import { ReservaRoutes } from "../Reserva/route/ReservaRoute"
export const AppRouter = () => {
    const { isLoggedIn } = useContext(AuthContext);
    return(
        <>
            {isLoggedIn && (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">DossierUdi</a>
                    <div className="navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        
                            <li className="nav-item">
                                <a className="nav-link" href="/servicios">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/producto">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/reserva">Reserva</a>
                            </li>                      
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            )}
                <Routes>
                    <Route path="/*" element={<InicioPage/>}></Route>
                    <Route path="/servicios" element={<ServicioRoute/>}></Route>
                    <Route path="/usuario/*" element={<UsuariosRoute/>}></Route>
                    <Route path="/producto/*" element={<ProductoRoute/>}></Route>
                    <Route path="/login/*" element={<Login/>}></Route>
                    <Route path="/reserva/*" element={<ReservaRoutes/>}></Route>


                </Routes>
        </>
    )
}
