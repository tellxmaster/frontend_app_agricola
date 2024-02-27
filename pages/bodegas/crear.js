import BodegaForm from '../../components/formularioBodega';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

const CrearBodegas = () => {
  return (
    <>
      <Navbar title="Formulario Bodegas" />
      <BodegaForm />
    </>
  );
};

export default CrearBodegas;