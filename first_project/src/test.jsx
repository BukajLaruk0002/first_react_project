import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


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
  const showImg = () => (
    <div>
      <img src="https://cdn-icons-png.flaticon.com/256/6335/6335489.png" className="logo one" alt="one logo" />
      <img src="https://cdn-icons-png.flaticon.com/256/6947/6947566.png" className="logo two" alt="two logo" />
      <img src="https://cdn-icons-png.flaticon.com/256/6947/6947565.png" className="logo three" alt="three logo" />
      <img src="https://cdn-icons-png.flaticon.com/256/6335/6335600.png" className="logo four" alt="four logo" />
    </div>
  );


export default Images;