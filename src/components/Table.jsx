import { useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useConfigurator } from "../contexts/Configurator";

import { useFrame } from "@react-three/fiber";
import * as Three from "three";
import { Vector3 } from "three";

const ANIM_SPEED = 12;

export function Table(props) {
  const { nodes, materials } = useGLTF("./models/Table.gltf");

  const { legs, legsColor, tableWidth } = useConfigurator();

  const plate = useRef();
  const leftLegs = useRef();
  const rightLegs = useRef();

  useEffect(() => {
    materials.Metal.color = new Three.Color(legsColor);
  }, [legsColor]);

  useFrame((_state, delta) => {
    const tableWidthScale = tableWidth / 100;
    const targetScale = new Vector3(tableWidthScale, 1, 1);

    plate.current.scale.lerp(targetScale, delta * ANIM_SPEED);

    const targetLeftPosition = new Vector3(-1.5 * tableWidthScale, 0, 0);
    leftLegs.current.position.lerp(targetLeftPosition, delta * ANIM_SPEED);

    const targetRightPosition = new Vector3(1.5 * tableWidthScale, 0, 0);
    rightLegs.current.position.lerp(targetRightPosition, delta * ANIM_SPEED);
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plate.geometry}
        material={materials.Plate}
        castShadow
        ref={plate}
      />
      {legs === 0 && (
        <>
          <mesh
            castShadow
            geometry={nodes.Legs01Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
            ref={leftLegs}
          />
          <mesh
            geometry={nodes.Legs01Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
            castShadow
            ref={rightLegs}
          />
        </>
      )}
      {legs === 1 && (
        <>
          <mesh
            geometry={nodes.Legs02Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
            castShadow
            ref={leftLegs}
          />
          <mesh
            geometry={nodes.Legs02Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
            castShadow
            ref={rightLegs}
          />
        </>
      )}
      {legs === 2 && (
        <>
          <mesh
            geometry={nodes.Legs03Left.geometry}
            material={materials.Metal}
            position={[-1.5, 0, 0]}
            castShadow
            ref={leftLegs}
          />
          <mesh
            geometry={nodes.Legs03Right.geometry}
            material={materials.Metal}
            position={[1.5, 0, 0]}
            castShadow
            ref={rightLegs}
          />
        </>
      )}
    </group>
  );
}

useGLTF.preload("./models/Table.gltf");
