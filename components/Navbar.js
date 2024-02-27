import Link from 'next/link';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ title }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#4542CC' }}>
      <div className="container-fluid text-white">
        {/* Botón para expandir/cerrar el menú de navegación */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido de la barra de navegación */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link text-white">Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/productos">
                <a className="nav-link text-white">Productos</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/proveedores">
                <a className="nav-link text-white">Proveedores</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/bodegas">
                <a className="nav-link text-white">Bodegas</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/inventario">
                <a className="nav-link text-white">Inventario</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-brand mx-auto text-white" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold', fontSize: '24px' }}>
          {title}
        </div>

        <div className="navbar-nav ms-auto" style={{ width: '5rem' }}>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
