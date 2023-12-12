import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import { ProductoList } from "../components/ProductoList";

export const ProductoPage = () => {
  return (
    <>
      <div className="container">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: "5px" }}>
          <h1>Productos Disponibles</h1>
        </div>
        <hr></hr>
        <ProductoList />
      </div>
    </>
  );
};
