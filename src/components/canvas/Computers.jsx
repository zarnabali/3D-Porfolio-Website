import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  const spotlightTarget = useRef(); // Target for the spotlight
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {/* Spotlight target */}
      <mesh ref={spotlightTarget} position={[0, -3, 0]} />
      
      <mesh receiveShadow>
        {/* Base ambient light */}
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />

        {/* Main directional light for overall illumination */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Spotlight for focused illumination */}
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={0.5}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          target={spotlightTarget.current} // Attach target
        />

        {/* Render the 3D model */}
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.65 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
          castShadow
          receiveShadow
        />
      </mesh>
    </>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // Disable zooming
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableRotate={true} // Allow rotation
          rotateSpeed={0.5}
          dampingFactor={0.05}
          enableDamping={true}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;