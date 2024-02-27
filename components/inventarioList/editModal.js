import React from 'react';

const EditModal = ({ show, onCancel, onSave, inventario, onChange, productos, bodegas }) => {
  if (!show) return null;

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Inventario</h5>
            <button type="button" className="close" onClick={onCancel}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>

            <div className="form-group">
                <label htmlFor="producto">Producto:</label>
                <select className="form-control" id="producto" value={inventario.id_producto} onChange={(e) => onChange({ ...inventario, id_producto: e.target.value })}>
                  <option value="">Selecciona un producto</option>
                  {productos.map(producto => (
                    <option key={producto.id_producto} value={producto.id_producto}>{producto.nombre_producto}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="bodega">Bodega:</label>
                <select className="form-control" id="bodega" value={inventario.id_bodega} onChange={(e) => onChange({ ...inventario, id_bodega: e.target.value })}>
                  <option value="">Selecciona el tipo de bodega</option>
                  {bodegas.map(bodega => (
                    <option key={bodega.id_bodega} value={bodega.id_bodega}>{bodega.nombre_bodega}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="Stock">Stock:</label>
                <input type="text" className="form-control" id="Stock" value={inventario.stock} onChange={(e) => onChange({ ...inventario, stock: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="ubicaciónBodega">Ubicación:</label>
                <input type="text" className="form-control" id="ubicaciónBodega" value={inventario.ubicacion_en_bodega} onChange={(e) => onChange({ ...inventario,ubicacion_en_bodega : e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="fechaEntrada">Fecha Entrada:</label>
                <input type="text" className="form-control" id="fechaEntrada" value={inventario.fecha_entrada} onChange={(e) => onChange({ ...inventario, fecha_entrada: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="fechaCaducidad">Fecha Caducidad:</label>
                <input type="text" className="form-control" id="fechaCaducidad" value={inventario.fecha_caducidad} onChange={(e) => onChange({ ...inventario, fecha_caducidad: e.target.value })} />
              </div>
              
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={() => onSave(inventario)}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
