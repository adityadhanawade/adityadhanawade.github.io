import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, MeshDistortMaterial, Float } from '@react-three/drei'
import type { Group } from 'three'
import { useReducedMotion } from 'framer-motion'

function Knot() {
  const group = useRef<Group>(null)
  const reduceMotion = useReducedMotion()

  useFrame((state, delta) => {
    if (!group.current) return
    if (reduceMotion) {
      group.current.rotation.y += delta * 0.08
      return
    }
    const { pointer } = state
    group.current.rotation.y += delta * 0.12
    group.current.rotation.x += (pointer.y * 0.4 - group.current.rotation.x) * 0.04
    group.current.rotation.z += (-pointer.x * 0.25 - group.current.rotation.z) * 0.04
  })

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.9}>
      <group ref={group}>
        <Icosahedron args={[1.5, 6]}>
          <MeshDistortMaterial
            color="#22c68a"
            roughness={0.12}
            metalness={0.75}
            distort={0.38}
            speed={1.4}
          />
        </Icosahedron>
      </group>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 3, 4]} intensity={40} color="#22c68a" />
        <pointLight position={[-4, -2, -3]} intensity={18} color="#f3f0e9" />
        <Suspense fallback={null}>
          <Knot />
        </Suspense>
      </Canvas>
    </div>
  )
}
