import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
const BodegaForm = () => {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [capacidad, setCapacidad] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [responsableId, setResponsableId] = useState('');
  const [responsables, setResponsables] = useState([]);
  const [tiposBodegaId, setTiposBodegaId] = useState('');
  const [tiposBodegas, setTiposBodegas] = useState([]);

  useEffect(() => {
    obtenerResponsables();
    obtenerTiposBodega();
  }, []);

  const obtenerResponsables = async () => {
    try {
      const response = await axios.get('http://localhost:3001/responsableBodegas');
      setResponsables(response.data);
    } catch (error) {
      console.error('Error al obtener los responsables:', error);
    }
  };

  const obtenerTiposBodega = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tipoBodegas');
      setTiposBodegas(response.data);
    } catch (error) {
      console.error('Error al obtener los tipos de bodegas:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/bodegas', {
        nombre_bodega: nombre,
        direccion_bodega: direccion,
        capacidad_bodega: capacidad,
        precio_bodega: precio,
        id_responsable_bodega: responsableId,
        id_tipo_bodega: tiposBodegaId
      });
      console.log(response.data);
      setNombre('');
      setDireccion('');
      setCapacidad(0);
      setPrecio(0);
      setResponsableId('');
      setTiposBodegaId('');
      router.push('/bodegas');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className='d-grid gap-1 d-md-block'>
        <Link href="/bodegas" passHref>
          <button className="btn btn-primary mb-5" style={{ backgroundColor: '#4542CC' }}>Volver</button>
        </Link>
      </div>
      <div className="card" style={{ backgroundColor: '#CFDFFF' }}>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-12">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                required
                type="text"
                className="form-control"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="direccion" className="form-label">Direeccion</label>
              <input
                required
                type="text"
                className="form-control"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="capacidad" className="form-label">Capacidad</label>
              <input
                required
                type="number"
                className="form-control"
                id="capacidad"
                value={capacidad}
                onChange={(e) => setCapacidad(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="precio" className="form-label">Precio</label>
              <input
                required
                type="number"
                className="form-control"
                id="precio"
                value={precio}
                onChange={(e) => setPrecio(parseFloat(e.target.value))}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="responsableId" className="form-label">Responsable</label>
              <select
                required
                className="form-select"
                id="responsableId"
                value={responsableId}
                onChange={(e) => setResponsableId(e.target.value)}
              >
                <option value="">Selecciona un responsable</option>
                {responsables.map((responsable) => (
                  <option key={responsable.id_responsable_bodega} value={responsable.id_responsable_bodega}>
                    {responsable.correo_responsable}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="tiposBodegaId" className="form-label">Tipos de bodega</label>
              <select
                required
                className="form-select"
                id="tiposBodegaId"
                value={tiposBodegaId}
                onChange={(e) => setTiposBodegaId(e.target.value)}
              >
                <option value="">Selecciona un tipo de bodega</option>
                {tiposBodegas.map((tiposBodega) => (
                  <option key={tiposBodega.id_tipo_bodega} value={tiposBodega.id_tipo_bodega}>
                    {tiposBodega.tipo_bodega}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn text-white" style={{ backgroundColor: '#4542CC' }}>Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BodegaForm;
