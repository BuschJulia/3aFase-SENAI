import React, { useState } from 'react'
import './Demo1.css'

function Demo1() {
  const [estado, setEstado] = useState(0)

  function incrementarEstado() {
    setEstado(estado + 1)
  }

  let cornometro = 0;

  function incrementaCornometro() {
    cornometro++
    console.log(cornometro)
  }

  function alertarUsuario() {
    alert("Corra para as colinas")
  }

  return (
    <div className='container-demo1'>
      <h1>demo1</h1>
      <button onClick={alertarUsuario}>Clica em mim</button>
      <button onClick={() => { alert("Executei uma arrow function") }}>Ex: Arrow Function</button>

      <div>
        Cornometro: {cornometro}
        <button onClick={incrementaCornometro}>+</button>
      </div>

      <div>
        estado: {estado}
        <button onClick={incrementarEstado}>+</button>
      </div>
    </div>
  )
}

export default Demo1