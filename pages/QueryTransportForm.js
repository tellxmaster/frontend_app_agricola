// QueryTransportForm.js
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const QueryTransportForm = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [queryResults, setQueryResults] = useState([]);

  const handleBack = () => {
    window.location.href = '/'; // Asegúrate de que esta ruta dirija a tu página principal
  };

  const handleQuery = (e) => {
    e.preventDefault();

    // Simular resultados para la demostración
    const simulatedResults = [
      { year: '2022', licensePlate: 'ABC123', model: 'Modelo X', brand: 'Marca A', color: 'Rojo', engine: 'Motor 1.6L', capacity: '1000' },
      { year: '2020', licensePlate: 'XYZ789', model: 'Modelo Y', brand: 'Marca B', color: 'Azul', engine: 'Motor 2.0L', capacity: '1500' },
    ];

    // Filtrar resultados basados en la palabra clave de búsqueda
    const filteredResults = simulatedResults.filter(result =>
      result.brand.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      result.model.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    setQueryResults(filteredResults);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Consulta de Transportes</h2>
      <p className={styles.description}>
        Utiliza este formulario para buscar transportes.
      </p>
      <form onSubmit={handleQuery}>
        <div className={styles.formField}>
          <label htmlFor="searchKeyword">Buscar por Marca o Modelo:</label>
          <input
            type="text"
            id="searchKeyword"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Ingresa la marca o modelo del transporte"
          />
        </div>
        <div className={styles.formField}>
          <button type="submit" className={styles.button}>Buscar Transportes</button>
        </div>
      </form>
      
      {queryResults.length > 0 && (
        <table className={styles.resultsTable}>
          <thead>
            <tr>
              <th>Año</th>
              <th>Placa</th>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Color</th>
              <th>Motor</th>
              <th>Capacidad (kg)</th>
            </tr>
          </thead>
          <tbody>
            {queryResults.map((result, index) => (
              <tr key={index}>
                <td>{result.year}</td>
                <td>{result.licensePlate}</td>
                <td>{result.model}</td>
                <td>{result.brand}</td>
                <td>{result.color}</td>
                <td>{result.engine}</td>
                <td>{result.capacity}</td>
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

export default QueryTransportForm;