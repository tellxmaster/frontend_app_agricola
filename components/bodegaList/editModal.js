import React from 'react';

const EditModal = ({ show, onCancel, onSave, bodega, onChange, responsables, tiposBodegas }) => {
  if (!show) return null;

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Bodega</h5>
            <button type="button" className="close" onClick={onCancel}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="nombreBodega">Nombre:</label>
                <input type="text" className="form-control" id="nombreBodega" value={bodega.nombre_bodega} onChange={(e) => onChange({ ...bodega, nombre_bodega: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="direccionBodega">Direccion:</label>
                <input type="text" className="form-control" id="direccionBodega" value={bodega.direccion_bodega} onChange={(e) => onChange({ ...bodega, direccion_bodega: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="capacidadBodega">Capacidad:</label>
                <input type="text" className="form-control" id="capacidadBodega" value={bodega.capacidad_bodega} onChange={(e) => onChange({ ...bodega, capacidad_bodega: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="precioBodega">Precio:</label>
                <input type="text" className="form-control" id="precioBodega" value={bodega.precio_bodega} onChange={(e) => onChange({ ...bodega, precio_bodega: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="responsableBodega">Responsable:</label>
                <select className="form-control" id="responsableBodega" value={bodega.id_responsable_bodega} onChange={(e) => onChange({ ...bodega, id_responsable_bodega: e.target.value })}>
                  <option value="">Selecciona un respoable</option>
                  {responsables.map(responsable => (
                    <option key={responsable.id_responsable_bodega} value={responsable.id_responsable_bodega}>{responsable.correo_responsable}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="tiposBodega">Tipo de bodega:</label>
                <select className="form-control" id="tiposBodega" value={bodega.id_tipo_bodega} onChange={(e) => onChange({ ...bodega, id_tipo_bodega: e.target.value })}>
                  <option value="">Selecciona el tipo de bodega</option>
                  {tiposBodegas.map(tiposBodega => (
                    <option key={tiposBodega.id_tipo_bodega} value={tiposBodega.id_tipo_bodega}>{tiposBodega.tipo_bodega}</option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={() => onSave(bodega)}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

