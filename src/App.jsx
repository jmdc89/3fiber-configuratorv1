import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {Interface} from "./components/Interface"
import { InterfaceWall } from "./components/InterfaceWall";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
        <Experience />
      </Canvas>
      {/* <Interface /> */}
      <InterfaceWall />
    </>
  );
}

export default App;
