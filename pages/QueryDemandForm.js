import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; // Asegúrate de tener instalado `react-bootstrap`

// Datos de ejemplo actualizados con información completa
const demandData = [
  { id: 1, fecha: '2024-02-27', empresa: 'Empresa A', producto: 'Producto 1', cantidad: 100, direccionEntrega: 'Calle Falsa 123', observaciones: 'Ninguna', precioOfertado: '$100' },
  { id: 2, fecha: '2024-02-28', empresa: 'Empresa B', producto: 'Producto 2', cantidad: 200, direccionEntrega: 'Avenida Siempre Viva 742', observaciones: 'Entregar por la tarde', precioOfertado: '$200' },
  { id: 3, fecha: '2024-03-01', empresa: 'Empresa C', producto: 'Producto 3', cantidad: 300, direccionEntrega: 'Plaza Central 456', observaciones: 'Confirmar un día antes', precioOfertado: '$300' },
  { id: 4, fecha: '2024-01-01', empresa: 'Empresa D', producto: 'Producto 4', cantidad: 400, direccionEntrega: 'Patio Central ', observaciones: 'Confirmar un día despues', precioOfertado: '$400' },
  { id: 5, fecha: '2024-01-01', empresa: 'Empresa D', producto: 'Producto 4', cantidad: 400, direccionEntrega: 'Patio Central ', observaciones: 'Confirmar un día despues', precioOfertado: '$400' },
];

const QueryDemandForm = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

const handleBack = () => {
  window.location.href = '/';
  };

  return (
    <div className="container py-5">
      <div className="card border-primary shadow">
      <div className="card-header bg-primary text-white text-center">
              <h2>Listado de Registros</h2>
              <h3>Módulo de Demanda de Productos</h3>
      </div>
      <div className="row">
        {demandData.map((data) => (
          <div key={data.id} className="col-sm-6 col-md-4 col-lg-3 mb-4" onClick={() => handleCardClick(data)}>
            <div className="card cursor-pointer">
              <div className="card-body btn ">
                <h5 className="card-title">Registro #{data.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Fecha: {data.fecha}</h6>
                <p className="card-text">Empresa: {data.empresa}</p>
                <p className="card-text">Producto: {data.producto}</p>
                <p className="card-text">Cantidad: {data.cantidad}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
          <button type="button" className="btn btn-secondary mx-2" onClick={handleBack}>Regresar al inicio</button>
        </div>
      </div>
      
  
      {/* Modal para mostrar los detalles */}
      {selectedData && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles del Registro #{selectedData.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Fecha: {selectedData.fecha}</p>
            <p>Empresa: {selectedData.empresa}</p>
            <p>Producto: {selectedData.producto}</p>
            <p>Cantidad: {selectedData.cantidad}</p>
            <p>Dirección de Entrega: {selectedData.direccionEntrega}</p>
            <p>Observaciones: {selectedData.observaciones}</p>
            <p>Precio Ofertado: {selectedData.precioOfertado}</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => setShowModal(false)} className="btn btn-secondary">
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default QueryDemandForm;
