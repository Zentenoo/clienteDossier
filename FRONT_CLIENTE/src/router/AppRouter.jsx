import {Routes, Route} from "react-router-dom"
import { InicioPage } from "../Inicio/InicioPage"

export const AppRouter = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">DossierUdi</a>
                    <div className="navbar-collapse" id="navbarNav">                        
                    </div>
                </div>
            </nav>
                <Routes>
                    <Route path="/*" element={<InicioPage/>}></Route>
                </Routes>
        </>
    )
}
