import { Footprints, Music, Shirt } from 'lucide-react';

export const EducacionFisicaPage = () => {
  return (
    <div className="flex flex-col h-full bg-white font-serif">
      {/* Encabezado */}
      <div className="py-8 px-6 sm:px-12 border-b-4 border-[#800020] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#800020] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest font-sans">
              Educación Física
            </span>
            <span className="bg-[#D4AF37] text-[#800020] px-3 py-1 text-xs font-bold uppercase tracking-widest font-sans">
              Danza Tradicional
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#800020] mb-2">
            Danza de la Chola Cuencana
          </h2>

          <p className="text-base text-gray-700 font-serif italic">
            Guía práctica y básica del baile tradicional más representativo de Cuenca.
          </p>
        </div>
      </div>

      {/* Contenido Simple */}
      <div className="py-8 px-6 sm:px-12 max-w-3xl mx-auto w-full space-y-6 font-sans">
        
        {/* Ficha Rápida */}
        <div className="bg-gray-50 border border-gray-200 p-5 flex flex-wrap justify-between items-center gap-4">
          <div>
            <span className="text-xs uppercase text-gray-500 font-bold block">Ritmo</span>
            <span className="text-base font-bold text-[#800020]">Pasacalle ecuatoriano</span>
          </div>
          <div>
            <span className="text-xs uppercase text-gray-500 font-bold block">Compás</span>
            <span className="text-base font-bold text-[#800020]">2/4 (dos tiempos)</span>
          </div>
          <div>
            <span className="text-xs uppercase text-gray-500 font-bold block">Música Insignia</span>
            <span className="text-base font-bold text-[#800020]">"Chola Cuencana"</span>
          </div>
        </div>

        {/* Resumen */}
        <div className="border-l-4 border-[#800020] pl-4 py-1 text-gray-700 font-serif text-base">
          Es el baile folclórico más conocido de la ciudad. Se baila en parejas o grupos con una actitud alegre y altiva, destacando el porte elegante y el zapateo al ritmo de la música.
        </div>

        {/* Pasos Básicos */}
        <section className="border border-gray-200 p-5 bg-white shadow-2xs">
          <h3 className="text-lg font-bold uppercase text-[#800020] mb-4 flex items-center gap-2 border-b pb-2 border-gray-200">
            <Footprints size={20} className="text-[#800020]" /> Pasos Básicos
          </h3>

          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex gap-3 items-start">
              <span className="w-6 h-6 rounded-full bg-[#800020] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong className="text-gray-900 block">Postura Inicial:</strong>
                Cuerpo recto, cabeza en alto y brazos en la cintura o sosteniendo el paño.
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="w-6 h-6 rounded-full bg-[#800020] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong className="text-gray-900 block">Paso Cruzado (Base):</strong>
                Desplazamiento lateral cruzando un pie por delante del otro en dos tiempos.
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="w-6 h-6 rounded-full bg-[#800020] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong className="text-gray-900 block">Zapateo:</strong>
                Golpes suaves y rítmicos en el suelo con la punta de los pies (metatarso).
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="w-6 h-6 rounded-full bg-[#800020] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                4
              </span>
              <div>
                <strong className="text-gray-900 block">Vuelta o Giro:</strong>
                Giro completo en cuatro tiempos manteniendo el ritmo de la música.
              </div>
            </div>
          </div>
        </section>

        {/* Traje e Indumentaria Básica */}
        <section className="bg-amber-50/50 border border-amber-200 p-5">
          <h3 className="text-base font-bold uppercase text-amber-950 mb-3 flex items-center gap-2">
            <Shirt size={18} className="text-[#D4AF37]" /> Elementos del Traje Típico
          </h3>
          <div className="grid sm:grid-cols-3 gap-3 text-sm text-gray-700">
            <div className="bg-white p-3 border border-amber-100 rounded-xs">
              <strong className="text-[#800020] block mb-0.5">Sombrero de Paja:</strong>
              Mantiene la mirada al frente y la cabeza erguida.
            </div>
            <div className="bg-white p-3 border border-amber-100 rounded-xs">
              <strong className="text-[#800020] block mb-0.5">Pollera Bordada:</strong>
              Falda tradicional que acompaña el movimiento de los giros.
            </div>
            <div className="bg-white p-3 border border-amber-100 rounded-xs">
              <strong className="text-[#800020] block mb-0.5">Paño o Macana:</strong>
              Se lleva en los hombros o en las manos para marcar el compás.
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
