import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <Stage intensity={1.5} environment="city" shadows={{
        type: "accumulative",
        color: "#85ffbd",
        colorBlend: 2,
        opacity: 2,
      }}
        adjustCamera={2}
      ></Stage>
      <OrbitControls />
      <mesh>
        <meshNormalMaterial />
        <boxBufferGeometry />
      </mesh>
    </>
  );
};
