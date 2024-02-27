// RegisterLocationForm.js
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const RegisterLocationForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      id,
      name,
      latitude,
      longitude,
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Registro de Ubicación</h2>
      <p className={styles.description}>
        Este formulario permite registrar una nueva ubicación:
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor="id">ID de la Ubicación:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Ingresa el ID de la ubicación"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="name">Nombre de la Ubicación:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa el nombre de la ubicación"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="latitude">Latitud:</label>
          <input
            type="text"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Ingresa la latitud de la ubicación"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="longitude">Longitud:</label>
          <input
            type="text"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Ingresa la longitud de la ubicación"
          />
        </div>
        <div className={styles.formField}>
          <button type="submit" className={styles.button}>Registrar Ubicación</button>
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

export default RegisterLocationForm;