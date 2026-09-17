import { Section } from './Layout';

export const Leyenda = () => (
  <Section id="leyenda" title="4. Identidad: Leyenda Local">
    <div className="p-8 border-y-4 border-[#800020] bg-[#FFFFFF] mb-10 font-serif shadow-sm break-inside-avoid">
      <h3 className="font-black text-center mb-6 text-3xl uppercase tracking-widest text-[#800020]">
        El Cura sin Cabeza del Vado
      </h3>
      <p className="mb-4 text-lg">
        Cuenta la rica tradición oral cuencana que, en las frías y neblinosas noches de antaño, cuando el alumbrado público apenas consistía en faroles mortecinos, una figura espectral deambulaba por los oscuros callejones que conectan el Parque Calderón con el tradicional barrio del Vado. Los trasnochadores y bohemios que transitaban por la calle Simón Bolívar a altas horas de la madrugada aseguraban sentir un frío sepulcral, seguido por el lúgubre repicar de unas campanas invisibles.
      </p>
      <p className="mb-4 text-lg">
        Quienes tuvieron la desdicha de toparse con la aparición, describían a un hombre ataviado con una antigua y pesada sotana negra de sacerdote franciscano. Sin embargo, el terror los paralizaba al alzar la vista y descubrir que, sobre los hombros de la túnica, no existía cabeza alguna. En su lugar, el espíritu sostenía su propio cráneo ensangrentado bajo el brazo izquierdo, mientras con la mano derecha empuñaba un rosario que brillaba con una luz fatua y verdosa.
      </p>
      <p className="text-lg">
        Las abuelas murmuraban junto al fogón que se trataba del alma en pena de un sacerdote que, siglos atrás, había traicionado sus votos de castidad, ocultando un amor prohibido en una de las casas patrimoniales del centro. Como castigo divino, fue condenado a vagar eternamente por las calles adoquinadas, espantando a los borrachos, a los infieles y a todo aquel que anduviera por el mal camino, recordando a los vivos el peso ineludible de los pecados.
      </p>
    </div>

    <div className="break-inside-avoid">
      <h3 className="font-bold uppercase tracking-widest text-2xl mb-6 font-sans">Interpretación y Valor Cultural</h3>
      <p className="mb-6">
        La leyenda del "Cura sin Cabeza" es una manifestación literaria invaluable del sincretismo y la estructura moral de la sociedad cuencana colonial y republicana. Por un lado, <strong>significa y representa el control social</strong> a través del miedo: el fantasma aparece específicamente para castigar a los "bohemios y trasnochadores", funcionando como un mecanismo de censura popular que buscaba mantener el orden, las buenas costumbres y los valores católicos tradicionales en la comunidad.
      </p>
      <p className="mb-6">
        Es imperativo conservar estas narrativas porque constituyen el <strong>patrimonio cultural inmaterial</strong> de Cuenca. Estas historias no son simples cuentos de terror; son un reflejo directo de la psicología, las creencias y el dialecto de nuestros antepasados. Preservar y analizar estas leyendas en las aulas permite a los estudiantes comprender su identidad, conectarse con la cosmovisión andina y valorar la riqueza de la palabra hablada que ha resistido el embate de la modernidad.
      </p>
    </div>
  </Section>
);

export const Poesia = () => (
  <Section id="poesia" title="5. Cuenca en Versos">
    <div className="flex flex-col gap-10">
      <div className="break-inside-avoid">
        <div className="border-[6px] border-[#800020] p-8 text-center bg-white shadow-lg mx-auto max-w-md">
          <h3 className="font-bold mb-8 italic text-3xl font-serif text-[#800020]">Romance al Parque Calderón</h3>
          <div className="space-y-2 text-xl font-medium tracking-wide">
            <p>En el centro de mi Cuenca, <span className="text-gray-400 font-sans text-sm ml-2">8 sílabas</span></p>
            <p>donde el sol viene a posar, <span className="text-gray-400 font-sans text-sm ml-2">7+1 = 8</span></p>
            <p>hay un parque de esmeraldas <span className="text-gray-400 font-sans text-sm ml-2">8 sílabas</span></p>
            <p>que no para de brillar. <span className="text-gray-400 font-sans text-sm ml-2">7+1 = 8</span></p>
            <p>La Catedral le vigila, <span className="text-gray-400 font-sans text-sm ml-2">8 sílabas</span></p>
            <p>con su porte colosal, <span className="text-gray-400 font-sans text-sm ml-2">7+1 = 8</span></p>
            <p>los pinos cuentan bajito <span className="text-gray-400 font-sans text-sm ml-2">8 sílabas</span></p>
            <p>historias de la ciudad, <span className="text-gray-400 font-sans text-sm ml-2">7+1 = 8</span></p>
            <p>y aquel héroe en su bronce <span className="text-gray-400 font-sans text-sm ml-2">8 sílabas</span></p>
            <p>nos inspira libertad. <span className="text-gray-400 font-sans text-sm ml-2">7+1 = 8</span></p>
          </div>
          <div className="w-12 h-[1px] bg-gray-400 mx-auto mt-8 mb-4"></div>
          <p className="text-sm font-sans uppercase tracking-widest text-gray-500">Métrica octosílaba<br/>Rima asonante en versos pares</p>
        </div>
      </div>

      <div className="break-inside-avoid">
        <h3 className="font-bold uppercase tracking-widest text-2xl mb-6 font-sans">Figuras Retóricas Aplicadas</h3>
        <ul className="list-decimal pl-6 space-y-6 text-lg">
          <li className="break-inside-avoid">
            <strong className="text-[#800020] font-sans">Metáfora:</strong> <em>"Parque de esmeraldas"</em>. <br/>
            Identifica el verde intenso de los jardines con la esmeralda. Efecto: enaltecer la belleza natural del lugar.
          </li>
          <li className="break-inside-avoid">
            <strong className="text-[#800020] font-sans">Personificación:</strong> <em>"La Catedral le vigila" / "los pinos cuentan bajito"</em>. <br/>
            Atribuye acciones humanas (vigilar, contar) a objetos inanimados o plantas. Efecto: dar vida y misterio al entorno.
          </li>
          <li className="break-inside-avoid">
            <strong className="text-[#800020] font-sans">Epíteto:</strong> <em>"Porte colosal"</em>. <br/>
            El uso del adjetivo "colosal" resalta el inmenso tamaño de la iglesia. Efecto: enfatizar la grandiosidad frente a las personas.
          </li>
        </ul>
      </div>
    </div>
  </Section>
);
