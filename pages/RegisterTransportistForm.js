// RegisterCarrierForm.js
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const RegisterCarrierForm = () => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cedula, setCedula] = useState('');
  const [costPerKilometer, setCostPerKilometer] = useState('');

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      id,
      firstName,
      lastName,
      cedula,
      costPerKilometer,
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Registro de Transportista</h2>
      <p className={styles.description}>
        Este formulario permite registrar un nuevo transportista:
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor="id">ID del Transportista:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Ingresa el ID del transportista"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Ingresa el nombre del transportista"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Ingresa el apellido del transportista"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="cedula">Cédula:</label>
          <input
            type="text"
            id="cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            placeholder="Ingresa la cédula del transportista"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="costPerKilometer">Costo por Kilómetro:</label>
          <input
            type="number"
            id="costPerKilometer"
            value={costPerKilometer}
            onChange={(e) => setCostPerKilometer(e.target.value)}
            placeholder="Ingresa el costo por kilómetro"
          />
        </div>
        <div className={styles.formField}>
          <button type="submit" className={styles.button}>Registrar Transportista</button>
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

export default RegisterCarrierForm;