import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, MeshTransmissionMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

export function Laptop(props: any) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current && !props.static) {
      const t = state.clock.getElapsedTime();
      group.current.rotation.y = Math.sin(t / 4) / 4;
      group.current.rotation.x = Math.cos(t / 4) / 8;
      group.current.position.y = Math.sin(t / 1.5) / 10;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Base / Chassis */}
      <RoundedBox args={[3, 0.12, 2.1]} radius={0.06} smoothness={4} position={[0, -0.06, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </RoundedBox>

      {/* Keyboard Bed */}
      <RoundedBox args={[2.8, 0.02, 1.3]} radius={0.02} smoothness={2} position={[0, 0.01, -0.2]}>
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.6} />
      </RoundedBox>

      {/* Trackpad */}
      <RoundedBox args={[1.1, 0.01, 0.6]} radius={0.03} smoothness={2} position={[0, 0.01, 0.65]}>
        <meshStandardMaterial color="#222" metalness={0.7} roughness={0.3} />
      </RoundedBox>

      {/* Ports (Visual details) */}
      <mesh position={[1.5, -0.06, 0.2]}>
        <boxGeometry args={[0.01, 0.04, 0.15]} />
        <meshBasicMaterial color="#FFEA00" />
      </mesh>
      <mesh position={[-1.5, -0.06, 0.2]}>
        <boxGeometry args={[0.01, 0.04, 0.15]} />
        <meshBasicMaterial color="#FFEA00" />
      </mesh>

      {/* Screen Hinge Mechanism */}
      <group position={[0, 0, -1.0]}>
        {/* Screen Assembly */}
        <group rotation={[-0.2, 0, 0]}>
          {/* Lid */}
          <RoundedBox args={[3, 2.05, 0.08]} radius={0.06} smoothness={4} position={[0, 1.025, 0]}>
            <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
          </RoundedBox>
          
          {/* Logo on Lid (Back) */}
          <mesh position={[0, 1.025, -0.041]} rotation={[0, Math.PI, 0]}>
            <circleGeometry args={[0.2, 32]} />
            <meshBasicMaterial color="#FFEA00" />
          </mesh>
          
          {/* Display Panel */}
          <RoundedBox args={[2.9, 1.95, 0.02]} radius={0.02} smoothness={2} position={[0, 1.025, 0.045]}>
            <meshStandardMaterial color="#000" metalness={1} roughness={0} />
          </RoundedBox>
          
          {/* Screen Content / Emission */}
          <mesh position={[0, 1.025, 0.056]}>
            <planeGeometry args={[2.8, 1.85]} />
            <meshStandardMaterial 
              color="#FFEA00" 
              emissive="#FFEA00" 
              emissiveIntensity={0.5} 
              transparent 
              opacity={0.9}
            />
          </mesh>

          {/* Camera Dot */}
          <mesh position={[0, 1.95, 0.057]}>
            <circleGeometry args={[0.015, 16]} />
            <meshBasicMaterial color="#111" />
          </mesh>
        </group>
      </group>
    </group>
  );
}
