import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../componentes/Home";
import Produtos from "../componentes/Produtos";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/produto" element={<Produtos/>}/>
            <Route path="/excluir/:id" element={<Produtos/>}/>
            <Route path="*" element={<Navigate to="/produto" replace/>}/>

        </Routes>
    )
}