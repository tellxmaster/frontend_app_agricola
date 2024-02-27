import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import axios from 'axios';
import BodegaList from '../../components/bodegaList/listaBodega';

const Bodegas = () => {
  const [responsables, setResponsables] = useState([]);
  const [tiposBodegas, setTiposBodegas] = useState([]);

  useEffect(() => {
    obtenerResponsables();
    obtenerTiposBodega();
  }, []);

  const obtenerResponsables = async () => {
    try {
      const response = await axios.get('http://localhost:3001/responsableBodegas');
      setResponsables(response.data);
    } catch (error) {
      console.error('Error al obtener los responsables:', error);
    }
  };

  const obtenerTiposBodega = async () => {
    try {
      const response = await axios.get('http://localhost:3001/tipoBodegas');
      setTiposBodegas(response.data);
    } catch (error) {
      console.error('Error al obtener los tipos de bodegas:', error);
    }
  };

  return (
    <>
      <Navbar title="Bodegas" />
      <div className="container mt-5" style={{ position: 'relative', paddingTop: '1px' }}>
        <Link href="/bodegas/crear" passHref>
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
        <Link href="/bodegas/responsables" passHref>
          <button className="btn btn-primary" style={{ backgroundColor: '#4542CC' }}>Responsables de bodega</button>
        </Link>
        <Link href="/bodegas/tiposBodega" passHref>
          <button className="btn btn-primary" style={{ backgroundColor: '#4542CC', marginLeft: '15px' }}>Tipos de bodegas</button>
        </Link>


        <BodegaList responsables={responsables} tiposBodegas={tiposBodegas} />
      </div>
    </>
  );
};

export default Bodegas;
