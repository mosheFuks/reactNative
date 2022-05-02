

const Funciones = () => {
   const sumar = (a: number, b: number) => {
       return a + b;
   } 


  return (
    <div>
        <h3>Funciones</h3>
        <p>El resultado es: { sumar(10, 5) }</p>
    </div>
  )
}

export default Funciones