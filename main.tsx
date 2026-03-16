import { motion } from 'motion/react';

export function Specs() {
  return (
    <section className="py-24 bg-[#FACC15] text-black border-y-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Raw <br /> Power.
            </h2>
            <p className="text-xl font-medium mb-12 max-w-md">
              We stripped away everything you don't need, and supercharged everything you do.
            </p>
            
            <div className="space-y-8">
              <div className="border-b-2 border-black pb-4">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold uppercase tracking-widest">CPU Cores</span>
                  <span className="text-4xl font-black">16</span>
                </div>
                <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-black h-full"
                  />
                </div>
              </div>

              <div className="border-b-2 border-black pb-4">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold uppercase tracking-widest">GPU Cores</span>
                  <span className="text-4xl font-black">40</span>
                </div>
                <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="bg-black h-full"
                  />
                </div>
              </div>

              <div className="border-b-2 border-black pb-4">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold uppercase tracking-widest">Unified Memory</span>
                  <span className="text-4xl font-black">128GB</span>
                </div>
                <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="bg-black h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-black rounded-full flex items-center justify-center p-12 relative overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[20px] border-dashed border-[#FACC15]/20 rounded-full"
              />
              <div className="text-center z-10">
                <span className="block text-[#FACC15] text-8xl font-black tracking-tighter">M3</span>
                <span className="block text-white text-3xl font-bold uppercase tracking-widest mt-2">Ultra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
