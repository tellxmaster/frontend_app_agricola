import Navbar from '../../components/Navbar';
import Link from 'next/link';
import InventarioForm from '../../components/formularioInventario';

const CrearInventario = () => {
  return (
    <>
      <Navbar title="Formulario Inventario" />
      <InventarioForm />
    </>
  );
};

export default CrearInventario;