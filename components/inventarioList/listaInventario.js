import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InventarioRow from './inventarioRow';
import EditModal from './editModal';
import DeleteModal from './deleteModal';

const InventarioList = ({ productos, bodegas }) => {
  const [inventarios, setinventarios] = useState([]);
  const [idInventarioEliminar, setidInventarioEliminar] = useState(null);
  const [idInventarioEditar, setidInventarioEditar] = useState(null);
  const [inventarioEditado, setinventarioEditado] = useState({});

  useEffect(() => {
    obtenerinventarios();
  }, []);

  const obtenerinventarios = async () => {
    try {
      const response = await axios.get('http://localhost:3001/inventarios');
      console.log(response)
      setinventarios(response.data);
    } catch (error) {
      console.error('Error al obtener las inventarios:', error);
    }
  };

  const confirmarEliminacion = (idInventario) => {
    setidInventarioEliminar(idInventario);
  };

  const handleCancelarEliminar = () => {
    setidInventarioEliminar(null);
  };

  const eliminarInventario = async () => {
    try {
      await axios.delete(`http://localhost:3001/inventarios/${idInventarioEliminar}`);
      setinventarios(inventarios.filter(inventario => inventario.id_inventario !== idInventarioEliminar));
    } catch (error) {
      console.error('Error eliminando Inventario:', error);
    }
    setidInventarioEliminar(null);
  };

  const confirmarEdicion = (inventario) => {
    setidInventarioEditar(inventario.id_inventario);
    setinventarioEditado(inventario);
  };

  const handleCancelarEdicion = () => {
    setidInventarioEditar(null);
  };

  const handleGuardarEdicion = async (inventario) => {
    try {
      await axios.put(`http://localhost:3001/inventarios/${inventario.id_inventario}`, inventario);
      const newData = inventarios.map(item => (item.id_inventario === inventario.id_inventario ? inventario : item));
      setinventarios(newData);
      setidInventarioEditar(null);
    } catch (error) {
      console.error('Error editando inventario:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card" style={{ backgroundColor: '#EFEFEF' }}>
        <div className="card-body">
          <h5 className="card-title">Lista de inventarios</h5>
          {/* Envuelve tu tabla en un div con la clase .table-responsive */}
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">producto</th>
                  <th scope="col">Bodega</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Ubicación</th>
                  <th scope="col">Fecha entrada</th>
                  <th scope="col">Fecha Caducidad</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {inventarios.map(inventario => (
                  <InventarioRow
                    key={inventario.id_inventario}
                    inventario={inventario}
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
        show={idInventarioEliminar !== null}
        onCancel={handleCancelarEliminar}
        onConfirm={eliminarInventario}
      />

      <EditModal
        show={idInventarioEditar !== null}
        onCancel={handleCancelarEdicion}
        onSave={handleGuardarEdicion}
        inventario={inventarioEditado}
        onChange={setinventarioEditado}
        productos={productos}
        bodegas={bodegas}
      />
    </div>

  );
};

export default InventarioList;
