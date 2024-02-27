import React from 'react';

const EditModal = ({ show, onCancel, onSave, producto, onChange, proveedores }) => {
  if (!show) return null;

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Producto</h5>
            <button type="button" className="close" onClick={onCancel}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="nombreProducto">Nombre:</label>
                <input type="text" className="form-control" id="nombreProducto" value={producto.nombre_producto} onChange={(e) => onChange({ ...producto, nombre_producto: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="descripcionProducto">Descripción:</label>
                <input type="text" className="form-control" id="descripcionProducto" value={producto.descripcion_producto} onChange={(e) => onChange({ ...producto, descripcion_producto: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="precioProducto">Precio:</label>
                <input type="text" className="form-control" id="precioProducto" value={producto.Precio_unitario} onChange={(e) => onChange({ ...producto, Precio_unitario: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="proveedorProducto">Proveedor:</label>
                <select className="form-control" id="proveedorProducto" value={producto.id_proveedor} onChange={(e) => onChange({ ...producto, id_proveedor: e.target.value })}>
                  <option value="">Selecciona un proveedor</option>
                  {proveedores.map(proveedor => (
                    <option key={proveedor.id_proveedor} value={proveedor.id_proveedor}>{proveedor.nombre_proveedor}</option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={() => onSave(producto)}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;

