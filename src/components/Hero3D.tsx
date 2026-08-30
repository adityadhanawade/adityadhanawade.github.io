import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial, Float, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import type { Group, Mesh } from 'three'
import { useReducedMotion } from 'framer-motion'

function Core() {
  const group = useRef<Group>(null)
  const shell = useRef<Mesh>(null)
  const reduceMotion = useReducedMotion()

  useFrame((state, delta) => {
    if (!group.current || !shell.current) return
    if (reduceMotion) {
      group.current.rotation.y += delta * 0.08
      return
    }
    const { pointer } = state
    group.current.rotation.y += delta * 0.16
    group.current.rotation.x += (pointer.y * 0.4 - group.current.rotation.x) * 0.05
    group.current.rotation.z += (-pointer.x * 0.25 - group.current.rotation.z) * 0.05
    shell.current.rotation.y -= delta * 0.1
    shell.current.rotation.x += delta * 0.05
  })

  return (
    <Float speed={1.6} rotationIntensity={0.25} floatIntensity={1}>
      <group ref={group}>
        <Icosahedron args={[1.35, 6]}>
          <MeshDistortMaterial
            color="#12503a"
            emissive="#22c68a"
            emissiveIntensity={0.9}
            roughness={0.15}
            metalness={0.8}
            distort={0.4}
            speed={1.6}
          />
        </Icosahedron>
        <mesh ref={shell} scale={1.55}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshBasicMaterial color="#5fe8b0" wireframe transparent opacity={0.22} />
        </mesh>
      </group>
    </Float>
  )
}

export default function Hero3D() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 3, 4]} intensity={50} color="#22c68a" />
        <pointLight position={[-4, -2, -3]} intensity={20} color="#f3f0e9" />
        <Suspense fallback={null}>
          <Core />
          <Sparkles count={reduceMotion ? 0 : 60} scale={[4.5, 4.5, 4.5]} size={2.5} speed={0.35} color="#7ef2bd" opacity={0.8} />
          {!reduceMotion && (
            <EffectComposer multisampling={0}>
              <Bloom mipmapBlur luminanceThreshold={0.2} intensity={1.1} radius={0.65} />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  )
}
