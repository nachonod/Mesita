import React, { Suspense, useRef } from "react";
import {
  Canvas,
  useLoader,
  extend,
  useFrame,
  useThree,
} from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./styles.css";

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      enablePan={false}
      enableZoom={false}
      autoRotate
      autoRotateSpeed={45}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

function Mesa2() {
  const gltf = useLoader(GLTFLoader, "mesa/MesaBabylon.glb");

  const scene = useLoader(GLTFLoader, "mesa/MesaBabylon.glb");
  console.log(scene);

  return (
    <primitive object={gltf.scene} position={[0, -1, 0]} scale={[7, 7, 7]} />
  );
}

export default function App() {
  return (
    <>
      <h2 className="animate__animated animate__flash">
        MESAS PLUVIAL.
        <br />
        <span id="extra">
        BY FEDERICO CHURBA.
        </span>
      </h2>


      <Canvas style={{ background: "Peru" }} camera={{ position: [0, 2, 4] }}>
        <ambientLight intensity={0.6} />
        <spotLight
          castShadow
          penumbra={1}
          position={[15, 4, 12]}
          color={"white"}
          intensity={1}
        />
        <Suspense fallback={null}>
          <Mesa2 />
        </Suspense>
        <Controls />
      </Canvas>
    </>
  );
}
