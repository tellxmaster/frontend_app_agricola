import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResponsableRow from './responsableRow';
const ResponsableList = () => {

    const [responsables, setResponsables] = useState([]);
    
    useEffect(() => {
        obtenerResponsables();
    }, []);

    const obtenerResponsables = async () => {
        try {
            const response = await axios.get('http://localhost:3001/responsableBodegas'); // Asegúrate de tener este endpoint
            setResponsables(response.data)
        } catch (error) {
            console.error('Error al obtener los responsables:', error);
        }
    };

    
    return (
        <div className="container mt-5">
            <div className="card-deck d-flex flex-wrap">
                {responsables.map(responsable => (
                    <ResponsableRow
                        key={responsable.id_responsable_bodega}
                        responsable={responsable}
                    />
                ))}
            </div>
        </div>


    );
};

export default ResponsableList;
