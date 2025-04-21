import React from 'react';

export default function SendWhatsapp() {
  const phoneNumber = '+15592837305'; // Número de teléfono con el código de país (+1 para California)
  const message = encodeURIComponent('¡Hola! La familia [inserta tu nombre aquí] confirma su asistencia a la boda de Andrea y José. con [# de invitados] invitados.'); // Mensaje predefinido

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank'); // Abre el enlace en una nueva pestaña
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-4 right-4 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 transition-all z-50"
      title="Confirmar asistencia por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.168 1.6 5.975L0 24l6.188-1.588A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.05c-1.89 0-3.73-.497-5.35-1.44l-.384-.228-3.675.945.98-3.588-.25-.372A9.94 9.94 0 0 1 2.05 12c0-5.493 4.457-9.95 9.95-9.95 5.493 0 9.95 4.457 9.95 9.95 0 5.493-4.457 9.95-9.95 9.95zm5.65-7.35c-.31-.16-1.84-.91-2.13-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1.01 1.23-.18.21-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.56.16-.19.21-.31.31-.52.1-.21.05-.39-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.63-.52-.54-.71-.55-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.54 1.13 3.03 1.29 3.24.16.21 2.23 3.41 5.4 4.78.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.12-.29-.19-.6-.35z" />
      </svg>
    </div>
  );
}