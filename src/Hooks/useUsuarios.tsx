import React from "react";
import { useEffect, useState, useRef } from "react";
import { reqResApi } from "../api/reqres";
import { ReqResListado, Usuario } from "../Interfaces/reqRes";


export const useUsuarios = () => {

    const [usuarios, setUsuarios ] = useState<Usuario[]>([])
    const paginaRef = useRef(1)

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        
        setUsuarios(resp.data.data);

        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data)
            console.log(paginaRef.current)
        } else {
            alert('No hay mas registros')
        }
    }   

    const pagSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios()
    }

    const pagAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current --;
            cargarUsuarios()
        }
    }

    return {
        usuarios,
        pagSiguiente,
        pagAnterior
    }
}
