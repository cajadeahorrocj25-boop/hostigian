import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Menu, X, ChevronDown } from 'lucide-react';

export const Layout = ({ pages }: { pages: { id: string; title?: string; component: ReactNode }[] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToPage = (index: number) => {
    if (index === currentPage) {
      setIsMenuOpen(false);
      return;
    }
    if (index >= 0 && index < pages.length) {
      setDirection(index > currentPage ? 1 : -1);
      setCurrentPage(index);
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const paginate = (newDirection: number) => {
    goToPage(currentPage + newDirection);
  };

  useEffect(() => {
    const handleNavigate = (e: CustomEvent) => {
      const targetIndex = e.detail.index;
      if (typeof targetIndex === 'number') {
        goToPage(targetIndex);
      }
    };
    window.addEventListener('navigate-magazine', handleNavigate as EventListener);
    return () => window.removeEventListener('navigate-magazine', handleNavigate as EventListener);
  }, [currentPage]);

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 })
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-gray-800 font-serif overflow-hidden flex flex-col">
      {/* Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-80 sm:w-96 bg-[#800020] text-white z-50 shadow-2xl border-r-4 border-[#D4AF37] flex flex-col overflow-y-auto"
            >
              <div className="p-6 border-b border-white/20 flex justify-between items-center sticky top-0 bg-[#800020] z-10">
                <h2 className="text-2xl font-black uppercase tracking-widest text-[#D4AF37]">Índice</h2>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-[#D4AF37] transition-colors p-2"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-grow py-6 px-4 flex flex-col gap-2">
                {pages.map((page, index) => (
                  <button
                    key={page.id}
                    onClick={() => goToPage(index)}
                    className={`text-left px-6 py-4 rounded-sm transition-all duration-300 group flex items-center justify-between border-l-4 ${
                      currentPage === index 
                        ? 'bg-white/10 border-[#D4AF37] text-[#D4AF37]' 
                        : 'border-transparent hover:bg-white/5 hover:border-white/50 text-white'
                    }`}
                  >
                    <span className="font-sans font-medium tracking-wide text-sm sm:text-base uppercase">
                      {page.title || `Página ${index + 1}`}
                    </span>
                    <span className={`font-serif italic text-sm ${currentPage === index ? 'text-[#D4AF37]' : 'text-gray-400 group-hover:text-gray-300'}`}>
                      Pág. {index + 1}
                    </span>
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Top Navigation Bar */}
      <div className="bg-[#800020] text-[#FFFFFF] py-4 px-6 flex justify-between items-center shadow-md z-10 sticky top-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors p-2 -ml-2 rounded-sm"
            aria-label="Abrir índice"
          >
            <Menu size={24} />
            <span className="hidden sm:inline font-sans font-bold tracking-widest uppercase text-sm">Menú</span>
          </button>
          <h1 className="text-xl font-bold uppercase tracking-widest font-sans truncate pr-4 text-[#D4AF37] hidden md:block">
            Revista Digital: Cuenca
          </h1>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span className="font-sans text-sm tracking-widest border-l border-[#D4AF37] pl-4 hidden md:block text-[#FFFFFF]">
            PÁGINA {currentPage + 1} DE {pages.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => paginate(-1)}
              disabled={currentPage === 0}
              className="p-2 bg-[#FFFFFF] text-[#800020] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#D4AF37] transition-colors rounded-sm border border-[#D4AF37]"
              aria-label="Página anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => paginate(1)}
              disabled={currentPage === pages.length - 1}
              className="p-2 bg-[#FFFFFF] text-[#800020] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#D4AF37] transition-colors rounded-sm border border-[#D4AF37]"
              aria-label="Página siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Book Content Area (Screen) */}
      <main className="flex-grow relative w-full max-w-7xl mx-auto py-8 px-4 sm:px-8">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="w-full bg-white shadow-2xl border-4 border-[#800020] min-h-[80vh] flex flex-col"
          >
            {pages[currentPage].component}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-[#800020] text-[#FFFFFF] py-6 text-center mt-auto border-t-4 border-[#D4AF37]">
        <p className="text-gray-200 font-sans text-xs tracking-widest uppercase">
          Proyecto Interdisciplinario © 2026-2027 • Unidad Educativa Particular Católica de Cuenca
        </p>
      </footer>
    </div>
  );
};

export const Section = ({ id, title, subject, children }: { id?: string; title: string; subject?: string; children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id={id} className="mb-24 break-inside-avoid px-8 sm:px-16 pt-8 bg-white">
      <header 
        onClick={() => setIsOpen(!isOpen)}
        className="mb-10 text-center md:text-left cursor-pointer group"
      >
        {subject && (
          <div className="mb-4">
            <span className="inline-block bg-[#D4AF37] text-[#800020] text-xs font-bold uppercase tracking-widest px-3 py-1 font-sans">
              {subject}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between border-b-4 border-[#D4AF37] pb-6 gap-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#800020] group-hover:opacity-80 transition-opacity">
            {title}
          </h2>
          <motion.div 
            animate={{ rotate: isOpen ? 180 : 0 }} 
            transition={{ duration: 0.3 }}
            className="text-[#800020] flex-shrink-0"
          >
            <ChevronDown size={40} />
          </motion.div>
        </div>
      </header>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="text-xl text-gray-800 leading-[1.8] md:columns-2 gap-12 text-justify pt-2 pb-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
