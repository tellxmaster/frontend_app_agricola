import React from 'react';
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import TipoBodegaList from '../../../components/tipoBodegaList/listaTipoBodega';
const TipoBodegas = () => {
  
  return (
    <>
      <Navbar title="Tipos de bodegas" />
      <div className="container mt-5" style={{ position: 'relative', paddingTop: '1px' }}>
        <Link href="/bodegas/tiposBodega/crear" passHref>
          <a className="btn btn-primary rounded-circle" style={{
            position: 'absolute',
            top: '-30px',
            right: '15px',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            zIndex: 1000,
          }}>
            <FiPlus />
          </a>
        </Link>
        <Link href="/bodegas" passHref>
        <button className="btn btn-primary" style={{ backgroundColor: '#4542CC' }}>Volver</button>
        </Link>
        <TipoBodegaList/>
      </div>
    </>
  );
};

export default TipoBodegas;
