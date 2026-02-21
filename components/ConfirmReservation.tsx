import React from 'react';
import { useState } from 'react';

export default function ConfirmReservation() {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('');

  const handleConfirm = () => {
    const phoneNumber = '+18307081047';
    const message = encodeURIComponent(
      `¡Hola! La familia ${name} confirma su asistencia a la boda de Valeria y José con ${guests} invitados.`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const isFormValid = name.trim() !== '' && guests.trim() !== '';

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h2 className='text-4xl sm:text-5xl mb-8 text-center dancing-script-text text-black'>
        Confirma tu reservación
      </h2>
      
      <div className='space-y-6 flex flex-col items-center'>
        <div className="w-full space-y-4">
          <input
            type='text'
            placeholder='Tu nombre'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-3 bg-transparent border-b-2 border-black focus:border-gray-600 outline-none transition-colors text-center text-lg placeholder:text-gray-400 text-black'
          />
          
          <input
            type='number'
            placeholder='Número de invitados'
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className='w-full p-3 bg-transparent border-b-2 border-black focus:border-gray-600 outline-none transition-colors text-center text-lg placeholder:text-gray-400 text-black'
          />
        </div>

        <button
          onClick={handleConfirm}
          disabled={!isFormValid}
          className={`px-10 py-3 rounded-full uppercase tracking-widest text-sm transition-all duration-300 shadow-md ${
            isFormValid
              ? 'bg-black text-white hover:bg-gray-800 active:scale-95'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Confirmar asistencia
        </button>
      </div>
    </div>
  );
}