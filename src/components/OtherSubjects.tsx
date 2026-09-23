import { Section } from './Layout';
import { Calculator, Sparkles, Compass, Lightbulb, Camera } from 'lucide-react';

export const SocialesPage = () => (
  <div className="mb-24">
    <div className="flex flex-col items-center justify-center py-12 mb-16 border-y-4 border-[#800020] bg-white text-center">
      <span className="text-xs font-bold uppercase tracking-widest bg-[#D4AF37] text-[#800020] px-3 py-1 mb-3 font-sans">
        Visitando mi ciudad
      </span>
      <h2 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-widest text-[#800020]">
        Área 2: Estudios Sociales
      </h2>
    </div>

    <Section id="parque-calderon-sociales" title="El Parque Abdón Calderón: Corazón Histórico y Geográfico" subject="Visitando mi ciudad">
      <p className="mb-6">
        <span className="float-left text-7xl leading-[0.8] pr-3 pt-2 font-black font-serif text-[#800020]">E</span>
        l Parque Abdón Calderón (conocido tradicionalmente como el Parque Central) es el corazón histórico, cultural y geográfico de Cuenca. Constituye el punto de partida de la traza urbana colonial de la ciudad y es uno de los espacios públicos más representativos del Centro Histórico.
      </p>

      <h3 className="font-bold uppercase tracking-widest text-2xl mt-8 mb-4 font-sans text-[#800020] break-inside-avoid">
        1. Historia y Evolución
      </h3>
      <p className="mb-6">
        <strong>Orígenes coloniales:</strong> Desde la fundación de Cuenca en 1557, este espacio funcionó como la Plaza Mayor o Plaza Pública, epicentro de la vida social, política y comercial. Posteriormente se le conoció como Plaza de Armas.
      </p>
      <p className="mb-6">
        <strong>Nombre actual:</strong> En 1920 fue renombrado en honor a Abdón Calderón Garaicoa, el héroe cuencano de la Independencia ("el Héroe Niño") fallecido tras la Batalla de Pichincha en 1822.
      </p>
      <p className="mb-6">
        <strong>Monumento central:</strong> En el centro del parque se erige una escultura en bronce de Abdón Calderón sobre un pedestal de mármol. La estatua fue elaborada en Italia por el escultor Carlos Mayer e inaugurada el 24 de mayo de 1931.
      </p>

      <h3 className="font-bold uppercase tracking-widest text-2xl mt-8 mb-4 font-sans text-[#800020] break-inside-avoid">
        2. Vegetación y Paisaje
      </h3>
      <p className="mb-6">
        <strong>Las araucarias centenarias:</strong> El parque es famoso por sus imponentes pinos o araucarias traídos desde Chile, los cuales fueron sembrados en 1875 por el escritor, botánico y expresidente ecuatoriano Luis Cordero Crespo.
      </p>
      <p className="mb-6">
        Además de las araucarias, el diseño paisajístico cuenta con jardineras, verjas, senderos adovelados, piletas y una tradicional glorieta.
      </p>

      <h3 className="font-bold uppercase tracking-widest text-2xl mt-8 mb-4 font-sans text-[#800020] break-inside-avoid">
        3. Edificaciones y Entorno Monumental
      </h3>
      <p className="mb-6">
        El parque está delimitado por las calles <strong>Simón Bolívar, Luis Cordero, Mariscal Sucre y Benigno Malo</strong>. A su alrededor se concentran los poderes religiosos y gubernamentales más emblemáticos de la ciudad:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2 font-serif">
        <li><strong>Catedral Nueva (Catedral de la Inmaculada Concepción):</strong> Situada frente al costado oeste, destaca por sus icónicas cúpulas de azulejos azules importados de Checoslovaquia.</li>
        <li><strong>Catedral Vieja (Iglesia del Sagrario):</strong> Ubicada al frente este, es la estructura religiosa colonial más antigua de la ciudad, hoy convertida en museo de arte religioso.</li>
        <li><strong>Gobernación del Azuay y Alcaldía de Cuenca:</strong> Ocupan los costados administrativos frente al parque.</li>
        <li><strong>Corte Provincial de Justicia:</strong> Antiguo edificio universitario revestido de mármol local.</li>
        <li><strong>Plaza de las Flores:</strong> A pocos pasos del parque se encuentra este célebre mercado de flores al aire libre.</li>
      </ul>

      <h3 className="font-bold uppercase tracking-widest text-2xl mt-8 mb-4 font-sans text-[#800020] break-inside-avoid">
        4. Uso Social y Cultural
      </h3>
      <p className="mb-6">
        El Parque Calderón es el punto de encuentro natural para cuencanos y visitantes. En sus inmediaciones se desarrollan las festividades más importantes de la ciudad, como el Corpus Christi (Fiesta del Septenario), el Pase del Niño Viajero, así como conciertos, ferias de artesanías y eventos cívicos durante el año.
      </p>

      <div className="bg-gray-50 border-l-4 border-[#800020] p-6 mt-8 font-serif italic text-gray-800">
        <strong className="not-italic font-sans text-xs uppercase tracking-widest text-[#800020] block mb-1">Memoria y Patrimonio</strong>
        "El Parque Calderón, Cuenca - Ecuador: Un recorrido visual y cultural por el corazón histórico y el punto de partida de la identidad cuencana."
      </div>
    </Section>
  </div>
);

export const CienciasPage = () => (
  <div className="mb-24">
    <div className="flex items-center justify-center py-12 mb-16 border-y-4 border-[#800020] bg-white">
      <h2 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-widest text-[#800020] text-center">
        Área 3: Ciencias Naturales
      </h2>
    </div>

    <Section id="flora-parque" title="Flora y Biodiversidad del Parque Calderón" subject="Botánica Urbana">
      <p className="mb-6">
        <span className="float-left text-7xl leading-[0.8] pr-3 pt-2 font-black font-serif text-[#800020]">E</span>
        l Parque Calderón cuenta con una rica diversidad de vegetación que combina especies introducidas de valor histórico con árboles y plantas nativas de la región andina, conformando un pulmón verde y un museo botánico vivo en pleno centro histórico de Cuenca.
      </p>

      <h3 className="font-bold uppercase tracking-widest text-2xl mt-8 mb-4 font-sans text-[#800020] break-inside-avoid">
        Árboles Emblemáticos e Históricos
      </h3>
      <p className="mb-6">
        Entre las especies más representativas destacan las <strong>araucarias</strong> (<em>Araucaria heterophylla / cunninghamii</em>), introducidas desde Chile por el expresidente Luis Cordero Crespo hacia finales del siglo XIX (alrededor de 1875). Su imponente altura enmarca estéticamente las cúpulas de la Catedral Nueva.
      </p>
      <p className="mb-6">
        Asimismo, se conservan <strong>pinos históricos</strong> (<em>Pinus spp.</em>) sembrados a inicios del siglo XX (cerca de 1912) como parte de los proyectos urbanísticos de embellecimiento, acompañados por <strong>cipreses</strong> (<em>Cupressus spp.</em>) de follaje tupido y verdor permanente que delimitan los senderos interiores.
      </p>

      <h3 className="font-bold uppercase tracking-widest text-2xl mt-8 mb-4 font-sans text-[#800020] break-inside-avoid">
        Árboles y Arbustos Nativos y Regionales
      </h3>
      <p className="mb-6">
        El ecosistema del parque integra especies altoandinas fundamentales. El <strong>capulí</strong> (<em>Prunus serotina</em>), árbol frutal tradicional, es emblemático de la cultura cuencana y su floración coincide tradicionalmente con las festividades de Carnaval. 
      </p>
      <p className="mb-6">
        A esto se suma el <strong>arupo</strong> (<em>Chionanthus pubescens</em>), célebre por sus vistosas y delicadas flores rosadas en temporada de floración, además de palmeras, romerillo, guavisay y ejemplares catalogados como patrimonio forestal de la ciudad.
      </p>

      <h3 className="font-bold uppercase tracking-widest text-2xl mt-8 mb-4 font-sans text-[#800020] break-inside-avoid">
        Jardinería y Paisajismo Ornamental
      </h3>
      <p className="mb-6 break-inside-avoid">
        En los parterres y alrededor del monumento central a Abdón Calderón se cultivan miles de plantas bajas de flor —como <strong>geranios, pensamientos y begonias</strong>—, las cuales reciben mantenimiento constante para brindar color y armonía visual a la plaza mayor.
      </p>
    </Section>
  </div>
);

export const MatemáticasPage = () => (
  <div className="mb-24">
    <div className="flex flex-col items-center justify-center py-12 mb-16 border-y-4 border-[#800020] bg-white text-center">
      <span className="text-xs font-bold uppercase tracking-widest bg-[#D4AF37] text-[#800020] px-3 py-1 mb-3 font-sans">
        Reto Matemático Interdisciplinario
      </span>
      <h2 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-widest text-[#800020]">
        Área 5: Matemáticas en el Parque Calderón
      </h2>
    </div>

    <Section id="reto-matematico" title="Aplicación Práctica y Modelado Numérico" subject="Matemáticas Aplicadas">
      <p className="mb-6">
        <span className="float-left text-7xl leading-[0.8] pr-3 pt-2 font-black font-serif text-[#800020]">L</span>
        a presente sección integra los elementos arquitectónicos, históricos y naturales del Parque Calderón capturados durante nuestro recorrido urbano, transformándolos en problemas matemáticos originales de raíces, ecuaciones e inecuaciones, y geometría aplicada.
      </p>

      {/* Photo Placeholder Indicator */}
      <div className="my-8 p-4 bg-gray-50 border-2 border-dashed border-[#800020]/40 flex items-center justify-center gap-3 text-gray-700 font-sans text-sm">
        <Camera size={22} className="text-[#800020]" />
        <span>[Evidencia Fotográfica del Recorrido: Elementos Geométricos y Numéricos del Parque Calderón]</span>
      </div>

      {/* Fase 1 */}
      <h3 className="font-bold uppercase tracking-widest text-2xl mt-10 mb-4 font-sans text-[#800020] border-b-2 border-[#D4AF37] pb-2">
        Fase 1: Raíces Cuadradas, Cúbicas y sus Propiedades
      </h3>
      
      <div className="bg-amber-50/40 border-l-4 border-[#D4AF37] p-5 mb-6 text-gray-800 font-serif">
        <h4 className="font-sans font-bold uppercase text-sm text-[#800020] mb-2 flex items-center gap-2">
          <Calculator size={18} /> Problema Original 1: El Monumento Central
        </h4>
        <p className="mb-3">
          Tomando como base la estructura cuadrada que sostiene el monumento de bronce a Abdón Calderón, se calcula que el área de la base superior mide exactamente <span className="font-mono bg-white px-2 py-0.5 border">144 m²</span>, y el volumen de un bloque ornamental cúbico adyacente es de <span className="font-mono bg-white px-2 py-0.5 border">216 m³</span>. 
        </p>
        <p className="font-semibold text-[#800020] mb-2">
          Calcula el valor exacto de la expresión simplificada: <br />
          <span className="font-mono font-normal text-base block mt-1">E = √(144) + ∛(216) + √(9) · ∛(8)</span>
        </p>
        
        <div className="mt-4 pt-3 border-t border-amber-200 text-sm space-y-1 font-sans">
          <p><strong>Resolución paso a paso:</strong></p>
          <p>1. Calcular la raíz cuadrada: √(144) = 12</p>
          <p>2. Calcular la raíz cúbica: ∛(216) = 6</p>
          <p>3. Calcular producto de raíces: √(9) · ∛(8) = 3 · 2 = 6</p>
          <p>4. Sumar los valores: E = 12 + 6 + 6 = <strong>24</strong></p>
        </div>
      </div>

      {/* ¿Sabías que...? 1 */}
      <div className="bg-[#800020] text-white p-5 mb-8 shadow-xs">
        <h4 className="font-sans font-bold uppercase text-xs tracking-widest text-[#D4AF37] mb-2 flex items-center gap-2">
          <Lightbulb size={18} /> ¿Sabías que...? (Fase 1)
        </h4>
        <p className="font-serif text-sm leading-relaxed text-gray-100">
          El monumento a Abdón Calderón fue inaugurado el 24 de mayo de 1931 y esculpido en Italia. Sus proporciones simétricas y cálculos geométricos demuestran que las raíces cuadradas y cúbicas son esenciales en el diseño arquitectónico clásico para garantizar equilibrio estructural y estético en plazas históricas.
        </p>
      </div>

      {/* Fase 2 */}
      <h3 className="font-bold uppercase tracking-widest text-2xl mt-10 mb-4 font-sans text-[#800020] border-b-2 border-[#D4AF37] pb-2">
        Fase 2: Ecuaciones e Inecuaciones de Primer Grado
      </h3>

      <div className="bg-amber-50/40 border-l-4 border-[#D4AF37] p-5 mb-6 text-gray-800 font-serif">
        <h4 className="font-sans font-bold uppercase text-sm text-[#800020] mb-2 flex items-center gap-2">
          <Calculator size={18} /> Problema Original 2: Senderos y Visitantes
        </h4>
        <p className="mb-3">
          Durante un fin de semana de feria artesanal en el Parque Calderón, el número de turistas nacionales y extranjeros que recorren los senderos cumple la siguiente condición algebraica: el triple de turistas extranjeros más 120 es igual a 780. Asimismo, para mantener el orden, el número de guardaparques <em>x</em> debe cumplir la inecuación: <span className="font-mono bg-white px-2 py-0.5 border">3x + 15 &le; 45</span>.
        </p>
        <p className="font-semibold text-[#800020] mb-2">
          Resuelve la ecuación para hallar el número de turistas extranjeros y la inecuación para conocer el límite máximo de guardaparques.
        </p>
        
        <div className="mt-4 pt-3 border-t border-amber-200 text-sm space-y-1 font-sans">
          <p><strong>Resolución paso a paso:</strong></p>
          <p><strong>A) Ecuación:</strong> 3t + 120 = 780 &rarr; 3t = 660 &rarr; t = <strong>220 turistas extranjeros</strong>.</p>
          <p><strong>B) Inecuación:</strong> 3x + 15 &le; 45 &rarr; 3x &le; 30 &rarr; x &le; <strong>10 guardaparques como máximo</strong>.</p>
        </div>
      </div>

      {/* ¿Sabías que...? 2 */}
      <div className="bg-[#800020] text-white p-5 mb-8 shadow-xs">
        <h4 className="font-sans font-bold uppercase text-xs tracking-widest text-[#D4AF37] mb-2 flex items-center gap-2">
          <Lightbulb size={18} /> ¿Sabías que...? (Fase 2)
        </h4>
        <p className="font-serif text-sm leading-relaxed text-gray-100">
          El Parque Calderón es el punto neurálgico donde convergen miles de ciudadanos durante festividades como el Corpus Christi. Las ecuaciones e inecuaciones de primer grado permiten a las autoridades municipales planificar aforos, distribución de vallas y logística de seguridad urbana.
        </p>
      </div>

      {/* Fase 3 */}
      <h3 className="font-bold uppercase tracking-widest text-2xl mt-10 mb-4 font-sans text-[#800020] border-b-2 border-[#D4AF37] pb-2">
        Fase 3: Aplicación del Teorema de Pitágoras
      </h3>

      {/* Image Evidence for Pythagoras */}
      <div className="my-6 border-4 border-[#800020] p-2 bg-white shadow-sm">
        <img 
          src="https://photos.wikimapia.org/p/00/05/42/68/43_big.jpg" 
          alt="Parque Calderón - Geometría y Senderos" 
          className="w-full h-auto max-h-[350px] object-cover"
        />
        <p className="text-center font-sans text-xs uppercase tracking-widest text-gray-600 mt-2 py-1 border-t border-gray-200">
          Figura 3. Disposición geométrica y senderos ortogonales del Parque Calderón
        </p>
      </div>

      <div className="bg-amber-50/40 border-l-4 border-[#D4AF37] p-5 mb-6 text-gray-800 font-serif">
        <h4 className="font-sans font-bold uppercase text-sm text-[#800020] mb-2 flex items-center gap-2">
          <Compass size={18} /> Problema Original 3: Distancias Trigonométricas en la Plaza
        </h4>
        <p className="mb-3">
          Un caminante se encuentra exactamente frente al monumento central del Parque Calderón. Al caminar en línea recta hacia el norte recorre <span className="font-mono bg-white px-2 py-0.5 border">30 metros</span> hasta una araucaria centenaria, y luego camina en ángulo recto hacia el este <span className="font-mono bg-white px-2 py-0.5 border">40 metros</span> hasta llegar a una pileta ornamental.
        </p>
        <p className="font-semibold text-[#800020] mb-2">
          Calcula la distancia en línea recta (la hipotenusa) que hay desde el punto de inicio (monumento) hasta la pileta ornamental aplicando el Teorema de Pitágoras.
        </p>
        
        <div className="mt-4 pt-3 border-t border-amber-200 text-sm space-y-1 font-sans">
          <p><strong>Resolución paso a paso:</strong></p>
          <p>1. Fórmula: c² = a² + b²</p>
          <p>2. Sustitución: c² = (30)² + (40)²</p>
          <p>3. Operación: c² = 900 + 1600 = 2500</p>
          <p>4. Raíz cuadrada: c = √(2500) = <strong>50 metros de distancia directa</strong>.</p>
        </div>
      </div>

      {/* ¿Sabías que...? 3 */}
      <div className="bg-[#800020] text-white p-5 mb-8 shadow-xs">
        <h4 className="font-sans font-bold uppercase text-xs tracking-widest text-[#D4AF37] mb-2 flex items-center gap-2">
          <Lightbulb size={18} /> ¿Sabías que...? (Fase 3)
        </h4>
        <p className="font-serif text-sm leading-relaxed text-gray-100">
          El Teorema de Pitágoras fue clave en la planificación geométrica colonial de las plazas españolas en América, permitiendo trazar diagonales perfectas, manzanas cuadradas exactas y ubicar templos religiosos como las catedrales en relación simétrica con las plazas.
        </p>
      </div>

    </Section>
  </div>
);

export const ECAPage = () => <Placeholder title="Área 4: ECA (Educación Cultural)" />;
export const InglesPage = () => (
  <div className="mb-24">
    <div className="flex flex-col items-center justify-center py-12 mb-16 border-y-4 border-[#800020] bg-white text-center">
      <span className="text-xs font-bold uppercase tracking-widest bg-[#D4AF37] text-[#800020] px-3 py-1 mb-3 font-sans">
        Gastronomic Culture & Local Spots
      </span>
      <h2 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-widest text-[#800020]">
        Área 6: Inglés - Bonsai Sushi Cuenca (Norte)
      </h2>
    </div>

    <Section id="bonsai-sushi-ingles" title="Bonsai Sushi Cuenca (Norte)" subject="Asian-Fusion & Local Dining">
      <div className="my-6 border-4 border-[#800020] p-2 bg-white shadow-sm break-inside-avoid">
        <img 
          src="https://kommodo.ai/i/kkgE8LOUB4E8vPkM2ss9" 
          alt="Bonsai Sushi Cuenca Norte Interior" 
          className="w-full h-auto max-h-[400px] object-cover"
        />
        <p className="text-center font-sans text-xs uppercase tracking-widest text-gray-600 mt-2 py-1 border-t border-gray-200">
          Interior and Bar Area - Bonsai Sushi Cuenca (Norte)
        </p>
      </div>

      <p className="mb-6">
        <span className="float-left text-7xl leading-[0.8] pr-3 pt-2 font-black font-serif text-[#800020]">B</span>
        onsai Sushi Cuenca (Norte) is a popular Japanese and Asian-fusion spot in northern Cuenca. People really like it for its fresh ingredients, great presentation, and friendly service.
      </p>

      {/* Flag of Japan */}
      <div className="my-8 max-w-sm mx-auto border-2 border-gray-300 p-2 bg-white shadow-sm break-inside-avoid">
        <img 
          src="/flag_of_japan.jpg" 
          alt="Flag of Japan" 
          className="w-full h-auto object-cover"
        />
        <p className="text-center font-sans text-xs uppercase tracking-widest text-gray-600 mt-2 py-1 border-t border-gray-200">
          Symbol of Japanese Gastronomic Heritage
        </p>
      </div>

      <h3 className="font-bold uppercase tracking-widest text-2xl mt-8 mb-4 font-sans text-[#800020] break-inside-avoid">
        Food & Drinks
      </h3>
      <p className="mb-6">
        They offer a solid variety of sushi rolls (the <strong>Alaska</strong> and <strong>Alaska Special</strong> are customer favorites), ramen, Pad Thai, salads, and starters. They also have cocktails, beers, wine, and house drinks.
      </p>

      <h3 className="font-bold uppercase tracking-widest text-2xl mt-8 mb-4 font-sans text-[#800020] break-inside-avoid">
        Vibe & Atmosphere
      </h3>
      <p className="mb-6">
        Modern, cozy, and casual—great for hanging out with friends, a casual date, or just grabbing a solo bite.
      </p>

      <h3 className="font-bold uppercase tracking-widest text-2xl mt-8 mb-4 font-sans text-[#800020] break-inside-avoid">
        Services & Location
      </h3>
      <p className="mb-6">
        <strong>Services:</strong> You can dine in, pick up takeaway, or get delivery. They have a full bar, take credit cards, and accept reservations.
      </p>
      <p className="mb-6">
        <strong>Location:</strong> Super convenient—just a short walk from Tranvía stops, with easy parking options nearby.
      </p>

      <div className="bg-amber-50/40 border-l-4 border-[#D4AF37] p-6 mt-8 font-serif italic text-gray-800">
        <strong className="not-italic font-sans text-xs uppercase tracking-widest text-[#800020] block mb-1">Culinary Recommendation</strong>
        "Fresh ingredients, exceptional presentation, and a cozy modern atmosphere make Bonsai Sushi Cuenca (Norte) a must-visit dining destination in the city."
      </div>
    </Section>
  </div>
);

const Placeholder = ({ title }: { title: string }) => (
  <div className="h-full flex flex-col pt-8 bg-white min-h-[60vh]">
    <div className="flex items-center justify-center py-6 mb-8 border-y-4 border-[#800020] bg-white mx-8 sm:mx-16">
      <h2 className="text-2xl md:text-4xl font-serif font-black uppercase tracking-widest text-[#800020] text-center">
        {title}
      </h2>
    </div>
    <div className="flex-grow flex items-center justify-center px-8">
      <div className="text-center p-12 border-4 border-[#D4AF37] max-w-2xl w-full bg-white shadow-sm">
        <h3 className="text-4xl font-bold text-[#800020] mb-6 uppercase tracking-widest">En Desarrollo</h3>
        <p className="text-xl text-gray-700 font-serif italic">
          El contenido de esta materia está siendo investigado y redactado. Se publicará oficialmente en la próxima edición de la revista interdisciplinaria.
        </p>
      </div>
    </div>
  </div>
);
