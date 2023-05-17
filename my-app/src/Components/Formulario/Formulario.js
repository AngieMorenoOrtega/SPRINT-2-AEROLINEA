import React, { useState } from 'react';
import './Formulario.scss'
const FormularioViaje = () => {
  const [tipoViaje, setTipoViaje] = useState('');

  const handleViajeRedondo = () => {
    setTipoViaje('redondo');
  };

  const handleViajeSencillo = () => {
    setTipoViaje('sencillo');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier acción con el tipo de viaje seleccionado
    console.log('Tipo de Viaje:', tipoViaje);
  };

  return (
    <div className='traveloption'>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={handleViajeRedondo}>Viaje Redondo</button>
        <button type="button" onClick={handleViajeSencillo}>Viaje Sencillo</button>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioViaje;
