// RegisterTransportForm.js
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const RegisterTransportForm = () => {
  const [year, setYear] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [engine, setEngine] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      year,
      licensePlate,
      model,
      brand,
      color,
      engine,
      capacity,
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Registro de Transporte</h2>
      <p className={styles.description}>
        Este formulario permite registrar un nuevo transporte:
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor="year">Año:</label>
          <input
            type="text"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Ingresa el año del transporte"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="licensePlate">Placa:</label>
          <input
            type="text"
            id="licensePlate"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            placeholder="Ingresa la placa del transporte"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="model">Modelo:</label>
          <input
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Ingresa el modelo del transporte"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="brand">Marca:</label>
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Ingresa la marca del transporte"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Ingresa el color del transporte"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="engine">Motor:</label>
          <input
            type="text"
            id="engine"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
            placeholder="Ingresa el tipo de motor del transporte"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="capacity">Capacidad (kg):</label>
          <input
            type="text"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="Ingresa la capacidad en kilogramos del transporte"
          />
        </div>
        <div className={styles.formField}>
          <button type="submit" className={styles.button}>Registrar Transporte</button>
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

export default RegisterTransportForm;
