import React from 'react';

const ProveedorRow = ({ proveedor, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{proveedor.nombre_proveedor}</td>
      <td>{proveedor.direccion_proveedor}</td>
      <td>{proveedor.telefono_proveedor}</td>
      <td>{proveedor.email_proveedor}</td>
      <td>
        <button className="btn btn-primary btn-sm m-1" style={{ backgroundColor: '#4542CC' }} onClick={() => onEdit(proveedor)}>Editar</button>
        <button onClick={() => onDelete(proveedor.id_proveedor)} className="btn btn-danger btn-sm m-1">Eliminar</button>
      </td>
    </tr>
  );
};

export default ProveedorRow;