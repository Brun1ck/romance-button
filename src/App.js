import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const buttonRef = useRef(null);

  const handleClick = () => {
    const botaoWidth = buttonRef.current.offsetWidth;
    const botaoHeight = buttonRef.current.offsetHeight;
  
    const maxX = window.innerWidth - botaoWidth;
    const maxY = window.innerHeight - botaoHeight;
  
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
    if (newX > 100 || newY > 300) {
      newX = 80 - (Math.random() * 150);
      newY= 350 - (Math.random() * 160);
    }

    console.log(newY)
    console.log(newX)
    setPosition({ x: newX, y: newY });
  };

  const oba = () => {
    alert('yay :)');
  }

  return ( 
    <body>
      
        <div className='pedido'>
          <h2>QUER CASAR COMIGO?</h2>
        </div>
        <img src="https://i.pinimg.com/originals/67/77/bc/6777bc903a7fd2b8488b42eb23185c9b.gif"></img>
        <div className='botoes'>
          <button className='botoes--sim' onClick={oba}> SIM </button>
          <button ref={buttonRef} className='botoes--nao'
          style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          onClick={handleClick}
          >
          Não
          </button>
        </div>
    </body>
  )
}

export default App;