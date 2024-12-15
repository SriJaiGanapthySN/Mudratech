import { Outlet } from "react-router-dom";
import Header from "../compenents/Header";

function Products(){
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    );

}

export default Products;