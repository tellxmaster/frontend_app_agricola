// RegisterRouteForm.js
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const RegisterRouteForm = () => {
  const [name, setName] = useState('');
  const [length, setLength] = useState('');
  const [selectedTransporter, setSelectedTransporter] = useState('');
  const [selectedTransport, setSelectedTransport] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      length,
      selectedTransporter,
      selectedTransport,
      selectedLocation,
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Registro de Ruta</h2>
      <p className={styles.description}>
        Este formulario permite registrar una nueva ruta:
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa el nombre de la ruta"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="length">Longitud (km):</label>
          <input
            type="text"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="Ingresa la longitud de la ruta en kilómetros"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="selectedTransporter">Transportista:</label>
          <select
            id="selectedTransporter"
            value={selectedTransporter}
            onChange={(e) => setSelectedTransporter(e.target.value)}
          >
            <option value="">Selecciona un transportista</option>
            {/* Aquí debes incluir opciones de transportistas registrados */}
          </select>
        </div>
        <div className={styles.formField}>
          <label htmlFor="selectedTransport">Transporte:</label>
          <select
            id="selectedTransport"
            value={selectedTransport}
            onChange={(e) => setSelectedTransport(e.target.value)}
          >
            <option value="">Selecciona un transporte</option>
            {/* Aquí debes incluir opciones de transportes registrados */}
          </select>
        </div>
        <div className={styles.formField}>
          <label htmlFor="selectedLocation">Ubicación:</label>
          <select
            id="selectedLocation"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Selecciona una ubicación</option>
            {/* Aquí debes incluir opciones de ubicaciones registradas */}
          </select>
        </div>
        <div className={styles.formField}>
          <button type="submit" className={styles.button}>Registrar Ruta</button>
        </div>
        <div className={styles.formField}>
          <button onClick={handleBack} className={styles.button}>
            Regresar al Inicio
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterRouteForm;
