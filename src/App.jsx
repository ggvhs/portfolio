import './style.css';
import { Canvas } from '@react-three/fiber';
import TitleOverlay from './TitleOverlay';
import PopulationCube from './PopulationCube';
import Resume from './Resume';
import GithubLink from './Links/GithubLink'
// import LinkedinLink from './Links/LinkedinLink'



function App() {


  return (
    <>
      
      <Canvas className='Canvas' >
        <PopulationCube />
      </Canvas>
      <TitleOverlay />
      <GithubLink />
      <Resume />
    </>
  )
}

export default App