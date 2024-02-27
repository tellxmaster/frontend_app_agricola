import ProveedorForm from '../../components/formularioProveedor';;
import Navbar from '../../components/Navbar';
import Link from 'next/link';

const CrearProveedor = () => {
  return (
    <>
      <Navbar title="Formulario Proveedor" />
      <ProveedorForm />
    </>
  );
};

export default CrearProveedor;