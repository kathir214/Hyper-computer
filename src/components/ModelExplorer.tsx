import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Laptop } from './Laptop';
import { motion } from 'motion/react';

export function ModelExplorer() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#FACC15] leading-none mb-6">
              Explore the <br /> Engineering.
            </h2>
            <p className="text-gray-400 font-mono text-lg mb-8 max-w-md">
              Interact with our flagship model. Rotate, zoom, and inspect the precision-crafted aerospace-grade aluminum chassis.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <span className="block text-[#FACC15] text-2xl font-bold">0.4mm</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Bezel Width</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <span className="block text-[#FACC15] text-2xl font-bold">1.2kg</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Ultra Light</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <span className="block text-[#FACC15] text-2xl font-bold">100%</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Recycled Al</span>
              </div>
            </div>
          </motion.div>

          <div className="h-[500px] bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-white/5 relative group">
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="bg-[#FACC15] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
                Interactive 3D
              </span>
            </div>
            
            <Canvas shadows dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              
              <Laptop position={[0, -0.5, 0]} scale={1.5} />
              
              <ContactShadows position={[0, -1.4, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
              <Environment preset="city" />
              <OrbitControls 
                enableZoom={true} 
                enablePan={false} 
                autoRotate 
                autoRotateSpeed={0.5}
                minDistance={3}
                maxDistance={7}
              />
            </Canvas>

            <div className="absolute bottom-4 right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white/30 text-[10px] font-mono uppercase tracking-widest">
                Drag to Rotate • Scroll to Zoom
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
