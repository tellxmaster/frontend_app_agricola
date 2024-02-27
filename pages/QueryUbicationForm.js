// QueryLocationForm.js
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const QueryLocationForm = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [queryResults, setQueryResults] = useState([]);

  const handleBack = () => {
    window.location.href = '/'; // Asegúrate de que esta ruta dirija a tu página principal
  };

  const handleQuery = (e) => {
    e.preventDefault();

    // Simular resultados para la demostración
    const simulatedResults = [
      { id: '1', name: 'Ubicación 1', latitude: '40.7128', longitude: '-74.0060' },
      { id: '2', name: 'Ubicación 2', latitude: '34.0522', longitude: '-118.2437' },
    ];

    // Filtrar resultados basados en la palabra clave de búsqueda
    const filteredResults = simulatedResults.filter(result =>
      result.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    setQueryResults(filteredResults);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Consulta de Ubicaciones</h2>
      <p className={styles.description}>
        Utiliza este formulario para buscar ubicaciones.
      </p>
      <form onSubmit={handleQuery}>
        <div className={styles.formField}>
          <label htmlFor="searchKeyword">Buscar por Nombre:</label>
          <input
            type="text"
            id="searchKeyword"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Ingresa el nombre de la ubicación"
          />
        </div>
        <div className={styles.formField}>
          <button type="submit" className={styles.button}>Buscar Ubicaciones</button>
        </div>
      </form>
      
      {queryResults.length > 0 && (
        <table className={styles.resultsTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Latitud</th>
              <th>Longitud</th>
            </tr>
          </thead>
          <tbody>
            {queryResults.map((result, index) => (
              <tr key={index}>
                <td>{result.id}</td>
                <td>{result.name}</td>
                <td>{result.latitude}</td>
                <td>{result.longitude}</td>
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

export default QueryLocationForm;