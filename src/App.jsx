import './style.css';
import { Canvas } from '@react-three/fiber';
import TitleOverlay from './TitleOverlay';
import PopulationCube from './PopulationCube';




function App() {


  return (
    <>
      
      <Canvas className='Canvas' >
        <PopulationCube />
      </Canvas>
      <TitleOverlay />
    </>
  )
}

export default App