export const SocialesPage = () => <Placeholder title="Área 2: Estudios Sociales" />;
export const CienciasPage = () => <Placeholder title="Área 3: Ciencias Naturales" />;
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
