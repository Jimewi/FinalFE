import React from 'react'
import Form from '../Components/Form'
import "../Styles/contact.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  return (
    <div className='contact vista'>
      <h2>¿Tiene alguna duda?</h2>
      <p>Haznos tu consulta, te responderemos a la brevedad</p>
      <Form/>
    </div>
  )
}

export default Contact