import './App.css'
import Images from './test.jsx'
/*
const Images = () => (
  <div>
    <a href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
);
*/
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Images/>
      <div>
      
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      </div>
      
    </>
  );
}

export default App;
