import React from 'react';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { token, setToken } = useContext(TokenContext);
  const { log, setLog } = useContext(TokenContext);
  const navigate = useNavigate();



  const onSubmitForm = async (data) => { /* Permite obtener el token y el estado del token */
    try {
      const response = await fetch('http://localhost:5000/api/auth//login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.nombre,
          password: data.contrasena,
        }),
      });

      if(response.ok){
        const data2 = await response.json();
        setToken(data2.token); /* Guarda el token en "token" */
        setLog(true);/* Guarda el estado de existencia del token */
        navigate('/bootcapms'); /* Redirige a los Bootcamps una vez se ha iniciado sesión */
        
  
      }else{
        alert("No se ha podido iniciar Sesión... Usuario o contraseña no válidos")
        
      }
  
    } catch (error) {
      alert('Hubo un error en la solicitud');
    }
  };

  return (
    <>
      <div className='container'>
        <h2 className='text-center'>Inicio de Sesión</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="mb-3">
                        <label htmlFor="nombreUsuario" className="form-label">Ingresa nombre de usuario</label>
                        <input type="text" className="form-control" id="nombreUsuario" placeholder="usuarioEjemplo"{...register('nombre', {required: true})} />
                        {errors?.nombre?.type === "required" && <p>Este campo es requerido</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contrasenaUsuario" className="form-label">Ingresa tu contraseña</label>
                        <input type="password" className="form-control" id="contrasenaUsuario" placeholder="*****"{...register('contrasena', {required: true})} />
                        {errors?.contrasena?.type === "required" && <p>Este campo es requerido</p>}
                    </div>
          <button type='submit' className="btn btn-success">Ingresar</button>
        </form>
      </div>
    </>
  );
}
