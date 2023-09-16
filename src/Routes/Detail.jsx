import {useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';
import React from 'react'
import "../Styles/detail.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {apiState, theme} = useGlobalContext();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const paramsId = useParams();
  const dentist = apiState.find((d) => paramsId.id === d.id )
  
  return (
    <div className={`detail-container ${theme}`}>
      <h1>Detalles de {dentist.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='doctor-card'>
        <h2>{dentist.name}</h2>
        <p>Email: {dentist.email}</p>
        <p>Teléfono: {dentist.phone}</p>
      </div>
    </div>
    );
  }
   


export default Detail