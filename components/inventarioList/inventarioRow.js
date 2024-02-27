import React from 'react';

const InventarioRow = ({ inventario, onEdit, onDelete }) => {


  

  return (
    <tr>
      <td>{inventario.Producto ? inventario.Producto.nombre_producto : '-'}</td>
      <td>{inventario.Bodega ? inventario.Bodega.nombre_bodega : '-'}</td>
      <td>{inventario.stock}</td>
      <td>{inventario.ubicacion_en_bodega}</td>
      <td>{inventario.fecha_entrada}</td>
      <td>{inventario.fecha_caducidad}</td>
      <td>
        <button onClick={() => onEdit(inventario)} className="btn btn-primary btn-sm m-1" style={{ backgroundColor: '#4542CC' }} >Editar</button>
        <button onClick={() => onDelete(inventario.id_inventario)} className="btn btn-danger btn-sm m-1">Eliminar</button>
      </td>
    </tr>
  );
};

export default InventarioRow;