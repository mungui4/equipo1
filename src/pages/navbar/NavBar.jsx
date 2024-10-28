import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';
import { TokenContext } from '../../context/TokenContext';

export const NavBar = () => {  /* Agrega el navbar */
  const { log, setLog } = useContext(TokenContext);
  const {setToken} = useContext(TokenContext);
  const navigate = useNavigate();
  const{userName,setUserName} =useContext(TokenContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to='/'><img src={logo} alt="Logo" width="60" height="60" className="d-inline-block align-text-top rounded-5" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">

              < Link to='/bootcapms' className="btn btn-outline-success me-2 mb-2" type="button">Nuestros Bootcamps</Link>
              {!log ? (<><Link to='/login' className="btn btn-outline-success me-2 mb-2" type="button">Iniciar Sesión</Link>
               <Link to='/register' className="btn btn-outline-success me-2 mb-2" type="button">Registrarse</Link></>) 
               : <button to='/' className="btn btn-outline-danger me-2 mb-2" type="button" onClick={()=>{setLog(false), navigate('/'), setToken(null)}}>{userName} <span className='small'>(Cerrar Sesión)</span></button>
               } {/* Muestra los botones "Iniciar Sesión" y "Registrarse" si no existe Token, si existe los oculta */}
              

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
