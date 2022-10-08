import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <header>
            <nav>
                <Link to="/">Home</Link>  | <Link to="/produto">Produtos</Link>
            </nav>
        </header>
    )
}