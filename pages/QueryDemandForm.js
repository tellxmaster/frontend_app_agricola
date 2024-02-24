// QueryDemandForm.js
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const QueryDemandForm = () => {
  const [productName, setProductName] = useState('');
  const [percentagePriceChangeRange, setPercentagePriceChangeRange] = useState('');
  const [percentageQuantityChangeRange, setPercentageQuantityChangeRange] = useState('');
  const [queryResults, setQueryResults] = useState([]);

  const handleBack = () => {
    window.location.href = '/'; // Asegúrate de que esta ruta dirija a tu página principal
  };

  const handleQuery = (e) => {
    e.preventDefault();

    // Simulando resultados para la demostración
    const simulatedResults = [
      { productName: 'Producto X', initialPrice: 30, finalPrice: 25, initialQuantity: 200, finalQuantity: 250, EPD: '-1.5' },
      { productName: 'Producto Y', initialPrice: 5, finalPrice: 4, initialQuantity: 100, finalQuantity: 130, EPD: '-1.5' },
    ];

    // Descomponer los rangos de cambio porcentual en precio y cantidad
    const [minPercentagePriceChange, maxPercentagePriceChange] = percentagePriceChangeRange.split('-').map(Number);
    const [minPercentageQuantityChange, maxPercentageQuantityChange] = percentageQuantityChangeRange.split('-').map(Number);

    // Filtrar resultados basados en los criterios de búsqueda
    const filteredResults = simulatedResults.filter(result => {
      const priceChange = ((result.finalPrice - result.initialPrice) / result.initialPrice) * 100;
      const quantityChange = ((result.finalQuantity - result.initialQuantity) / result.initialQuantity) * 100;

      const matchesProductName = productName ? result.productName.includes(productName) : true;
      const matchesPriceChangeRange = percentagePriceChangeRange ? (priceChange >= minPercentagePriceChange && priceChange <= maxPercentagePriceChange) : true;
      const matchesQuantityChangeRange = percentageQuantityChangeRange ? (quantityChange >= minPercentageQuantityChange && quantityChange <= maxPercentageQuantityChange) : true;

      return matchesProductName && matchesPriceChangeRange && matchesQuantityChangeRange;
    });

    setQueryResults(filteredResults);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Consulta de Análisis de Demanda</h2>
      <p className={styles.description}>
        Utiliza este formulario para buscar análisis de demanda.
      </p>
      <p className={styles.description}>
      Los resultados incluirán la elasticidad precio de la demanda (EPD).
      </p>
      <form onSubmit={handleQuery}>
        <div className={styles.formField}>
          <label htmlFor="productName">Nombre del Producto:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Buscar por nombre de producto"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="percentagePriceChangeRange">Rango de Cambio Porcentual en el Precio:</label>
          <input
            type="text"
            id="percentagePriceChangeRange"
            value={percentagePriceChangeRange}
            onChange={(e) => setPercentagePriceChangeRange(e.target.value)}
            placeholder="Ej. -20-0"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="percentageQuantityChangeRange">Rango de Cambio Porcentual en la Cantidad:</label>
          <input
            type="text"
            id="percentageQuantityChangeRange"
            value={percentageQuantityChangeRange}
            onChange={(e) => setPercentageQuantityChangeRange(e.target.value)}
            placeholder="Ej. 5-15"
          />
        </div>
        <div className={styles.formField}>
          <button type="submit" className={styles.button}>Consultar Análisis de Demanda</button>
        </div>
      </form>
      
      {queryResults.length > 0 && (
        <table className={styles.resultsTable}>
          <thead>
            <tr>
              <th>Nombre del Producto</th>
              <th>Cambio Porcentual en el Precio</th>
              <th>Cambio Porcentual en la Cantidad</th>
              <th>Elasticidad Precio de la Demanda (EPD)</th>
            </tr>
          </thead>
          <tbody>
            {queryResults.map((result, index) => {
              const priceChange = ((result.finalPrice - result.initialPrice) / result.initialPrice * 100).toFixed(2);
              const quantityChange = ((result.finalQuantity - result.initialQuantity) / result.initialQuantity * 100).toFixed(2);
              return (
                <tr key={index}>
                  <td>{result.productName}</td>
                  <td>{priceChange}%</td>
                  <td>{quantityChange}%</td>
                  <td>{result.EPD}</td>
                </tr>
              );
            })}
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

export default QueryDemandForm;