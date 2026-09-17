import { Section } from './Layout';

export const Fotografias = () => (
  <Section id="fotografias" title="6. Registro Fotográfico, Análisis Sintáctico">
    <p className="mb-6 text-base text-gray-700 italic">
      Aquí van las descripciones para las fotografías representativas de Cuenca. Se desglosa el <strong>Sintagma Nominal, sujeto,</strong> y el <strong>Sintagma Verbal, predicado</strong>.
    </p>

    <div className="flex flex-col gap-8 break-inside-avoid">
      <div className="border border-gray-300 p-4 bg-white shadow-sm">
        <div className="h-64 mb-4 overflow-hidden border border-gray-300 relative">
          <img 
            src="https://images.unsplash.com/photo-1620619767323-b684db4a8dfa?auto=format&fit=crop&q=80&w=1200" 
            alt="Parque Calderón Cuenca" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="font-bold text-center text-lg mb-4 font-serif">
          "Los frondosos árboles del Parque Calderón ofrecen una sombra refrescante a los visitantes diarios."
        </p>
        <div className="text-base font-sans p-4 bg-white border border-gray-200">
          <p className="mb-2"><strong className="text-[#800020]">SN:</strong> Los frondosos árboles del Parque Calderón</p>
          <p><strong className="text-gray-800">SV:</strong> ofrecen una sombra refrescante a los visitantes diarios.</p>
        </div>
      </div>

      <div className="border border-gray-300 p-4 bg-white shadow-sm break-inside-avoid">
        <div className="h-64 mb-4 overflow-hidden border border-gray-300 relative">
          <img 
            src="https://images.unsplash.com/photo-1596422846543-74c6e27a0fa9?auto=format&fit=crop&q=80&w=1200" 
            alt="Catedral de Cuenca" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="font-bold text-center text-lg mb-4 font-serif">
          "La majestuosa Catedral Nueva con sus cúpulas celestes ilumina el cielo cuencano al atardecer."
        </p>
        <div className="text-base font-sans p-4 bg-white border border-gray-200">
          <p className="mb-2"><strong className="text-[#800020]">SN:</strong> La majestuosa Catedral Nueva con sus cúpulas celestes</p>
          <p><strong className="text-gray-800">SV:</strong> ilumina el cielo cuencano al atardecer.</p>
        </div>
      </div>
      
      <div className="border border-gray-300 p-4 bg-white shadow-sm break-inside-avoid">
        <div className="h-64 mb-4 overflow-hidden border border-gray-300 relative">
          <img 
            src="https://images.unsplash.com/photo-1619441113264-58eb19089146?auto=format&fit=crop&q=80&w=1200" 
            alt="Arquitectura Cuenca" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="font-bold text-center text-lg mb-4 font-serif">
          "Las históricas calles empedradas de Cuenca conservan la esencia colonial en cada rincón."
        </p>
        <div className="text-base font-sans p-4 bg-white border border-gray-200">
          <p className="mb-2"><strong className="text-[#800020]">SN:</strong> Las históricas calles empedradas de Cuenca</p>
          <p><strong className="text-gray-800">SV:</strong> conservan la esencia colonial en cada rincón.</p>
        </div>
      </div>
    </div>
  </Section>
);

export const Resena = () => (
  <Section id="resena" title="7. Reseña y Reflexión Final">
    <p className="mb-6 drop-cap">
      <span className="float-left text-7xl leading-[0.8] pr-3 pt-2 font-black font-serif text-[#800020]">E</span>
      l Parque Abdón Calderón trasciende su mera función urbanística para convertirse en el pilar fundamental del patrimonio tangible e intangible de Cuenca. Su valor arquitectónico e histórico, delimitado por las gloriosas catedrales y el bronce de sus héroes, es innegable. Sin embargo, su verdadera riqueza radica en ser el epicentro de la interacción social, un ágora moderna donde la identidad cultural azuaya late con fuerza y se renueva diariamente.
    </p>
    <p className="mb-6">
      Existe una relación profunda e indivisible entre el espacio físico, nuestra lengua y las tradiciones orales. El parque es el lienzo donde el dialecto cuencano, con su fonética cantarina y modismos singulares, cobra vida a través de las conversaciones de sus habitantes. Preservar este espacio y sus memorias no solo implica cuidar los jardines o restaurar las fachadas, sino, sobre todo, valorar nuestra palabra hablada y nuestras leyendas. Al estudiar y enaltecer nuestra lengua en las aulas, garantizamos que la identidad morlaca resista el paso del tiempo, asegurando que las futuras generaciones sigan narrando su propia historia bajo la sombra de las centenarias araucarias.
    </p>
  </Section>
);

