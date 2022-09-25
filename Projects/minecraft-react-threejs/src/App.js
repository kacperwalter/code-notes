import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { AmbientLight } from 'three';
import { Ground } from './components/Ground';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}/>
        <AmbientLight intensity={0.5} />
        <Physics>
          <Ground>
            
          </Ground>
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
