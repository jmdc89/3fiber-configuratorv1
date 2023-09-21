import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model1(props) {
  const { nodes, materials } = useGLTF('./models/mod500-250-0-0.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.no_transformations.geometry} material={materials['????????glTF 2.0 Material']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('.models//mod500-250-0-0.glb')
