import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const InventarioForm = () => {
  const router = useRouter();
  const [productos, setProductos] = useState([]);
  const [bodegas, setBodegas] = useState([]);
  const [productoId, setProductoId] = useState('');
  const [bodegaId, setBodegaId] = useState('');
  const [stock, setStock] = useState(0);
  const [ubicacion, setUbicacion] = useState('');
  const [fechaEntrada, setFechaEntrada] = useState('');
  const [fechaCaducidad, setFechaCaducidad] = useState('');

  useEffect(() => {
    obtenerProductos();
    obtenerBodegas();
  }, []);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  const obtenerBodegas = async () => {
    try {
      const response = await axios.get('http://localhost:3001/bodegas');
      setBodegas(response.data);
    } catch (error) {
      console.error('Error al obtener las bodegas:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const nuevoInventario = {
        id_producto: productoId,
        id_bodega: bodegaId,
        stock: stock,
        ubicacion_en_bodega: ubicacion,
        fecha_entrada: fechaEntrada,
        fecha_caducidad: fechaCaducidad
      };

      // Crear el inventario
      await axios.post('http://localhost:3001/inventarios', nuevoInventario);

      // Limpiar los campos después de enviar
      setProductoId('');
      setBodegaId('');
      setStock(0);
      setUbicacion('');
      setFechaEntrada('');
      setFechaCaducidad('');
      // Redirigir a la página de inventarios o a donde sea necesario
      router.push('/inventario/');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className='d-grid gap-1 d-md-block'>
        <Link href="/inventario" passHref>
          <button className="btn btn-primary mb-5" style={{ backgroundColor: '#4542CC' }}>Volver</button>
        </Link>
      </div>
      <div className="card" style={{ backgroundColor: '#CFDFFF' }}>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-12">
              <label htmlFor="productoId" className="form-label">ID del Producto</label>
              <select
                required
                className="form-select"
                id="productoId"
                value={productoId}
                onChange={(e) => setProductoId(e.target.value)}
              >
                <option value="">Selecciona un producto</option>
                {productos.map((producto) => (
                  <option key={producto.id_producto} value={producto.id_producto}>
                    {producto.nombre_producto}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="bodegaId" className="form-label">ID de la Bodega</label>
              <select
                required
                className="form-select"
                id="bodegaId"
                value={bodegaId}
                onChange={(e) => setBodegaId(e.target.value)}
              >
                <option value="">Selecciona una bodega</option>
                {bodegas.map((bodega) => (
                  <option key={bodega.id_bodega} value={bodega.id_bodega}>
                    {bodega.nombre_bodega}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="stock" className="form-label">Stock</label>
              <input
                required
                type="number"
                className="form-control"
                id="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="ubicacion" className="form-label">Ubicación en Bodega</label>
              <input
                required
                type="text"
                className="form-control"
                id="ubicacion"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="fechaEntrada" className="form-label">Fecha de Entrada</label>
              <input
                required
                type="date"
                className="form-control"
                id="fechaEntrada"
                value={fechaEntrada}
                onChange={(e) => setFechaEntrada(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="fechaCaducidad" className="form-label">Fecha de Caducidad (opcional)</label>
              <input
                type="date"
                className="form-control"
                id="fechaCaducidad"
                value={fechaCaducidad}
                onChange={(e) => setFechaCaducidad(e.target.value)}
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

export default InventarioForm;
