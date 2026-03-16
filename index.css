import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'HyperBook Pro',
    tagline: 'The Ultimate Workstation',
    price: '$2,499',
    specs: ['M3 Max Chip', '64GB Unified Memory', '2TB SSD', '16" Liquid Retina XDR'],
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-zinc-900',
  },
  {
    id: 2,
    name: 'HyperBook Air',
    tagline: 'Light. Speed.',
    price: '$1,299',
    specs: ['M3 Chip', '16GB Unified Memory', '512GB SSD', '13.6" Liquid Retina'],
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-zinc-800',
  },
  {
    id: 3,
    name: 'HyperStudio',
    tagline: 'Empower Your Creativity',
    price: '$3,999',
    specs: ['M3 Ultra Chip', '128GB Unified Memory', '4TB SSD', 'Studio Display Included'],
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-black',
  },
];

export function Products() {
  return (
    <section className="py-24 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              The Lineup
            </h2>
            <p className="mt-4 text-[#FACC15] font-mono text-sm tracking-widest uppercase">
              Choose your weapon.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#FACC15] transition-colors">
            View All Models <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`group relative rounded-3xl overflow-hidden ${product.color} border border-white/5 hover:border-[#FACC15]/50 transition-colors duration-500`}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#FACC15] font-mono text-sm">{product.tagline}</p>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] mr-3" />
                      {spec}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <button className="px-6 py-3 bg-white text-black font-bold uppercase text-sm tracking-wider hover:bg-[#FACC15] transition-colors rounded-full">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
