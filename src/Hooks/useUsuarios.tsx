import React from "react";

export const useUsuarios = () => {
    return (
        <>
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
            paginaRef.current = paginaRef.current + 1;
            console.log(paginaRef.current)
        } else {
            alert('No hay mas registros')
        }
        }
        </>
    )
}