import { useState } from "react";
import useContador from '../Hooks/useContador';


const ContadorConHook = () => {

  //En este caso le indico que el valor inicial va a ser 100
  const {entradas, calcular} = useContador(100);
  return (
    <div>
        <h3>Contador con hook</h3>
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

export default ContadorConHook