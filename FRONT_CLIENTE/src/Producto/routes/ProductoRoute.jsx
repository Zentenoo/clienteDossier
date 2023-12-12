import { Route, Routes } from "react-router-dom"
import { ProductoPage } from "../pages/ProductoPage"
import { ProductoInfoPage } from "../pages/ProductoInfoPage"


export const ProductoRoute=()=>{
    
    return(
        <>
            <Routes>
                <Route path="/*" element={<ProductoPage/>}></Route>
                <Route path="/:id" element={<ProductoInfoPage/>}></Route>
                
            </Routes>
        </>
    )
}