import './App.css'
import Images from './test.jsx'
import Button from './Button.jsx'
import Opis from './opis.jsx'

function App() {
const clickHandler = (text) => {
  console.log(text);
};
  return (
    <>
      <Images/>
      <h1>Vite + React</h1>
      <div className='buttons'>
        <Button color="blue" onClick={() => {console.log("first title")}}>first <Opis>Opis</Opis></Button>
        <Button title="second button" onClick={() => clickHandler("second title")}>second<Opis>oPIS</Opis></Button>
        <Button color="red" onClick={() => {console.log("third title")}}>third<Opis>Sipo</Opis></Button>
      </div>
      <div className="card">
      </div>
      
    </>
  );
}

export default App;
