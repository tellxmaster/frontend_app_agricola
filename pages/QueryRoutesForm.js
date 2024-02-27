import React, { useState, useContext } from 'react';
import styles from '../styles/Home.module.css';
import { TransportContext } from '../context/TransportContext'; // Importa el contexto de tu aplicación

const QueryRouteForm = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [queryResults, setQueryResults] = useState([]);
  const { transportistas, transportes, ubicaciones } = useContext(TransportContext); // Obtiene los datos del contexto

  const handleBack = () => {
    window.location.href = '/'; // Asegúrate de que esta ruta dirija a tu página principal
  };

  const handleQuery = (e) => {
    e.preventDefault();

    // Simular resultados para la demostración
    const simulatedResults = [
      { id: '1', name: 'Ruta 1', length: '100', transporter: 'Transportista 1', transport: 'Transporte 1', location: 'Ubicación 1' },
      { id: '2', name: 'Ruta 2', length: '150', transporter: 'Transportista 2', transport: 'Transporte 2', location: 'Ubicación 2' },
    ];

    // Filtrar resultados basados en la palabra clave de búsqueda
    const filteredResults = simulatedResults.filter(result =>
      result.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    setQueryResults(filteredResults);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Consulta de Rutas</h2>
      <p className={styles.description}>
        Utiliza este formulario para buscar rutas.
      </p>
      <form onSubmit={handleQuery}>
        <div className={styles.formField}>
          <label htmlFor="searchKeyword">Buscar por Nombre:</label>
          <input
            type="text"
            id="searchKeyword"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Ingresa el nombre de la ruta"
          />
        </div>
        <div className={styles.formField}>
          <button type="submit" className={styles.button}>Buscar Rutas</button>
        </div>
      </form>
      
      {queryResults.length > 0 && (
        <table className={styles.resultsTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Longitud</th>
              <th>Transportista</th>
              <th>Transporte</th>
              <th>Ubicación</th>
            </tr>
          </thead>
          <tbody>
            {queryResults.map((result, index) => (
              <tr key={index}>
                <td>{result.id}</td>
                <td>{result.name}</td>
                <td>{result.length}</td>
                <td>{result.transporter}</td>
                <td>{result.transport}</td>
                <td>{result.location}</td>
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

export default QueryRouteForm;