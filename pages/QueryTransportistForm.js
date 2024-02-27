// QueryCarrierForm.js
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const QueryCarrierForm = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [queryResults, setQueryResults] = useState([]);

  const handleBack = () => {
    window.location.href = '/'; // Asegúrate de que esta ruta dirija a tu página principal
  };

  const handleQuery = (e) => {
    e.preventDefault();

    // Simular resultados para la demostración
    const simulatedResults = [
      { id: '1', firstName: 'Juan', lastName: 'Perez', cedula: '123456789', costPerKilometer: '0.75' },
      { id: '2', firstName: 'Maria', lastName: 'Gonzalez', cedula: '987654321', costPerKilometer: '0.85' },
    ];

    // Filtrar resultados basados en la palabra clave de búsqueda
    const filteredResults = simulatedResults.filter(result =>
      result.firstName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      result.lastName.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    setQueryResults(filteredResults);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Consulta de Transportistas</h2>
      <p className={styles.description}>
        Utiliza este formulario para buscar transportistas.
      </p>
      <form onSubmit={handleQuery}>
        <div className={styles.formField}>
          <label htmlFor="searchKeyword">Buscar por Nombre o Apellido:</label>
          <input
            type="text"
            id="searchKeyword"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Ingresa el nombre o apellido del transportista"
          />
        </div>
        <div className={styles.formField}>
          <button type="submit" className={styles.button}>Buscar Transportistas</button>
        </div>
      </form>
      
      {queryResults.length > 0 && (
        <table className={styles.resultsTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cédula</th>
              <th>Costo por Kilómetro</th>
            </tr>
          </thead>
          <tbody>
            {queryResults.map((result, index) => (
              <tr key={index}>
                <td>{result.id}</td>
                <td>{result.firstName}</td>
                <td>{result.lastName}</td>
                <td>{result.cedula}</td>
                <td>{result.costPerKilometer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className={styles.formField}>
        <button onClick={handleBack} className={styles.button}>
          Regresar al Inicio
        </button>
      </div>
    </div>
  );
};

export default QueryCarrierForm;