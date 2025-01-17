import './App.css'
import Images from './test.jsx'
import Button from './Button.jsx'
import Opis from './opis.jsx'
import opisy from './Opisy.js'

function App() {
const clickHandler = (text) => {
  console.log(text);
};
  return (
    <>
      <Images/>
      <h1>Vite + React</h1>
      <div className='buttons'>
        <Button onClick={() => {console.log("first button")}}>first</Button>
        <Button onClick={() => clickHandler("second button")}>second</Button>
        <Button onClick={() => {console.log("third button")}}>third</Button>
      </div>
      <div className="card">
        <Opis>dwljcjwdbhjfdhwcb</Opis>
      </div>
      
    </>
  );
}

export default App;
