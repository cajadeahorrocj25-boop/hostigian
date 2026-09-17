import { Section } from './Layout';

export const Presentacion = () => (
  <Section id="presentacion" title="1. Presentación y Características">
    <p className="mb-6">
      <span className="float-left text-7xl leading-[0.8] pr-3 pt-2 font-black font-serif text-[#800020]">E</span>
      l <strong>Parque Abdón Calderón</strong> se erige como el núcleo geográfico, social y cultural de Santa Ana de los Ríos de Cuenca. Ubicado con precisión matemática en el corazón del centro histórico, se encuentra delimitado por las calles <em>Mariscal Sucre, Benigno Malo, Simón Bolívar y Luis Cordero</em>. Este espacio patrimonial es mucho más que una plaza; es el punto de encuentro donde convergen la fe, la historia y la cotidianidad de los cuencanos.
    </p>
    <p className="mb-6">
      Físicamente, el parque deslumbra con sus impecables y exuberantes jardines, custodiados por imponentes araucarias centenarias que ofrecen una sombra permanente. En su eje central descansa la estatua de bronce del "Héroe Niño", <strong>Abdón Calderón</strong>, símbolo de valentía independentista. A sus flancos, se alzan dos de los hitos arquitectónicos más importantes del país: hacia el oeste, las icónicas cúpulas celestes de la <strong>Catedral de la Inmaculada Concepción (Catedral Nueva)</strong>; y hacia el este, la histórica <strong>Iglesia del Sagrario (Catedral Vieja)</strong>, guardiana de los primeros siglos de la urbe.
    </p>
    <p className="mb-6 break-inside-avoid">
      Las actividades cotidianas del lugar son un retrato vivo de la tradición. Diariamente, jubilados se reúnen en las bancas de hierro forjado para debatir sobre política y recordar añoranzas, mientras los fotógrafos de oficio capturan retratos familiares. Es costumbre infalible saborear un helado tradicional o espumilla bajo la sombra de sus árboles, mientras el repicar de las campanas marca el ritmo pausado y señorial que caracteriza a esta ciudad andina.
    </p>
  </Section>
);

export const Historia = () => (
  <Section id="historia" title="2. Historia del Lugar">
    <div className="bg-[#FFFFFF] p-4 mb-6 border-l-4 border-[#800020] text-base font-sans break-inside-avoid">
      <strong>Nota para el profesor:</strong> En esta redacción se han integrado implícitamente Sintagmas Nominales, Sintagmas Verbales, oraciones compuestas coordinadas, oraciones yuxtapuestas y subordinadas.
    </div>
    <p className="mb-6">
      La antigua Plaza de Armas, trazada cuidadosamente en 1557 durante la fundación española, comenzó como un árido espacio de tierra apisonada, pero con el constante pasar del tiempo se transformó en el elegante Parque Calderón. A su alrededor se levantaron las instituciones del poder civil y religioso de la época colonial. La Catedral Vieja testificó los primeros siglos de fe cuencana; luego, el auge económico cacaotero financió la majestuosa Catedral Nueva.
    </p>
    <p className="mb-6">
      El dinámico desarrollo urbano modernizó sus senderos y los hábiles jardineros plantaron especies exóticas traídas desde lejanas tierras. Las altas araucarias protegen la memoria histórica de la urbe. 
    </p>
    <p className="mb-6 break-inside-avoid">
      Hoy en día, el parque conserva intacto su trazado original ajedrezado. Aunque la ciudad se ha expandido aceleradamente hacia los cuatro puntos cardinales, el centro histórico mantiene su esencia patrimonial. La Gobernación, la Alcaldía y los portales centenarios abrazan este recinto sagrado, demostrando que Cuenca es una ciudad donde el pasado convive armónicamente con el presente.
    </p>
  </Section>
);

export const Entrevistas = () => (
  <Section id="entrevistas" title="3. Entrevistas y Dialecto Cuencano">
    <h3 className="font-bold uppercase tracking-widest text-2xl mb-6 font-sans">Voces de la Ciudad</h3>
    
    <div className="flex flex-col gap-8 mb-10 break-inside-avoid">
      <div className="p-6 border-l-8 border-[#800020] bg-white shadow-sm relative">
        <span className="absolute -top-6 -left-2 text-6xl text-gray-300 font-serif">"</span>
        <h4 className="font-bold mb-3 font-sans uppercase tracking-wider text-sm text-[#800020]">Entrevista 1: Doña Rosa, 70 años</h4>
        <p className="italic font-serif text-xl leading-relaxed text-gray-800">
          Mmm, a ver mijito... el parque antes era bien distinto, <strong>pues</strong>. Uno venía a dar las vueltas los domingos saliendo de la misa en la Catedral Nueva. Era bien <strong>gara</strong> ver a las familias completitas, todos bien alhajitos paseando. Ahora, <strong>ya vuelta</strong>, hay demasiada bulla y mucho tráfico, pero bueno, sigue siendo nuestro parque de toda la vida.
        </p>
      </div>
      
      <div className="p-6 border-l-8 border-[#800020] bg-white shadow-sm relative">
        <span className="absolute -top-6 -left-2 text-6xl text-gray-300 font-serif">"</span>
        <h4 className="font-bold mb-3 font-sans uppercase tracking-wider text-sm text-[#800020]">Entrevista 2: Don Manuel, 65 años</h4>
        <p className="italic font-serif text-xl leading-relaxed text-gray-800">
          Claro, para mí venir a sentarme aquí en esta banquita es lo más <strong>chévere</strong>. Aquí uno se topa con los amigos de años, nos ponemos a conversar de política o de cómo está la ciudad. Mientras los guaguas co<strong>rr</strong>en por ahí dándoles maíz a las palomas, uno se pone a recordar tiempos pasados. Es una costumbre que no se pierde.
        </p>
      </div>
    </div>

    <h3 className="font-bold uppercase tracking-widest text-2xl mb-6 mt-12 font-sans break-inside-avoid">Análisis Lingüístico (Dialecto Morlaco)</h3>
    <ul className="list-disc pl-6 space-y-4 text-lg text-gray-800">
      <li className="break-inside-avoid">
        <strong>Asibilación de la "r" y "rr":</strong> En palabras como "corren" o al pronunciar "Rosa", la consonante vibra con un sonido fricativo asibilado. Es el rasgo fonético andino más distintivo de la identidad cuencana.
      </li>
      <li className="break-inside-avoid">
        <strong>"Gara":</strong> Adjetivo coloquial cuencano de uso cotidiano que significa "bonito", "excelente" o "agradable". Ej: "era bien gara".
      </li>
      <li className="break-inside-avoid">
        <strong>"Pues" (como enclítico enfático):</strong> Uso de muletilla al final de las afirmaciones para reforzar la emotividad de lo dicho ("tan distinto, pues").
      </li>
      <li className="break-inside-avoid">
        <strong>"Ya vuelta":</strong> Locución adverbial típica de la región austral que denota un cambio o contraste, equivalente a "en cambio".
      </li>
      <li className="break-inside-avoid">
        <strong>"Chévere":</strong> Aunque es general, en el habla cuencana se pronuncia acompañado de la entonación cantarina característica del Azuay.
      </li>
    </ul>
  </Section>
);
