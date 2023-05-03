import { useState } from 'react';
import Box from './Box';
import './styles/style.css'

function App() {
    const [mousePos, setMousePos] = useState({x:0, y:0});

    const getMousePos = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    }

  return (
    <div>
      <div className="container" onMouseMove={getMousePos}>
        <Box mousePos={mousePos}/>
        <Box mousePos={mousePos}/>
        <Box mousePos={mousePos}/>
        <Box mousePos={mousePos}/>
      </div>
    </div>
  )
}

export default App;