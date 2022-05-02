interface Persona  {
    nombre: string;
    edad: number;
    estado: boolean
    direccion: Direccion;
}

interface Direccion{
    pais: string;
    nroCasa: number;
}

//No se permite crear instancias a traves de Interfaces. Esta solo sirve para asignar datos de validacion.
//const persona = new Persona();

const ObjetosLiterales = () => {
    

   //Instancio un objeto de tipo Persona que cumpla con las indicaciones puestas en la Interface Persona 
   const persona: Persona = {
       nombre: "Fernando",
       edad: 35,
       estado:  true,
       direccion: {
           pais: "Canada",
           nroCasa: 615
       }
   }



   //Modificar de manera sencilla el valor de un atributo de persona
   persona.nombre = "Alberto"
  return (
    <>
       <h3>Objetos Literales</h3> 
       <code>
            <pre>
                { JSON.stringify(persona, null, 2) }
            </pre>
        </code>


    </>
  )
}

export default ObjetosLiterales