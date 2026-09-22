import { Section } from './Layout';

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

export const ECAPage = () => <Placeholder title="Área 4: ECA (Educación Cultural)" />;
export const MatemáticasPage = () => <Placeholder title="Área 5: Matemáticas" />;
export const InglesPage = () => <Placeholder title="Área 6: Inglés" />;

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


