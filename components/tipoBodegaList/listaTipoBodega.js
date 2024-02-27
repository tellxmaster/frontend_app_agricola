import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TipoBodegaRow from './tipoBodegaRow';
const TipoBodegaList = () => {

    const [tipoBodegas, setTipoBodegas] = useState([]);

    useEffect(() => {
        obtenerTipoBodegas();
    }, []);

    const obtenerTipoBodegas = async () => {
        try {
            const response = await axios.get('http://localhost:3001/tipoBodegas'); // Asegúrate de tener este endpoint
            setTipoBodegas(response.data)
        } catch (error) {
            console.error('Error al obtener los tipo de bodegas:', error);
        }
    };

    
    return (
        <div className="container mt-5">
            <div className="card-deck d-flex flex-wrap">
                {tipoBodegas.map(tipoBodega => (
                    <TipoBodegaRow
                        key={tipoBodega.id_tipo_bodega}
                        tipoBodega={tipoBodega}
                    />
                ))}
            </div>
        </div>


    );
};

export default TipoBodegaList;
