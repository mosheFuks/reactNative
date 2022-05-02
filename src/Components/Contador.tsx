import { useState } from "react";


const Contador = () => {

  const [entradas, setEntradas] = useState(0);

  const calcular = (numero: number) => {
    if(entradas < 10){
    setEntradas(entradas + numero)
    } else {
      setEntradas(0)
    }
  }
  return (
    <div>
        <h3>Contador</h3>
        <p>Entradas: {entradas}</p>

        <button className="btn btn-success m-2" onClick={() => calcular(1)}>
          +1
        </button>

        <button className="btn btn-danger" onClick={() => calcular(-1)}>
          -1
        </button>
    </div>
  )
}

export default Contador