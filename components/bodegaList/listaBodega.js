import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BodegaRow from './bodegaRow';
import EditModal from './editModal';
import DeleteModal from './deleteModel';
const BodegaList = ({ responsables, tiposBodegas }) => {
  const [bodegas, setBodegas] = useState([]);
  const [idBodegaEliminar, setIdBodegaEliminar] = useState(null);
  const [idBodegaEditar, setIdBodegaEditar] = useState(null);
  const [bodegaEditado, setBodegaEditado] = useState({});

  useEffect(() => {
    obtenerBodegas();
  }, []);

  const obtenerBodegas = async () => {
    try {
      const response = await axios.get('http://localhost:3001/bodegas');
      console.log(response)
      setBodegas(response.data);
    } catch (error) {
      console.error('Error al obtener las bodegas:', error);
    }
  };

  const confirmarEliminacion = (idBodega) => {
    setIdBodegaEliminar(idBodega);
  };

  const handleCancelarEliminar = () => {
    setIdBodegaEliminar(null);
  };

  const eliminarBodega = async () => {
    try {
      await axios.delete(`http://localhost:3001/bodegas/${idBodegaEliminar}`);
      setBodegas(bodegas.filter(bodega => bodega.id_bodega !== idBodegaEliminar));
    } catch (error) {
      console.error('Error eliminando bodega:', error);
    }
    setIdBodegaEliminar(null);
  };

  const confirmarEdicion = (bodega) => {
    setIdBodegaEditar(bodega.id_bodega);
    setBodegaEditado(bodega);
  };

  const handleCancelarEdicion = () => {
    setIdBodegaEditar(null);
  };

  const handleGuardarEdicion = async (bodega) => {
    try {
      await axios.put(`http://localhost:3001/bodegas/${bodega.id_bodega}`, bodega);
      const newData = bodegas.map(item => (item.id_bodega === bodega.id_bodega ? bodega : item));
      setBodegas(newData);
      setIdBodegaEditar(null);
    } catch (error) {
      console.error('Error editando bodega:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card" style={{ backgroundColor: '#EFEFEF' }}>
        <div className="card-body">
          <h5 className="card-title">Lista de Bodegas</h5>
          {/* Envuelve tu tabla en un div con la clase .table-responsive */}
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">Capacidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Responsable</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {bodegas.map(bodega => (
                  <BodegaRow
                    key={bodega.id_bodega}
                    bodega={bodega}
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
        show={idBodegaEliminar !== null}
        onCancel={handleCancelarEliminar}
        onConfirm={eliminarBodega}
      />

      <EditModal
        show={idBodegaEditar !== null}
        onCancel={handleCancelarEdicion}
        onSave={handleGuardarEdicion}
        bodega={bodegaEditado}
        onChange={setBodegaEditado}
        responsables={responsables}
        tiposBodegas={tiposBodegas}
      />
    </div>

  );
};

export default BodegaList;
