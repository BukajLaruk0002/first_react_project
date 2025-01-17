import './App.css'
import Images from './test.jsx'
import Button from './Button.jsx'
import Opis from './opis.jsx'
import opisy from './Opisy.js'

function App() {
  let selectedDESC = "first";

  const changeDESC = (DESCkey) => {
    selectedDESC = DESCkey;
};
  return (
    <>
      <Images/>
      <h1>Vite + React</h1>
      <div className='buttons'>
        <Button onClick={() => changeDESC("first")}>first</Button>
        <Button onClick={() => changeDESC("second")}>second</Button>
        <Button onClick={() => changeDESC("third")}>third</Button>
      </div>
      <div className="card">
        <Opis>{opisy[selectedDESC]}</Opis>
      </div>
      
    </>
  );
}

export default App;
