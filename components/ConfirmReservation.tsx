import React from 'react';
import { useState } from 'react';

export default function ConfirmReservation() {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('');

  const handleConfirm = () => {
    const phoneNumber = '+15592837305'; // Número de WhatsApp
    const message = encodeURIComponent(
      `¡Hola! La familia ${name} confirma su asistencia a la boda de Andrea y José con ${guests} invitados.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank'); // Abre el enlace en una nueva pestaña
  };

  const isFormValid = name.trim() !== '' && guests.trim() !== '';

  return (
    <div>
      <h2 className='text-4xl sm:text-5xl font-serif mb-4 texto'>
        Confirma tu reservación
      </h2>
      <div className='space-y-4'>
        <input
          type='text'
          placeholder='Tu nombre'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='number'
          placeholder='Número de invitados'
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          onClick={handleConfirm}
          disabled={!isFormValid}
          className={`w-full py-3 rounded-lg transition-all ${
            isFormValid
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Confirmar asistencia
        </button>
      </div>
    </div>
  );
}
