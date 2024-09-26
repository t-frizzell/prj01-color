import './App.css';
import { useState } from 'react';
import DisplayColor from './DisplayColor';
import InputColor from './InputColor';

/*
  For the challenge:
  An input box for the color value
  A box to display the color value
*/

function App() {
  // Create useState to hold the color value
  const [color, setColor] = useState('white');

  return (
    <div className="App">
      <DisplayColor 
        color={color}
      />
      <InputColor 
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
