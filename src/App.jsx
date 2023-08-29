import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import PopulationApp from './populationApp';
import {Html, PivotControls, TrackballControls, OrbitControls} from '@react-three/drei'
import PopulationOverlay from './PopulationOverlay';




function App() {


  return (
    <>
      
      <Canvas className='Canvas' >
        <PopulationApp />
        
      </Canvas>
      
    </>
  )
}

export default App