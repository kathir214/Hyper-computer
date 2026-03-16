import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black uppercase tracking-tighter text-[#FACC15]">
              Hyper<span className="text-white">Computers</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#FACC15] transition-colors">Mac</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#FACC15] transition-colors">iPad</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#FACC15] transition-colors">iPhone</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#FACC15] transition-colors">Watch</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest text-white hover:text-[#FACC15] transition-colors">Support</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="text-white hover:text-[#FACC15] transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="bg-white text-black font-bold px-6 py-2 rounded-full uppercase text-sm tracking-wider hover:bg-[#FACC15] transition-colors">
              Buy
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button className="text-white hover:text-[#FACC15] transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#FACC15] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#050505] border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              <a href="#" className="text-2xl font-black uppercase tracking-tighter text-white hover:text-[#FACC15] transition-colors">Mac</a>
              <a href="#" className="text-2xl font-black uppercase tracking-tighter text-white hover:text-[#FACC15] transition-colors">iPad</a>
              <a href="#" className="text-2xl font-black uppercase tracking-tighter text-white hover:text-[#FACC15] transition-colors">iPhone</a>
              <a href="#" className="text-2xl font-black uppercase tracking-tighter text-white hover:text-[#FACC15] transition-colors">Watch</a>
              <a href="#" className="text-2xl font-black uppercase tracking-tighter text-white hover:text-[#FACC15] transition-colors">Support</a>
              <div className="mt-8">
                <button className="w-full bg-[#FACC15] text-black font-bold py-4 rounded-full uppercase tracking-widest">
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
