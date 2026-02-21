'use client';

import React, { useState, useEffect } from 'react';

export default function SendWhatsapp() {
  const [showLabel, setShowLabel] = useState(false);
  const phoneNumber = '+18307081047';
  
  const message = encodeURIComponent('¡Hola! La familia [inserta tu nombre aquí] confirma su asistencia a la boda de Valeria y José con [# de invitados] invitados.');

  useEffect(() => {
    const showTimer = setTimeout(() => setShowLabel(true), 2000);
    const hideTimer = setTimeout(() => setShowLabel(false), 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-1 sm:gap-2">
      
      {/* Etiqueta con Transparencia y Blur (Efecto Cristal) */}
      {showLabel && (
        <div className="bg-black/30 backdrop-blur-md text-white text-[10px] sm:text-xs font-light py-1.5 px-3 sm:py-2 sm:px-4 rounded-2xl rounded-br-none shadow-lg animate-bounce mb-1 max-w-[150px] sm:max-w-none text-center border border-white/10">
          ¡Confirma por WhatsApp! 💍
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowLabel(false);
            }}
            className="ml-2 font-bold opacity-50 hover:opacity-100"
          >
            ×
          </button>
        </div>
      )}

      {/* Contenedor del Botón con color Champagne de la invitación */}
      <div className="relative group">
        {/* Onda de pulso en color dorado suave */}
        <span className="absolute inset-0 rounded-full bg-[#B89B5E] animate-ping opacity-20"></span>
        
        <div
          onClick={handleClick}
          className="relative w-12 h-12 sm:w-14 sm:h-14 bg-[#B89B5E]/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#B89B5E] hover:scale-110 transition-all duration-300 border border-white/30"
          title="Confirmar asistencia por WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-md"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.168 1.6 5.975L0 24l6.188-1.588A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.05c-1.89 0-3.73-.497-5.35-1.44l-.384-.228-3.675.945.98-3.588-.25-.372A9.94 9.94 0 0 1 2.05 12c0-5.493 4.457-9.95 9.95-9.95 5.493 0 9.95 4.457 9.95 9.95 0 5.493-4.457 9.95-9.95 9.95zm5.65-7.35c-.31-.16-1.84-.91-2.13-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1.01 1.23-.18.21-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.56.16-.19.21-.31.31-.52.1-.21.05-.39-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.54 1.13 3.03 1.29 3.24.16.21 2.23 3.41 5.4 4.78.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.12-.29-.19-.6-.35z" />
          </svg>
        </div>
      </div>
    </div>
  );
}