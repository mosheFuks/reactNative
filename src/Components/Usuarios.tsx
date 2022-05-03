import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqres";
import { ReqResListado, Usuario } from "../Interfaces/reqRes";



const Usuarios = () => {

    

    const renderItem = ( {id, first_name, last_name, email, avatar }: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td style={{color: "blue"}}>
                    <img src={avatar} alt={first_name} style={{width: 70, borderRadius: 75}}></img></td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }
    
    return (
        <>
            <h3>Usuarios: </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( usuario => (renderItem(usuario)) )
                    }

                </tbody>
            </table>
 
            <button className="btn btn-primary" onClick={cargarUsuarios}>
                Siguiente
            </button>
        </>

    )
}

export default Usuarios;