
import React from 'react';
import Ener from '../src/assets/energy.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header 
        className="bg-cover bg-center flex justify-center items-center 
                  h-[360px] md:h-[480px] lg:h-[720px]"
        style={{ backgroundImage: `url(${Ener})` }}
      >
        <h1 className="text-white text-4xl md:text-4xl lg:text-8xl  font-mono">Wise Energy</h1>
      </header>
    </div>
  );
}

export default App;