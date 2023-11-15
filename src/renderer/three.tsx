import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import Model from './logo';
import { OrthographicCamera } from '@react-three/drei';

function Three() {
  return (
    <Canvas>
      <OrthographicCamera
        makeDefault
        zoom={75}
        position={[0, 0.5, 0]}
        near={-10}
        far={5}
        rotation={[-0.25, 0, 0]}
      />
      <ambientLight intensity={1.5} />
      {/* <pointLight position={[10, 10, 10]} intensity={1} power={10000} /> */}
      <Model position={[0, 0.5, 0]} />
    </Canvas>
  );
}

export default Three;

// createRoot(document.getElementById('root')).render(
//   <Canvas>
//     <ambientLight />
//     <pointLight position={[10, 10, 10]} />
//     <Box position={[-1.2, 0, 0]} />
//     <Box position={[1.2, 0, 0]} />
//   </Canvas>,
// );
