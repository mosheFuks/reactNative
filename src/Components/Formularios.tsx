import { useState } from "react"

const Formularios = () => {

    const [ formulario, setFormulario ] = useState({
        email: "example@example.com",
        password: "123456"
    })

    const onChange = ( value: string, campo: string) => {
        setFormulario({
            ...formulario,
            [campo]: value
        })
    }
  return (
    <>
      <h3>Formularios</h3>
      <div>
        <input type="text" className="from-control mb-2" placeholder="Email" value={formulario.email}
         onChange={ ({ target }) => onChange(target.value, 'email')}
        />
      </div>
      
      <div>
        <input type="password" className="from-control" placeholder="Password" value={formulario.password}
         onChange={ ({ target }) => onChange(target.value, 'password')}
        />
      </div>

      <code>
          <pre>
              { JSON.stringify(formulario, null, 2)}
          </pre>
      </code>
    </>
  )
}

export default Formularios
