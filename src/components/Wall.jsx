import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useConfigurator } from "../contexts/Configurator";

import { useFrame } from "@react-three/fiber";
import * as Three from "three";
import { Vector3 } from "three";

export function Wall(props) {
  const { nodes, materials } = useGLTF('./models/WallTest-transformed.glb')

  const {legsColor} = useConfigurator();

  useEffect(() => {
    materials.Material.color = new Three.Color(legsColor);
  }, [legsColor]);
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.01}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_2.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_3.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_4.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_5.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_6.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_7.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_8.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_9.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_10.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_11.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_12.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_13.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_14.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_15.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_16.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_17.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_18.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_19.geometry} material={materials.Material} />
        <mesh geometry={nodes.mesh_0_20.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/WallTest-transformed.glb')
