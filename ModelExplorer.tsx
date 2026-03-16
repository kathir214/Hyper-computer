import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { Laptop } from './Laptop';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{
             backgroundImage: 'linear-gradient(#FACC15 1px, transparent 1px), linear-gradient(90deg, #FACC15 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             backgroundPosition: '-1px -1px'
           }} 
      />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Laptop position={[0, -0.5, 0]} scale={1.2} />
          <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
        </Canvas>
      </div>

      {/* Typography Overlay */}
      <div className="relative z-20 pointer-events-none flex flex-col items-center justify-center w-full h-full p-8">
        <motion.h1 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12vw] font-black text-[#FACC15] leading-none tracking-tighter uppercase text-center mix-blend-difference"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          Hyper<br/>Computers
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 text-white/80 font-mono text-sm md:text-base tracking-widest uppercase text-center max-w-md"
        >
          The Next Generation of Portable Computing Power. Built for Creators.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 pointer-events-auto"
        >
          <button className="bg-[#FACC15] text-black font-bold py-4 px-8 rounded-none uppercase tracking-widest hover:bg-white transition-colors duration-300 border-2 border-[#FACC15] hover:border-white">
            Explore Models
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#FACC15]"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#FACC15] to-transparent" />
      </motion.div>
    </section>
  );
}
