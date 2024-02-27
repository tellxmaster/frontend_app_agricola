import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductRow from './productRow';
import DeleteModal from './deleteModal';
import EditModal from './editModal';

const ProductList = ({ proveedores }) => {
  const [productos, setProductos] = useState([]);
  const [idProductoEditar, setIdProductoEditar] = useState(null);
  const [productoEditado, setProductoEditado] = useState({});
  const [idProductoEliminar, setIdProductoEliminar] = useState(null);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  const confirmarEliminacion = (idProducto) => {
    setIdProductoEliminar(idProducto);
  };

  const confirmarEdicion = (producto) => {
    setIdProductoEditar(producto.id_producto);
    setProductoEditado(producto);
  };

  const eliminarProducto = async () => {
    try {
      await axios.delete(`http://localhost:3001/productos/${idProductoEliminar}`);
      setProductos(productos.filter(producto => producto.id_producto !== idProductoEliminar));
    } catch (error) {
      console.error('Error eliminando producto:', error);
    }
    setIdProductoEliminar(null);
  };

  const handleCancelarEliminar = () => {
    setIdProductoEliminar(null);
  };

  const handleGuardarEdicion = async (producto) => {
    try {
      await axios.put(`http://localhost:3001/productos/${producto.id_producto}`, producto);
      const newData = productos.map(item => (item.id_producto === producto.id_producto ? producto : item));
      setProductos(newData);
      setIdProductoEditar(null);
    } catch (error) {
      console.error('Error editando producto:', error);
    }
  };

  const handleCancelarEdicion = () => {
    setIdProductoEditar(null);
  };

  return (
    <div className="container mt-5">
      <div className="card" style={{ backgroundColor: '#EFEFEF' }}>
        <div className="card-body">
          <h5 className="card-title">Lista de Productos</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Proveedor</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map(producto => (
                  <ProductRow
                    key={producto.id_producto}
                    producto={producto}
                    onEdit={confirmarEdicion}
                    onDelete={confirmarEliminacion}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <DeleteModal
        show={idProductoEliminar !== null}
        onCancel={handleCancelarEliminar}
        onConfirm={eliminarProducto}
      />

      <EditModal
        show={idProductoEditar !== null}
        onCancel={handleCancelarEdicion}
        onSave={handleGuardarEdicion}
        producto={productoEditado}
        onChange={setProductoEditado}
        proveedores={proveedores}
      />
    </div>
  );
};

export default ProductList;
