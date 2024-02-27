import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const ProveedorForm = () => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/proveedores', {
        nombre_proveedor: nombre,
        direccion_proveedor: direccion,
        telefono_proveedor: telefono,
        email_proveedor: email
      });
      console.log(response.data);
      setNombre('');
      setDireccion('');
      setTelefono('');
      setEmail('');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className='d-grid gap-1 d-md-block'>
        <Link href="/proveedores" passHref>
          <button className="btn btn-primary mb-5" style={{ backgroundColor: '#4542CC' }}>Volver</button>
        </Link>
      </div>

      <div className="card" style={{ backgroundColor: '#CFDFFF' }}>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-12">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="direccion" className="form-label">Direccion</label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="telofono" className="form-label">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn text-white" style={{ backgroundColor: '#4542CC' }}>Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProveedorForm;
