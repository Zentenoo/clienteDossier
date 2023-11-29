import {Routes, Route, useLocation} from "react-router-dom"
import { UsuariosRoute } from "../Usuario/routes/UsuarioRoute"
import {InicioRoutes} from "../inicio/InicioRoutes"
import { useContext} from "react"
import { AuthContext } from "../Context/Authcontext"
import { Login } from "../Usuario/components/Login"
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
                                <a className="nav-link" href="/plato">Plato</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/servicios">Servicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/producto">Producto</a>
                            </li>    
                            <li className="nav-item">
                                <a className="nav-link" href="/reserva">Reserva</a>
                            </li>                         
                        </ul>
                    </div>

                </div>
            </nav>
            )}
                <Routes>
                    <Route path="/*" element={<InicioRoutes/>}></Route>
                    <Route path="/usuario/*" element={<UsuariosRoute/>}></Route>
                    <Route path="/login/*" element={<Login/>}></Route>

                </Routes>
        </>
    )
}
