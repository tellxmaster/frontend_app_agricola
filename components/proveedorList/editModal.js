import React from 'react';

const EditModal = ({ show, onCancel, onSave, proveedor, onChange }) => {
  if (!show) return null;

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Proveedor</h5>
            <button type="button" className="close" onClick={onCancel}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="nombreProveedor">Nombre:</label>
                <input type="text" className="form-control" id="nombreProveedor" value={proveedor.nombre_proveedor} onChange={(e) => onChange({ ...proveedor, nombre_proveedor: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="direccionProveedor">Direccion:</label>
                <input type="text" className="form-control" id="direccionProveedor" value={proveedor.direccion_proveedor} onChange={(e) => onChange({ ...proveedor, direccion_proveedor: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="telefonoProveedor">Telefono:</label>
                <input type="text" className="form-control" id="telefonoProveedor" value={proveedor.telefono_proveedor} onChange={(e) => onChange({ ...proveedor, telefono_proveedor: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="emailProveedor">Email:</label>
                <input type="text" className="form-control" id="emailProveedor" value={proveedor.email_proveedor} onChange={(e) => onChange({ ...proveedor, email_proveedor: e.target.value })} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={() => onSave(proveedor)}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

