import React from 'react';

const BodegaRow = ({ bodega, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{bodega.nombre_bodega}</td>
      <td>{bodega.direccion_bodega}</td>
      <td>{bodega.capacidad_bodega}</td>
      <td>${bodega.precio_bodega}</td>
      <td>{bodega.ResponsableBodega ? bodega.ResponsableBodega.correo_responsable : '-'}</td>
      <td>{bodega.TipoBodega ? bodega.TipoBodega.tipo_bodega : '-'}</td>
      <td>
        <button onClick={() => onEdit(bodega)} className="btn btn-primary btn-sm m-1" style={{ backgroundColor: '#4542CC' }} >Editar</button>
        <button onClick={() => onDelete(bodega.id_bodega)} className="btn btn-danger btn-sm m-1">Eliminar</button>
      </td>
    </tr>
  );
};

export default BodegaRow;