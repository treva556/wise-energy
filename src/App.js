
import React from 'react';
import Ener from '../src/assets/energy.jpeg';
import Calculator from './components/calc';
import Flippings from './components/swipe';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="flex flex-row justify-between bg-blue-50 p-10">
  <h1 className="text-blue-950">Wise</h1>
  
  <div className="flex gap-10 items-end">
    <h2>Contacts</h2>
    <h2>Location</h2>
  </div>
</div>
      <header
     
        className="bg-cover bg-center flex justify-center items-center 
                  h-[360px] md:h-[480px] lg:h-[720px]"
        style={{ backgroundImage: `url(${Ener})` }}
      >
        <h1 className="text-white text-4xl md:text-4xl lg:text-8xl  font-mono">Wise Energy</h1>
      </header>
      <div className='  p-6'>
        <div className=' py-40  bg-blue-50  '>
          1
        </div>
        <div className=' py-40 '>
          2
        </div>
        <div className=' py-40 bg-blue-950 text-white'>
          3
        </div>
      </div>
      <h5 className=' font-semibold text-xl '>  Features & Services: </h5>

      <div className=' flex flex-row justify-center gap-10'>
        <div className=' shadow-lg p-32'>
          1
        </div>
        <div className=' shadow-lg p-32'>
          2
        </div>
        <div className=' shadow-lg p-32'>
          3
        </div>
      </div>
      <Calculator/>

      <div className=' bg-blue-950 py-20'>

      </div>
     <Flippings/>
     <div className=' bg-blue-950 py-20'>

      </div>

    </div>
  );
}

export default App;