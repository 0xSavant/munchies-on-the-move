import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/Models/Cookie.glb");
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <primitive position={[0, 0, 0]} object={gltf.scene} scale={1} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Model;
