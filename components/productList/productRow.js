import React from 'react';

const ProductRow = ({ producto, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{producto.nombre_producto}</td>
      <td>{producto.descripcion_producto}</td>
      <td>${producto.Precio_unitario}</td>
      <td>{producto.Proveedor ? producto.Proveedor.nombre_proveedor : '-'}</td>
      <td>
        <button className="btn btn-primary btn-sm m-1" style={{ backgroundColor: '#4542CC' }} onClick={() => onEdit(producto)}>Editar</button>
        <button onClick={() => onDelete(producto.id_producto)} className="btn btn-danger btn-sm m-1">Eliminar</button>
      </td>
    </tr>
  );
};

export default ProductRow;