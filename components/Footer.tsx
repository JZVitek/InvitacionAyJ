'use client';

import React from 'react';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gray-500 font-light">
          <Code2 className="w-3 h-3" />
          <span>Diseño y Desarrollo</span>
        </div>
        <a 
          href="https://wa.me/3531135393" // Tu número para que te contacten otros clientes
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-serif italic text-black hover:text-[#B89B5E] transition-colors"
        >
          By input-dev (Jesus Zamora)
        </a>
        <p className="text-[10px] text-gray-400 mt-2">
          © 2026 • Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}