import { useEffect, useState, useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';
import { useNavigate } from 'react-router-dom';

export const Bootcamps = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token, setLog } = useContext(TokenContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [editingBootcamp, setEditingBootcamp] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    technologies: [],
    active: true
  });

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      technologies: [],
      active: true
    });
    setEditingBootcamp(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'technologies') {
      // Convertir el string de tecnologías en un array
      const techArray = value.split(',').map(tech => tech.trim());
      setFormData(prev => ({
        ...prev,
        [name]: techArray
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  useEffect(() => {
    if (editingBootcamp) {
      setFormData({
        name: editingBootcamp.name || '',
        description: editingBootcamp.description || '',
        technologies: editingBootcamp.technologies || [],
        active: editingBootcamp.active
      });
    }
  }, [editingBootcamp]);

  const fetchBootcamps = async () => {
    if (!token) {
      console.log('No hay token disponible');
      setLog(false);
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/bootcamps/all', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
      });

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
      setBootcamps(data.filter(bootcamp => bootcamp.active)); // Solo mostrar bootcamps activos
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBootcamps();
  }, [token, navigate, setLog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = editingBootcamp
      ? `http://localhost:5000/api/auth/bootcamps/update/${editingBootcamp.id}`
      : 'http://localhost:5000/api/auth/bootcamps/create';
    
    try {
      const response = await fetch(url, {
        method: editingBootcamp ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al guardar el bootcamp');
      }

      await fetchBootcamps();
      setShowModal(false);
      resetForm();

      const message = editingBootcamp ? 'Bootcamp actualizado correctamente' : 'Bootcamp creado correctamente';
      setSuccess(message);
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de que quieres desactivar este bootcamp?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/auth/bootcamps/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 404) {
        throw new Error('Bootcamp no encontrado');
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al desactivar el bootcamp');
      }

      await fetchBootcamps();
      setSuccess('Bootcamp desactivado correctamente');
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 3000);
    }
  };

  const [success, setSuccess] = useState(null);

  if (loading) {
    return (
      <div className="container d-flex justify-content-center p-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setError(null)}
          ></button>
        </div>
      )}

      {success && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {success}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setSuccess(null)}
          ></button>
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Lista de Bootcamps</h2>
        <button 
          className="btn btn-primary" 
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
        >
          Agregar Bootcamp
        </button>
      </div>

      {/* Modal para crear/editar bootcamp */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingBootcamp ? 'Editar Bootcamp' : 'Crear Nuevo Bootcamp'}
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tecnologías (separadas por comas)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="technologies"
                      value={formData.technologies.join(', ')}
                      onChange={handleInputChange}
                      placeholder="Ej: Java, Spring Boot, MySQL"
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {editingBootcamp ? 'Guardar Cambios' : 'Crear Bootcamp'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {bootcamps.map((bootcamp, index) => (
          <div className="col" key={bootcamp.id || index}>
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">{bootcamp.name}</h5>
                <p className="card-text ">{bootcamp.description}</p>
                <div className="mb-3">
                  <strong>Tecnologías:</strong>
                  <div className="mt-2">
                    {bootcamp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-primary me-1 mb-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => {
                      setEditingBootcamp(bootcamp);
                      setShowModal(true);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(bootcamp.id)}
                  >
                    Desactivar
                  </button>
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
