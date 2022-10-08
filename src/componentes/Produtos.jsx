import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {AiOutlineEdit as ED} from 'react-icons/ai'
import {RiDeleteBin2Line as EX} from 'react-icons/ri'

export default function Produtos(){
    
    const [produtos, setProdutos] = useState([

    ])

    useEffect(()=>{
        const getProdutos = async ()=>{
            const response = await fetch("http://localhost:8080/LojaApp/rest/produto")
            const data = await response.json()

            setProdutos(data)
        }
        getProdutos()
    },[]
    )
    let navigate = useNavigate()


    const {id} = useParams()

    useEffect(()=>{
        const removeProduto = async ()=>{
            const response = await fetch(`http://localhost:8080/LojaApp/rest/produto/${id}`,{
                                    method: "DELETE",
                                    headers:{
                                        'Accept': 'application/json',
                                        'Content-type': 'application/json'
                                    }
            })                      .then(()=> navigate("/produto"))
        }
        removeProduto()
    }, [id])
    

    
    return(
        <div>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Titulo</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Editar - Excluir</th>
                </tr>

                {produtos.map((p, i)=>
                 <tr key={i}>
                 <td>{p.codigo}</td>
                 <td>{p.titulo}</td>
                 <td>{p.preco}</td>
                 <td>{p.quantidade}</td>
                 <td><Link to={`/editar/${p.codigo}`}><ED/></Link>  | <Link to={`/excluir/${p.codigo}`}><EX/></Link></td>
             </tr>
                )}
            </table>

        </div>
    )
}