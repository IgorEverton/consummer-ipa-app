import React from "react";
import Menu from "./componentes/Menu";
import MainRoutes from "./routes/MainRoutes";

export default function App(){
    return(
        <div>
            <h1>CONSUMO DE API-REST</h1>
            <Menu/>
            <MainRoutes/>
        </div>
    )
}