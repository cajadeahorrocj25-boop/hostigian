import { Presentacion, Historia, Entrevistas } from './ContentPart1';
import { Leyenda, Poesia } from './ContentPart2';
import { Fotografias, Resena, Glosario, Referencias } from './ContentPart3';

export const Magazine = () => {
  return (
    <div className="mb-24">
      <div className="flex items-center justify-center py-12 mb-16 border-y-4 border-[#800020] bg-white">
        <h2 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-widest text-[#800020] text-center">
          Área 1: Lengua y Literatura
        </h2>
      </div>
      <Presentacion />
      <Historia />
      <Entrevistas />
      <Leyenda />
      <Poesia />
      <Fotografias />
      <Resena />
      <Glosario />
      <Referencias />
    </div>
  );
};
