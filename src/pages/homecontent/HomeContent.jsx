import React from 'react'
import h from'../../assets/styles/HomeContent.module.css'
import learning from '../../assets/images/learning.avif'
import expert2 from '../../assets/images/expert2.webp'
import real from '../../assets/images/real.avif'
import {useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';


export const HomeContent = () => {
  const navigate=useNavigate();
  const { log, setLog } = useContext(TokenContext);
  return (
    <div>

      <div className={`text-center py-5 ${h.bgWelcome}`}>
        <h1>Bienvenido a K-Bootcamps</h1>
        <p>Aprende programación y transforma tu carrera</p>
      </div>
   

      <div className="container mt-5">
        <h2 className="text-center mb-4">¿Por qué elegir nuestros Bootcamps?</h2>
       
        <div className="row text-center">
          <div className="col-md-4">
            <h5>Aprendizaje Intensivo</h5>
            <p>Programas diseñados para acelerar tu carrera profesional.</p>
            <img src={learning} alt="" className='w-75' />
          </div>
          <div className="col-md-4">
            <h5>Mentores Expertos</h5>
            <p>Profesores con amplia experiencia en la industria.</p>
            <img src={expert2} alt="" className={`w-100 ${h.img2}`}/>
          </div>
          <div className="col-md-4">
            <h5>Proyectos Reales</h5>
            <p>Trabaja en proyectos reales para desarrollar tu portafolio.</p>
            <img src={real} alt="" className={`w-75 ${h.img}`}/>
          </div>
          <p className="text-center my-4">En nuestros bootcamps, aprenderás las habilidades necesarias para convertirte en un desarrollador profesional en el menor tiempo posible.</p>
        </div>
      </div>



      <div className="bg-light text-center py-5 mt-5">
        <h3>¿Estás listo para dar el siguiente paso?</h3>
        <p>Únete a nosotros y empieza tu carrera en tecnología hoy.</p>
        {!log && <button onClick={()=>navigate('/register')} className="btn btn-success">Comienza Ahora</button>}
        
      </div>
    </div>

  )
}
