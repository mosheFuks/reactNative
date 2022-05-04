
import { useUsuarios } from "../Hooks/useUsuarios";
import { Usuario } from "../Interfaces/reqRes";


const Usuarios = () => {

    const { usuarios, pagAnterior, pagSiguiente } = useUsuarios();

    const renderItem = ( {id, first_name, last_name, email, avatar }: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td style={{color: "blue"}}><img src={avatar} alt={first_name} style={{width: 70, borderRadius: 75}}></img></td>
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
                        //usuarios.map(renderItem)
                    }

                </tbody>
            </table>
 
            <button className="btn btn-primary m-3" onClick={pagSiguiente}>
                Siguiente
            </button>

            <button className="btn btn-primary" onClick={pagAnterior}>
                Anterior
            </button>
        </>

    )
}

export default Usuarios;