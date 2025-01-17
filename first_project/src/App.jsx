import './App.css'
import Images from './test.jsx'
import Button from './Button.jsx'
function App() {
const clickHandler = (text) => {
  console.log(text);
};
  return (
    <>
      <Images/>
      <div>
      
      </div>
      <h1>Vite + React</h1>
      <div className='buttons'>
        <Button onClick={() => {
          console.log("first button");
          }
        }>
        </Button>
        <Button onClick={() => {
          clickHandler("second button")
        }}></Button>
        <Button></Button>
      </div>
      <div className="card">
      </div>
      
    </>
  );
}

export default App;
