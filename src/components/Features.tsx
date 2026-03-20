import { motion } from 'motion/react';
import { Cpu, Battery, Monitor, Wifi, Zap, Shield } from 'lucide-react';

const products = [
  {
    title: 'HyperBook Pro 16"',
    price: '$2,499',
    description: 'The ultimate workstation for professionals.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-2',
    bg: 'bg-[#FACC15]',
    text: 'text-black',
  },
  {
    title: 'HyperBook Air',
    price: '$1,299',
    description: 'Power meets portability.',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-1',
    bg: 'bg-[#111]',
    text: 'text-white',
  },
  {
    title: 'HyperStudio Display',
    price: '$1,599',
    description: '5K Retina display with 12MP camera.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-1',
    bg: 'bg-[#111]',
    text: 'text-white',
  },
  {
    title: 'HyperTablet Pro',
    price: '$999',
    description: 'The most advanced tablet experience.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    colSpan: 'md:col-span-2',
    bg: 'bg-[#FACC15]',
    text: 'text-black',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#FACC15]">
            Featured <br /> Products
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl font-mono text-sm">
            Explore our latest high-performance hardware. Designed for the future of computing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl flex flex-col justify-end min-h-[400px] ${product.colSpan} ${product.bg} ${product.text} border border-white/10 hover:scale-[1.01] transition-transform duration-300`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.bg === 'bg-[#FACC15]' ? 'from-[#FACC15] via-[#FACC15]/40' : 'from-black via-black/40'} to-transparent`} />
              </div>
              
              <div className="relative z-10 p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-1">{product.title}</h3>
                    <p className="opacity-80 font-mono text-sm mb-4">{product.description}</p>
                    <span className="text-xl font-bold font-mono">{product.price}</span>
                  </div>
                  <button className={`px-4 py-2 rounded-full font-bold uppercase text-xs tracking-widest ${product.bg === 'bg-[#FACC15]' ? 'bg-black text-white' : 'bg-[#FACC15] text-black'} hover:scale-110 transition-transform`}>
                    Buy
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
