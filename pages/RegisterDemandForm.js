import React, { useState } from 'react';

const RegisterDemandForm = () => {
  const [empresa, setEmpresa] = useState('');
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState(400);
  const [direccionEntrega, setDireccionEntrega] = useState('');
  const [precioOfertado, setPrecioOfertado] = useState('');
  const [total, setTotal] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar los datos del formulario
    console.log("Formulario enviado", { empresa, producto, cantidad, direccionEntrega, precioOfertado, total, observaciones });
  };

  const handleReset = () => {
    // Restablecer los valores del formulario a sus valores por defecto o vacíos
    setEmpresa('');
    setProducto('');
    setCantidad(400);
    setDireccionEntrega('');
    setPrecioOfertado('');
    setTotal('');
    setObservaciones('');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-primary shadow">
            <div className="card-header bg-primary text-white text-center">
              <h2>Formulario de Demanda</h2>
              <h3>Módulo de Demanda de Productos</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* Columna 1 */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="empresa" className="form-label">Empresa</label>
                      <input type="text" className="form-control" id="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)}  />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cantidad" className="form-label">Cantidad</label>
                      <input type="number" className="form-control" id="cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="precioOfertado" className="form-label">Precio Ofertado</label>
                      <input type="number" className="form-control" id="precioOfertado" value={precioOfertado} onChange={(e) => setPrecioOfertado(e.target.value)} />
                    </div>
                  </div>
                  {/* Columna 2 */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="producto" className="form-label">Producto</label>
                      <select className="form-select" id="producto" value={producto} onChange={(e) => setProducto(e.target.value)}>
                        <option value="">Selecciona un producto</option>
                        <option value="Producto1">Producto 1</option>
                        <option value="Producto2">Producto 2</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="direccionEntrega" className="form-label">Dirección de Entrega</label>
                      <input type="text" className="form-control" id="direccionEntrega" value={direccionEntrega} onChange={(e) => setDireccionEntrega(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="total" className="form-label">Total</label>
                      <input type="text" className="form-control" id="total" value={total} readOnly />
                    </div>
                  </div>
                </div>
                {/* Observaciones */}
                <div className="mb-3">
                  <label htmlFor="observaciones" className="form-label">Observaciones</label>
                  <textarea className="form-control" id="observaciones" rows="3" value={observaciones} onChange={(e) => setObservaciones(e.target.value)}></textarea>
                </div>
                {/* Botones */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Enviar Formulario</button>
                  <button type="button" className="btn btn-primary mx-2" onClick={handleReset}>Limpiar Formulario</button>
                  <button type="button" className="btn btn-secondary mx-2" onClick={handleBack}>Regresar al inicio</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterDemandForm;
