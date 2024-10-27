import { useEffect, useState, useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';
import { useNavigate } from 'react-router-dom';

export const Bootcamps = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token, setLog } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBootcamps = async () => {
      // Verificar si hay token
      if (!token) {
        console.log('No hay token disponible');
        setLog(false);
        navigate('/login');
        return;
      }

      try {
        console.log('Token siendo usado:', token); // Para debug

        const response = await fetch('http://localhost:5000/api/auth/bootcamps/all', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            // Agregar headers CORS si es necesario
            'Accept': 'application/json',
          },
          credentials: 'include', // Si tu API requiere cookies
        });

        console.log('Status de la respuesta:', response.status); // Para debug

        if (response.status === 401) {
          console.log('Token no válido o expirado');
          setLog(false);
          navigate('/login');
          return;
        }

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${await response.text()}`);
        }

        const data = await response.json();
        console.log('Datos recibidos:', data); // Para debug
        setBootcamps(data);
        setLoading(false);
      } catch (error) {
        console.error('Error completo:', error); // Para debug
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBootcamps();
  }, [token, navigate, setLog]);

  if (loading) {
    return (
      <div className="container d-flex justify-content-center p-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-3">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Lista de Bootcamps</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

      <div className="col " >
            <div className="card h-100 shadow ">
              <div className="card-body text-center ">
                
                  <button >+</button>
                
                <p className="card-text">
                  <strong>Agregar</strong>
                </p>
                
              </div>
            </div>
          </div>
        
          <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <img src="..." class="rounded me-2" alt="..."/>
              <strong class="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        {bootcamps.map((bootcamp, index) => (
          <div className="col" key={bootcamp.id || index}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">
                  { bootcamp.name}
                </h5>
                <p className="card-text">
                  {bootcamp.description }
                </p>
                
                <p className="card-text">
                  <strong>Tecnologias:</strong>{bootcamp.technologies[0]}, {bootcamp.technologies[1]}, {bootcamp.technologies[2]}
                </p>
                <div className='row'>
                  <button className='col'>Editar</button><button className='col'>Desactivar</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bootcamps;