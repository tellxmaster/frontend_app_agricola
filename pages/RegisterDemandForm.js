// RegisterDemandForm.js
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

const RegisterDemandForm = () => {
  const [productName, setProductName] = useState('');
  const [initialQuantity, setInitialQuantity] = useState('');
  const [finalQuantity, setFinalQuantity] = useState('');
  const [initialPrice, setInitialPrice] = useState('');
  const [finalPrice, setFinalPrice] = useState('');

  const [percentageChangeInPrice, setPercentageChangeInPrice] = useState('');
  const [priceElasticityOfDemand, setPriceElasticityOfDemand] = useState('');
  const [percentageChangeInQuantity, setPercentageChangeInQuantity] = useState('');

  const handleBack = () => {
    window.location.href = '/';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calcular el cambio porcentual en el precio
    const changeInPrice = finalPrice - initialPrice;
    const percentageChange = ((changeInPrice / initialPrice) * 100).toFixed(2);
    setPercentageChangeInPrice(percentageChange);

    // Calcular el cambio porcentual en la cantidad demandada
    const changeInQuantity = finalQuantity - initialQuantity;
    const quantityPercentageChange = ((changeInQuantity / initialQuantity) * 100).toFixed(2);
    setPercentageChangeInQuantity(quantityPercentageChange);

    // Calcular la elasticidad precio de la demanda (EPD)
    const EPD = (quantityPercentageChange / percentageChange).toFixed(2);
    setPriceElasticityOfDemand(EPD);

    console.log({
      productName,
      initialQuantity,
      finalQuantity,
      initialPrice,
      finalPrice,
      percentageChangeInPrice: percentageChange,
      percentageChangeInQuantity: quantityPercentageChange,
      priceElasticityOfDemand: EPD,
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Registro de Demanda de Producto</h2>
      <p className={styles.description}>
      Este formulario permite registrar la demanda de un producto específico:
      </p>
      <p className={styles.description}>
      Calcula el cambio porcentual en el precio. Calcula el cambio porcentual en la cantidad demandada. Calcula la elasticidad de la demanda (EPD)
      </p>
      <p className={styles.description}>
      Proporciona información detallada para obtener un análisis preciso de la demanda:
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor="productName">Nombre del Producto X:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Ingresa el nombre del producto"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="initialQuantity">Cantidad demandada inicial (Q1):</label>
          <input
            type="number"
            id="initialQuantity"
            value={initialQuantity}
            onChange={(e) => setInitialQuantity(e.target.value)}
            placeholder="Especifica la cantidad vendida inicialmente"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="finalQuantity">Cantidad demandada final (Q2):</label>
          <input
            type="number"
            id="finalQuantity"
            value={finalQuantity}
            onChange={(e) => setFinalQuantity(e.target.value)}
            placeholder="Especifica la cantidad vendida final"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="initialPrice">Precio inicial del producto(P1):</label>
          <input
            type="number"
            id="initialPrice"
            value={initialPrice}
            onChange={(e) => setInitialPrice(e.target.value)}
            placeholder="Especifica el precio de venta inicial"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="finalPrice">Precio final del producto(P2):</label>
          <input
            type="number"
            id="finalPrice"
            value={finalPrice}
            onChange={(e) => setFinalPrice(e.target.value)}
            placeholder="Especifica el precio de venta final"
          />
        </div>
        <div className={styles.formField}>
          <button type="submit" className={styles.button}>Registrar Demanda</button>
        </div>
        {percentageChangeInPrice && priceElasticityOfDemand && percentageChangeInQuantity && (
          <>
            <div className={styles.formField}>
              <label>Cambio porcentual en el precio:</label>
              <input
                type="text"
                readOnly
                value={`${percentageChangeInPrice}%`}
                placeholder="Cambio porcentual en el precio"
              />
            </div>
            <div className={styles.formField}>
              <label>Cambio porcentual en la cantidad demandada:</label>
              <input
                type="text"
                readOnly
                value={`${percentageChangeInQuantity}%`}
                placeholder="Cambio porcentual en la cantidad"
              />
            </div>
            <div className={styles.formField}>
              <label>Elasticidad precio de la demanda (EPD):</label>
              <input
                type="text"
                readOnly
                value={priceElasticityOfDemand}
                placeholder="Elasticidad precio de la demanda"
              />
            </div>
          </>
        )}
        <div className={styles.formField}>
        <button onClick={handleBack} className={styles.button}>
        Regresar al Inicio
        </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterDemandForm;
