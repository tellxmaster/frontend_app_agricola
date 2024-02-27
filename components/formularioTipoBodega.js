import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const TipoBodegaForm = () => {
  const router = useRouter();
  const [tipo, setTipo] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/tipoBodegas', {
        tipo_bodega: tipo,
      });
      console.log(response.data);
      setTipo('');
      router.push('/bodegas/tiposBodega');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="container mt-5">
      <Link href="/bodegas/tiposBodega" passHref>
        <button className="btn btn-primary" style={{ backgroundColor: '#4542CC' }}>Volver</button>
      </Link>
      <div className="card" style={{backgroundColor : '#CFDFFF'}}>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-12">
              <label htmlFor="tipo" className="form-label">Tipo</label>
              <input
                required
                type="text"
                className="form-control"
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
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

export default TipoBodegaForm;
