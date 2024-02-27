
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <>
      <Navbar title="Inicio" />
      <div className='container mt-5 d-flex justify-content-center align-items-center'>
        <div className='card'>
          <div class="card-body text-center">
            <h5 class="card-title">Bienvenidos al sistema de gestión de producción</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;