import React from 'react';

const Alerta = ({ mensajes, tipo }) => {
  // Si no hay mensajes, no renderiza nada
  if (!mensajes || mensajes.length === 0) return null;

  // Clases de Materialize para los colores (rojo para error, verde para éxito)
  const colorClase = tipo === 'error' ? 'red darken-1' : 'green darken-1';

  return (
    <div className={`card-panel ${colorClase} white-text`} style={{ padding: '10px', borderRadius: '5px' }}>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        {mensajes.map((msg, index) => (
          <li key={index} style={{ listStyleType: 'disc' }}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Alerta;