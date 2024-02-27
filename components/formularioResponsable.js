import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const ResponsableForm = () => {
  const router = useRouter();
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/responsableBodegas', {
        telefono_responsable: telefono,
        correo_responsable: email
      });
      console.log(response.data);
      setTelefono('');
      setEmail('');
      router.push('/bodegas/responsables');
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="container mt-5">
      <Link href="/bodegas/responsables" passHref>
        <button className="btn btn-primary" style={{ backgroundColor: '#4542CC' }}>Volver</button>
      </Link>
      <div className="card" style={{backgroundColor : '#CFDFFF'}}>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-12">
              <label htmlFor="telofono" className="form-label">Telefono</label>
              <input
                required
                type="text"
                className="form-control"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                required
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default ResponsableForm;