export const Glosario = () => (
  <Section id="glosario" title="8. Apartado Teórico, Glosario Aplicado">
    <div className="space-y-8 break-inside-avoid">
      <div className="border-b border-gray-300 pb-4">
        <h4 className="font-bold font-sans text-xl tracking-wider text-[#800020] mb-2 uppercase">Sintagma Nominal, SN</h4>
        <p className="text-base mb-3">Estructura gramatical cuyo núcleo es un sustantivo o pronombre. Cumple generalmente la función de sujeto.</p>
        <p className="text-base bg-[#FFFFFF] p-3 border-l-4 border-gray-400 font-serif italic">Ej: <strong>La antigua Catedral Vieja</strong> fue restaurada meticulosamente.</p>
      </div>

      <div className="border-b border-gray-300 pb-4 break-inside-avoid">
        <h4 className="font-bold font-sans text-xl tracking-wider text-[#800020] mb-2 uppercase">Sintagma Verbal, SV</h4>
        <p className="text-base mb-3">Estructura cuyo núcleo es un verbo conjugado. Funciona como el predicado de la oración.</p>
        <p className="text-base bg-[#FFFFFF] p-3 border-l-4 border-gray-400 font-serif italic">Ej: Los turistas extranjeros <strong>caminan maravillados por el parque</strong>.</p>
      </div>

      <div className="border-b border-gray-300 pb-4 break-inside-avoid">
        <h4 className="font-bold font-sans text-xl tracking-wider text-[#800020] mb-2 uppercase">Oración Coordinada</h4>
        <p className="text-base mb-3">Unión de dos o más oraciones independientes que tienen la misma jerarquía sintáctica, enlazadas por una conjunción, como y, o, pero.</p>
        <p className="text-base bg-[#FFFFFF] p-3 border-l-4 border-gray-400 font-serif italic">Ej: El parque es muy amplio <strong>y</strong> sus jardines están florecidos.</p>
      </div>

      <div className="border-b border-gray-300 pb-4 break-inside-avoid">
        <h4 className="font-bold font-sans text-xl tracking-wider text-[#800020] mb-2 uppercase">Oración Yuxtapuesta</h4>
        <p className="text-base mb-3">Unión de dos o más oraciones independientes sin usar conjunciones, conectadas únicamente por signos de puntuación, como coma o punto y coma.</p>
        <p className="text-base bg-[#FFFFFF] p-3 border-l-4 border-gray-400 font-serif italic">Ej: La tarde cae sobre Cuenca<strong>;</strong> las luces de las cúpulas se encienden.</p>
      </div>

      <div className="border-b border-gray-300 pb-4 break-inside-avoid">
        <h4 className="font-bold font-sans text-xl tracking-wider text-[#800020] mb-2 uppercase">Or. Principal y Secundaria</h4>
        <p className="text-base mb-3">La oración principal tiene sentido completo. La subordinada depende sintácticamente de la principal.</p>
        <p className="text-base bg-[#FFFFFF] p-3 border-l-4 border-gray-400 font-serif italic">Ej: Principal: Visitaremos la iglesia, Secundaria: <strong>cuando termine de llover</strong>.</p>
      </div>

      <div className="border-b border-gray-300 pb-4 break-inside-avoid">
        <h4 className="font-bold font-sans text-xl tracking-wider text-[#800020] mb-2 uppercase">Figuras Retóricas</h4>
        <p className="text-base mb-3">Recursos y alteraciones del lenguaje utilizados para embellecer o dar mayor expresividad al discurso.</p>
        <p className="text-base bg-[#FFFFFF] p-3 border-l-4 border-gray-400 font-serif italic">Ej, Metáfora: Las cúpulas celestes son los ojos de Cuenca que miran al cielo.</p>
      </div>
    </div>
  </Section>
);

export const Referencias = () => (
  <section className="mt-16 pt-8 border-t-8 border-[#800020] break-inside-avoid">
    <h3 className="font-bold font-sans text-2xl mb-6 uppercase tracking-[0.2em]">Referencias Bibliográficas</h3>
    <ul className="list-disc pl-8 text-base space-y-4 font-sans text-gray-700">
      <li>Cordero, L. (2014). <em>Diccionario quichua-castellano y castellano-quichua</em>. Corporación Editora Nacional.</li>
      <li>Encalada Vásquez, O. (2007). <em>La lengua en el Azuay: Características y origen</em>. Universidad del Azuay.</li>
      <li>Ministerio de Educación del Ecuador. (2016). <em>Currículo de los niveles de educación obligatoria</em>.</li>
      <li>Vintimilla, M. A. (2010). <em>Cuenca: Ciudad y poesía. Antología literaria y patrimonial</em>. Universidad de Cuenca.</li>
    </ul>
  </section>
);
