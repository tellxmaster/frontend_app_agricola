import ProductoForm from '../../components/formularioProducto';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

const CrearProductos = () => {
  return (
    <>
      <Navbar title="Formulario Productos" />
      <ProductoForm />
    </>
  );
};

export default CrearProductos;