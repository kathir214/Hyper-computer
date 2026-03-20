import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-[#FACC15] mb-4">
              Hyper<br />Computers
            </h2>
            <p className="text-gray-400 font-mono text-sm max-w-xs">
              Redefining portable computing for the next generation of creators and professionals.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/50">Products</h3>
            <ul className="space-y-4 font-mono text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#FACC15] transition-colors">HyperBook Pro</a></li>
              <li><a href="#" className="hover:text-[#FACC15] transition-colors">HyperBook Air</a></li>
              <li><a href="#" className="hover:text-[#FACC15] transition-colors">HyperStudio</a></li>
              <li><a href="#" className="hover:text-[#FACC15] transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/50">Company</h3>
            <ul className="space-y-4 font-mono text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#FACC15] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#FACC15] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#FACC15] transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-[#FACC15] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-mono text-xs">
            &copy; {new Date().getFullYear()} Hypercomputers Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 font-mono text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
