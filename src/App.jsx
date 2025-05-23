import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cars } from "./components/cars";

function App() {
  return (
    <Canvas camera={{ position: [25, 10, 10], fov: 75 }}>
      <group position-y={-2}>
        <Cars />
        <ContactShadows opacity={0.32} blur={2} />
      </group>
      <OrbitControls
        target={[25, 0, 0]}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={50}
      />
      <Environment preset="warehouse" />
    </Canvas>
  );
}

export default App;
