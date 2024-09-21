
import React from 'react';
import Ener from '../src/assets/energy.jpeg';
import Calculator from './components/calc';
import Flippings from './components/swipe';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* The whole app background is set here */}
      <div 
        style={{
          backgroundImage: `url(${Ener})`, // Full-screen background image
          backgroundSize: 'cover',          // Make sure it covers the entire area
          backgroundPosition: 'center',     // Center the image
          backgroundAttachment: 'fixed',    // Fixes the background to prevent scrolling with content
        }}
        className="min-h-screen w-full"
      >
        {/* Header Section */}
        <div className="flex flex-row justify-between bg-blue-50 p-8">
          <h1 className="text-blue-700 font-semibold text-xl">Wise</h1>

          <div className="flex gap-10 items-end">
            <h2>Contacts</h2>
            <h2>Location</h2>
          </div>
        </div>

        {/* Content section (covering background with other divs) */}
        <header
        className="bg-cover bg-center flex justify-center items-center 
                  h-[360px] md:h-[480px] lg:h-[720px]"
        style={{ backgroundImage: `url(${Ener})` }}
      >
        <h1 className="text-white text-4xl md:text-4xl lg:text-8xl flex flex-row gap-4 font-mono">
          The
          <h2 className="text-blue-600">Future</h2> of Energy is Now!
        </h1>
      </header>



      <div className=' bg-white'>

      <div className=' gap-4  p-6'>
        <div className='flex flex-col md:flex-row lg:flex-row justify-center bg-blue-50 m-2  '>
        <div className=' p-40 bg-blue-50 w-screen'>
             1.1
          </div>
        <div 
            className='p-40 bg-blue-50 w-screen relative'
            style={{
              backgroundImage: `url(${Ener})`,
              backgroundSize: 'cover', // Ensures the image covers the div entirely
              backgroundPosition: 'center', // Centers the image within the div
            }}
          >
          </div>
          </div>

<div className=' m-2 flex flex-col md:flex-row'>
<div className=' p-40 bg-blue-50 w-screen md:order-last lg:order-last'>
             1.2
          </div>
        <div 
            className='p-40 bg-blue-50 w-screen relative'
            style={{
              backgroundImage: `url(${Ener})`,
              backgroundSize: 'cover', // Ensures the image covers the div entirely
              backgroundPosition: 'center', // Centers the image within the div
            }}
          >
          </div>
          
       </div>
      
       <div className=' m-2 flex flex-col md:flex-row'>
<div className=' p-40 bg-blue-50 w-screen'>
             1.2
          </div>
        <div 
            className='p-40 bg-blue-50 w-screen relative'
            style={{
              backgroundImage: `url(${Ener})`,
              backgroundSize: 'cover', // Ensures the image covers the div entirely
              backgroundPosition: 'center', // Centers the image within the div
            }}
          >
          </div>
          
       </div>
      

      </div>
      <h5 className=' font-semibold text-xl '>  Features & Services: </h5>

      <div className=' flex flex-col md:flex-row lg:flex-row justify-center gap-10'>
        <div className=' border border-t-sky-900 border-t-8 shadow-lg p-32'>
          1
        </div>
        <div className='border border-t-sky-900 border-t-8 shadow-lg p-32'>
          2
        </div>
        <div className='border border-t-sky-900 border-t-8 shadow-lg p-32'>
          3
        </div>
      </div>
      <Calculator/>
      <div className=' bg-white p-6'></div>
      </div> 
      <div className='py-20'>
               HERE
      </div>
     <Flippings/>
     <div className=' text-white flex justify-around  bg-blue-950 h-60 p-10'>
        <div>
          foot1
        </div>
        <div>
          foot1
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;