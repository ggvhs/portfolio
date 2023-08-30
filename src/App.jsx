import './style.css';
import { Canvas } from '@react-three/fiber';
import TitleOverlay from './TitleOverlay';
import PopulationCube from './PopulationCube';
import Resume from './Resume';
import Test from './Test';



function App() {


  return (
    <>
      
      <Canvas className='Canvas' >
        <PopulationCube />
      </Canvas>
      <TitleOverlay />
      
      <Resume />
    </>
  )
}

export default App