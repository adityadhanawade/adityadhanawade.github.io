import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, Sparkles, MeshDistortMaterial } from '@react-three/drei'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import type { Group } from 'three'
import { useReducedMotion } from 'framer-motion'

function usePointer() {
  const pointer = useRef({ x: 0, y: 0 })
  useEffect(() => {
    function handle(e: PointerEvent) {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', handle, { passive: true })
    return () => window.removeEventListener('pointermove', handle)
  }, [])
  return pointer
}

function DriftingBlobs() {
  const group = useRef<Group>(null)
  const pointer = usePointer()
  const reduceMotion = useReducedMotion()

  useFrame((_state, delta) => {
    if (!group.current) return
    if (!reduceMotion) {
      group.current.rotation.y += delta * 0.02
      group.current.position.x += (pointer.current.x * 0.6 - group.current.position.x) * 0.015
      group.current.position.y += (-pointer.current.y * 0.4 - group.current.position.y) * 0.015
    }
  })

  return (
    <group ref={group}>
      <mesh position={[-4.5, 1.5, -9]}>
        <icosahedronGeometry args={[2.4, 2]} />
        <MeshDistortMaterial color="#134a34" distort={0.5} speed={0.6} roughness={0.9} metalness={0.1} transparent opacity={0.55} />
      </mesh>
      <mesh position={[5, -1.8, -12]}>
        <icosahedronGeometry args={[3, 2]} />
        <MeshDistortMaterial color="#0f3d2b" distort={0.4} speed={0.4} roughness={0.9} metalness={0.1} transparent opacity={0.45} />
      </mesh>
      <mesh position={[0.5, 3.2, -14]}>
        <icosahedronGeometry args={[2, 2]} />
        <MeshDistortMaterial color="#1a5c40" distort={0.6} speed={0.5} roughness={0.9} metalness={0.1} transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

export default function BackgroundScene() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#0b0a09']} />
        <fog attach="fog" args={['#0b0a09', 6, 22]} />
        <ambientLight intensity={0.3} />

        <DriftingBlobs />

        <Stars radius={60} depth={40} count={reduceMotion ? 800 : 2200} factor={2.4} saturation={0} fade speed={reduceMotion ? 0 : 0.5} />
        <Sparkles
          count={reduceMotion ? 40 : 120}
          scale={[16, 9, 10]}
          size={2.2}
          speed={reduceMotion ? 0 : 0.25}
          color="#22c68a"
          opacity={0.7}
        />

        {!reduceMotion && (
          <EffectComposer multisampling={0}>
            <Bloom mipmapBlur luminanceThreshold={0.15} intensity={0.65} radius={0.7} />
            <Noise opacity={0.025} />
            <Vignette eskil={false} offset={0.25} darkness={0.85} />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  )
}
