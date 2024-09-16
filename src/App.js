
import React from 'react';
import Ener from '../src/assets/energy.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className=' flex flex-row gap-36 bg-blue-50 p-10'>
      <h1 className=' text-blue-950'>  
        Wise 
      </h1>
      <div className=' flex gap-10 items-end justify-end'>
      <h2 className=' flex items-end'> Contacts  </h2>
      <h2> Location  </h2>
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
        <div className='bg-blue-50  '>
          1
        </div>
        <div className=' '>
          2
        </div>
        <div className=' bg-blue-950 text-white'>
          3
        </div>
      </div>
      <div className=' flex flex-row justify-center gap-10'>
        <div>
          1
        </div>
        <div>
          2
          </div>
          <div>
          3
          </div>
      </div>


    </div>
  );
}

export default App;