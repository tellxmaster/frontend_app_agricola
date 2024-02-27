import React from 'react';

const TipoBodegaRow = ({ tipoBodega }) => {
    return (
        <div className="card" style={{ backgroundColor: '#FFFFFF', margin: '20px', width: '30%' }}>
            <div className="card-body">
                <p className="card-text">Tipo de bodega: {tipoBodega.tipo_bodega}</p>
            </div>
        </div>
    );
};

export default TipoBodegaRow;