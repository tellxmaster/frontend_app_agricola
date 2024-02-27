import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const ProductoForm = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0);
  const [proveedorId, setProveedorId] = useState('');
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    obtenerProveedores();
  }, []);

  const obtenerProveedores = async () => {
    try {
      const response = await axios.get('http://localhost:3001/proveedores');
      setProveedores(response.data);
    } catch (error) {
      console.error('Error al obtener los proveedores:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/productos', {
        nombre_producto: nombre,
        descripcion_producto: descripcion,
        Precio_unitario: precio,
        id_proveedor: proveedorId
      });
      console.log(response.data);
      setNombre('');
      setDescripcion('');
      setPrecio(0);
      setProveedorId('');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className='d-grid gap-1 d-md-block'>
        <Link href="/productos" passHref>
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
              <label htmlFor="descripcion" className="form-label">Descripción</label>
              <input
                type="text"
                className="form-control"
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="precio" className="form-label">Precio</label>
              <input
                type="number"
                className="form-control"
                id="precio"
                value={precio}
                onChange={(e) => setPrecio(parseFloat(e.target.value))}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="proveedorId" className="form-label">Proveedor</label>
              <select
                className="form-select"
                id="proveedorId"
                value={proveedorId}
                onChange={(e) => setProveedorId(e.target.value)}
              >
                <option value="">Selecciona un proveedor</option>
                {proveedores.map((proveedor) => (
                  <option key={proveedor.id_proveedor} value={proveedor.id_proveedor}>
                    {proveedor.nombre_proveedor}
                  </option>
                ))}
              </select>
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

export default ProductoForm;
