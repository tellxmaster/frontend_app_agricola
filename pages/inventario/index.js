import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import axios from 'axios';
import InventarioList from '../../components/inventarioList/listaInventario';

const Inventarios = () => {
  const [productos, setProductos] = useState([]);
  const [bodegas, setBodegas] = useState([]);

  useEffect(() => {
    obtenerProductos();
    obtenerBodegas();
  }, []);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener los responsables:', error);
    }
  };

  const obtenerBodegas = async () => {
    try {
      const response = await axios.get('http://localhost:3001/bodegas');
      setBodegas(response.data);
    } catch (error) {
      console.error('Error al obtener los tipos de Inventarios:', error);
    }
  };

  const reporteInventario = async () => {
    try {
      const response = await axios.get('http://localhost:3001/reporte', {
        responseType: 'blob', 
      });
  
      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      const fileLink = document.createElement('a');
      fileLink.href = fileURL;
      fileLink.setAttribute('download', 'reporte_inventario.pdf');
      document.body.appendChild(fileLink);
      fileLink.click();
  
      fileLink.remove();
    } catch (error) {
      console.error('Error al descargar el reporte:', error);
    }
  };
  

  return (
    <>
      <Navbar title="Inventarios" />
      <div className="container mt-5" style={{ position: 'relative', paddingTop: '1px' }}>
        <Link href="/inventario/crear" passHref>
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

        <button className="btn btn-primary" style={{ backgroundColor: '#4542CC' }} onClick={reporteInventario}>Reporte de inventario (descargar pdf)</button>
        <InventarioList productos={productos} bodegas={bodegas} />
      </div>
    </>
  );
};

export default Inventarios;
