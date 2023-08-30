import './style.css';
import { Canvas } from '@react-three/fiber';
import PopulationApp from './populationApp';
import TitleOverlay from './TitleOverlay';




function App() {


  return (
    <>
      
      <Canvas className='Canvas' >
        <PopulationApp />
      </Canvas>
      <TitleOverlay />
    </>
  )
}

export default App