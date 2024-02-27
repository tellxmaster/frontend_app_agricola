import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProveedorRow from './proveedorRow';
import DeleteModal from './deleteModal';
import EditModal from './editModal';

const ProveedorList = () => {
  const [proveedores, setProveedores] = useState([]);
  const [idProveedorEditar, setIdProveedorEditar] = useState(null);
  const [proveedorEditado, setProveedorEditado] = useState({});
  const [idProveedorEliminar, setIdProveedorEliminar] = useState(null);

  useEffect(() => {
    obtenerProveedores();
  }, []);

  const obtenerProveedores = async () => {
    try {
      const response = await axios.get('http://localhost:3001/proveedores'); // Asegúrate de tener este endpoint
      setProveedores(response.data);
    } catch (error) {
      console.error('Error al obtener los proveedores:', error);
    }
  };

  const confirmarEliminacion = (idProveedor) => {
    setIdProveedorEliminar(idProveedor);
  };

  const confirmarEdicion = (proveedor) => {
    setIdProveedorEditar(proveedor.id_proveedor);
    setProveedorEditado(proveedor);
  };

  const eliminarProveedor = async () => {
    try {
      await axios.delete(`http://localhost:3001/proveedores/${idProveedorEliminar}`);
      setProveedores(proveedores.filter(proveedor => proveedor.id_proveedor !== idProveedorEliminar));
    } catch (error) {
      console.error('Error eliminando proveedor:', error);
    }
    setIdProveedorEliminar(null);
  };

  const handleCancelarEliminar = () => {
    setIdProveedorEliminar(null);
  };

  const handleGuardarEdicion = async (proveedor) => {
    try {
      await axios.put(`http://localhost:3001/proveedores/${proveedor.id_proveedor}`, proveedor);
      const newData = proveedores.map(item => (item.id_proveedor === proveedor.id_proveedor ? proveedor : item));
      setProveedores(newData);
      setIdProveedorEditar(null);
    } catch (error) {
      console.error('Error editando proveedor:', error);
    }
  };

  const handleCancelarEdicion = () => {
    setIdProveedorEditar(null);
  };

  return (
    <div className="container mt-5">
      <div className="card" style={{ backgroundColor: '#EFEFEF' }}>
        <div className="card-body">
          <h5 className="card-title">Lista de Proveedores</h5>
          {/* Envuelve tu tabla en un div con la clase .table-responsive */}
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Email</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {proveedores.map(proveedor => (
                  <ProveedorRow
                    key={proveedor.id_proveedor}
                    proveedor={proveedor}
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
        show={idProveedorEliminar !== null}
        onCancel={handleCancelarEliminar}
        onConfirm={eliminarProveedor}
      />

      <EditModal
        show={idProveedorEditar !== null}
        onCancel={handleCancelarEdicion}
        onSave={handleGuardarEdicion}
        proveedor={proveedorEditado}
        onChange={setProveedorEditado}
      />
    </div>

  );
};

export default ProveedorList;
