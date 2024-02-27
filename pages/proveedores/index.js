
import Navbar from '../../components/Navbar';
import ProveedorList from "../../components/proveedorList/listaProveedor";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
const Proveedores = () => {
  return (
    <>
      <Navbar title="Proveedores" />
      <div className="container mt-5" style={{ position: 'relative', paddingTop: '1px' }}>
        {/* Botón colocado en la esquina superior derecha del contenedor */}
        <Link href="/proveedores/crear" passHref>
          <a className="btn btn-primary rounded-circle" style={{
            position: 'absolute',
            top: '-30px', // Ajusta este valor según sea necesario para colocarlo en el medio del Navbar y la lista
            right: '15px',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            zIndex: 1000, // Asegura que el botón se muestre sobre otros elementos si es necesario
          }}>
            {/* Puedes usar texto o un ícono */}
            <FiPlus />
          </a>
        </Link>
        <ProveedorList/>
      </div>
    </>
  );
};

export default Proveedores;