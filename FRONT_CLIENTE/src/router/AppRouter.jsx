import {Routes, Route, useNavigate, Link} from "react-router-dom"
import { useEffect } from "react"
import { InicioRoutes } from "../inicio/InicioRoutes"
import { UsuariosRoute } from "../Usuario/routes/UsuarioRoute"
import { LoginRoute } from "../Login/routes/LoginRoute"


import { useContext} from "react"
import { AuthContext } from "../Context/Authcontext"
import { RegisterRoute } from "../Login/routes/RegisterRoute"

export const AppRouter = () => {
    const { isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');
      const currentPath = window.location.pathname;
      
      if (
        !token &&
        !['/login', '/register', '/', '/inicio'].includes(currentPath)
      ) {
        navigate('/login');
      } else if (token) {
        setIsLoggedIn(true);
      }
    }, [setIsLoggedIn, navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login'); // Si estás usando useNavigate
  };
  
    const renderNavbar = () => {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">DossierUdi</a>
            <div className="navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/usuario">Usuario</a>
                    </li>
                    <li className="nav-item">
                      <button onClick={handleLogout} className="btn btn-link nav-link">Cerrar Sesión</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">Iniciar Sesión</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link">Registrar</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      );
    };
  
    return (
      <>
        {renderNavbar()}
        <Routes>
          <Route path="/login/*" element={<LoginRoute />} />
          <Route path="/register/*" element={<RegisterRoute />} />
          <Route path="/*" element={<InicioRoutes />} />
          <Route path="/inicio/*" element={<InicioRoutes />} />

          {isLoggedIn && (
            <>
              
              <Route path="/usuario/*" element={<UsuariosRoute />} />
            </>
          )}

        </Routes>
      </>
    );
  };
