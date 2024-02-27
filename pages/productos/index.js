import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import ProductList from "../../components/productList/listaProducto";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import axios from 'axios';

const Productos = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    obtenerProveedores();
  }, []);

  const obtenerProveedores = async () => {
    try {
      const response = await axios.get('http://localhost:3001/proveedores');
      setProveedores(response.data);
    } catch (error) {
      console.error('Error al obtener los proveedores:', error);
    }
  };

  return (
    <>
      <Navbar title="Productos" />
      <div className="container mt-5" style={{ position: 'relative', paddingTop: '1px' }}>
        <Link href="/productos/crear" passHref>
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
        <ProductList proveedores={proveedores} />
      </div>
    </>
  );
};

export default Productos;
