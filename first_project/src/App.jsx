import { useState } from 'react';

import './App.css';
import Images from './test.jsx';
import Button from './Button.jsx';
import Opis from './opis.jsx';
import opisy from './Opisy.js';

function App() {
  const [description, setDESC]= useState("");
  const changeDESC = (DESCkey) => {
    setDESC(DESCkey);
};
  return (
    <>
      <Images/>
      <h1>Vite + React</h1>
      <div className='buttons'>
        <Button onClick={() => changeDESC("first")} isActive={description === "first"}>first</Button>
        <Button onClick={() => changeDESC("second")} isActive={description === "second"}>second</Button>
        <Button onClick={() => changeDESC("third")} isActive={description === "third"}>third</Button>
      </div>
      <div className="card">
        <Opis>{opisy[description]}</Opis>
      </div>
      
    </>
  );
}

export default App;
