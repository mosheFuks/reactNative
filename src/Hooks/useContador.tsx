import { useState } from "react"

// Al useContador() le puedo pasar un parametro, que en este caso seria el numero que quiero que se muestre por primera vez en pantalla, 
// pero poniendo (numInicial: number = 0) le estoy indicando que el valor por defecto es 0. En el caso de querer modificar eso se le puede pasar 
// otro numero donde se llama el hook, en este caso en ContadorConHook.tsx
const useContador = (numInicial: number = 0) => {
    const [entradas, setEntradas] = useState(numInicial);

    const calcular = (numero: number) => {
        setEntradas(entradas + numero)
    }

    return {
        entradas,
        calcular
    }
  
}

export default useContador