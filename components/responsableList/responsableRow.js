import React from 'react';

const ResponsableRow = ({ responsable }) => {
    return (
        <div className="card" style={{ backgroundColor: '#FFFFFF', margin: '20px', width: '30%' }}>
            <div className="card-body">
                <p className="card-text">Teléfono: {responsable.telefono_responsable}</p>
                <p className="card-text">Correo: {responsable.correo_responsable}</p>
            </div>
        </div>
    );
};

export default ResponsableRow;