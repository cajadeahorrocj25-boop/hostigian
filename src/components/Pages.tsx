import { ReactNode } from 'react';

export const CoverPage = () => {
  const navigateTo = (index: number) => {
    window.dispatchEvent(new CustomEvent('navigate-magazine', { detail: { index } }));
  };

  return (
  <div className="flex flex-col h-full bg-white">
    {/* Editorial Cover */}
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 sm:p-12 border-b-[16px] border-[#800020] bg-white">
      <div className="w-full max-w-5xl mx-auto border-[6px] border-[#800020] p-8 sm:p-16 relative bg-white shadow-2xl">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-6 text-sm font-bold tracking-widest uppercase text-[#800020] border border-[#800020]">
          Edición Especial Interdisciplinaria
        </span>
        
        <h1 className="text-6xl sm:text-8xl md:text-[8rem] font-black uppercase tracking-tighter mb-2 text-[#800020] leading-none">
          Cuenca
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-light italic text-[#D4AF37] mb-8 font-serif">
          Historias, Palabras e Identidad
        </h2>
        
        <div className="w-32 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-16 leading-relaxed">
          Un recorrido académico y cultural por el Parque Calderón: el corazón palpitante del Azuay.
        </p>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-sans font-bold uppercase tracking-[0.2em] text-[#800020] border-t-2 border-[#D4AF37] pt-8 mt-8">
          <span className="text-center">Director/Estudiante<br/><span className="text-black text-base">Ian Vizuete</span></span>
          <span className="text-center">Institución<br/><span className="text-black text-base">Unidad Educativa Particular Católica de Cuenca</span></span>
          <span className="text-center">Edición<br/><span className="text-black text-base">2026 - 2027</span></span>
        </div>
      </div>
    </div>

    {/* Table of Contents */}
    <div className="bg-[#800020] text-[#FFFFFF] py-16 px-6 sm:px-12 flex-grow">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold uppercase tracking-widest border-b border-[#D4AF37] pb-6 mb-12 text-center md:text-left text-[#D4AF37]">
          Índice Editorial
        </h3>
        <div className="grid md:grid-cols-2 gap-12 font-sans text-lg">
          <div>
            <h4 className="font-bold text-[#FFFFFF] mb-6 uppercase tracking-wider text-xl">Pág 2: Lengua y Literatura</h4>
            <ul className="space-y-3 font-light tracking-wide text-gray-200">
              <li onClick={() => navigateTo(1)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">Presentación y Características</span><span className="font-bold text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">Ver</span>
              </li>
              <li onClick={() => navigateTo(1)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">Historia del Lugar</span><span className="font-bold text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">Ver</span>
              </li>
              <li onClick={() => navigateTo(1)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">Entrevistas y Dialecto Cuencano</span><span className="font-bold text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">Ver</span>
              </li>
              <li onClick={() => navigateTo(1)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">Leyenda: El Cura sin Cabeza</span><span className="font-bold text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">Ver</span>
              </li>
              <li onClick={() => navigateTo(1)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">Cuenca en Versos</span><span className="font-bold text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">Ver</span>
              </li>
              <li onClick={() => navigateTo(1)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">Registro Fotográfico</span><span className="font-bold text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">Ver</span>
              </li>
              <li onClick={() => navigateTo(1)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">Reseña y Glosario</span><span className="font-bold text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">Ver</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#FFFFFF] mb-6 uppercase tracking-wider text-xl">Áreas Interdisciplinarias</h4>
            <ul className="space-y-3 font-light tracking-wide text-gray-200">
              <li onClick={() => navigateTo(2)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">Estudios Sociales</span> <span className="font-bold text-[#D4AF37]">Pág 3</span>
              </li>
              <li onClick={() => navigateTo(3)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">Ciencias Naturales</span> <span className="font-bold text-[#D4AF37]">Pág 4</span>
              </li>
              <li onClick={() => navigateTo(4)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">ECA</span> <span className="font-bold text-[#D4AF37]">Pág 5</span>
              </li>
              <li onClick={() => navigateTo(5)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">Matemáticas</span> <span className="font-bold text-[#D4AF37]">Pág 6</span>
              </li>
              <li onClick={() => navigateTo(6)} className="cursor-pointer group flex justify-between items-end border-b border-white/20 pb-1 hover:border-[#D4AF37] transition-colors">
                <span className="group-hover:text-[#D4AF37] transition-colors">Inglés</span> <span className="font-bold text-[#D4AF37]">Pág 7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
