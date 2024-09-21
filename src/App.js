
import React from 'react';
import Ener from '../src/assets/energy.jpeg';
import Calculator from './components/calc';
import Flippings from './components/swipe';
import Bat from './assets/battery.jpg';
import Wind from './assets/wind.jpg';
import Solar from './assets/solar.jpg';
import Man from './assets/man.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Full background styling */}
      <div 
        style={{
          backgroundImage: `url(${Ener})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        className="min-h-screen w-full"
      >
        {/* Header */}
        <div className="flex flex-row justify-between bg-blue-50 p-8">
          <h1 className="text-blue-700 font-semibold text-xl">Wise Energy</h1>
          <div className="flex gap-10 items-end">
            <h2>Contacts</h2>
            <h2>Location</h2>
          </div>
        </div>

        {/* Main Banner Section */}
        <header
          className="bg-cover bg-center flex justify-center items-center h-[360px] md:h-[480px] lg:h-[720px]"
          style={{ backgroundImage: `url(${Ener})` }}
        >
          <h1 className="text-white text-4xl md:text-4xl lg:text-8xl flex flex-row gap-4 font-mono">
            The <span className="text-blue-600">Future</span> of Energy is Now!
          </h1>
        </header>

        {/* Content Section */}
        <div className=' bg-white'>

          {/* Energy Features Section */}
          <div className='gap-4 p-6'>
            <div className='flex flex-col md:flex-row lg:flex-row justify-center bg-blue-50 m-2'>
              {/* Efficient Battery */}
              <div className='p-40 bg-blue-50 w-screen'>
                <h2 className="text-2xl font-bold">Efficient Batteries</h2>
                <p>Innovating with the latest in battery technology to provide longer-lasting, more efficient energy storage solutions for homes and industries.</p>
              </div>
              <div 
                className='p-40 bg-blue-50 w-screen relative'
                style={{
                  backgroundImage: `url(${Bat})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>

            <div className='m-2 flex flex-col md:flex-row'>
              {/* Wind Energy */}
              <div className='p-40 bg-blue-50 w-screen md:order-last lg:order-last'>
                <h2 className="text-2xl font-bold">Wind Energy</h2>
                <p>Harnessing the power of wind to generate clean, sustainable electricity, reducing dependence on fossil fuels.</p>
              </div>
              <div 
                className='p-40 bg-blue-50 w-screen relative'
                style={{
                  backgroundImage: `url(${Wind})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>

            <div className='m-2 flex flex-col md:flex-row'>
              {/* Solar Energy */}
              <div className='p-40 bg-blue-50 w-screen'>
                <h2 className="text-2xl font-bold">Solar Energy</h2>
                <p>Using the sun's energy to power our future, with cutting-edge solar technology for homes and businesses.</p>
              </div>
              <div 
                className='p-40 bg-blue-50 w-screen relative'
                style={{
                  backgroundImage: `url(${Solar})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>

          {/* Features & Services Section */}
          <h5 className='font-semibold text-xl text-center mt-10'>Features & Services</h5>
          <div className='flex flex-col md:flex-row lg:flex-row justify-center gap-10 mt-6'>
            <div className='border border-t-sky-900 border-t-8 shadow-lg p-32'>
              <h3 className="text-xl font-semibold">Energy Consulting</h3>
              <p>Providing expert advice on energy solutions to help you optimize efficiency and reduce costs.</p>
            </div>
            <div className='border border-t-sky-900 border-t-8 shadow-lg p-32'>
              <h3 className="text-xl font-semibold">Solar Panel Installation</h3>
              <p>Installing high-quality solar panels to harness the power of the sun for your home or business.</p>
            </div>
            <div className='border border-t-sky-900 border-t-8 shadow-lg p-32'>
              <h3 className="text-xl font-semibold">Battery Storage Solutions</h3>
              <p>Providing energy storage systems to ensure continuous power, even when the sun isn't shining.</p>
            </div>
          </div>
         </div>
        
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white'>
          <div>
          <div 
                className='p-40 m-20 bg-blue-50 w-1/2 relative'
                style={{
                  backgroundImage: `url(${Man})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          
          <div className=' flex justify-center'>
          <Calculator/>

          </div>
        </div>
       

  
    
        <div className=' py-64'>

        </div>
        <div className=' bg-blue-950 text-white'>
          <Flippings/>
          <div className='flex justify-around h-60 p-10'>
            <div>
              <h4 className="text-xl font-semibold">Contact Us</h4>
              <p>Email: info@wiseenergy.com</p>
              <p>Phone: +123 456 789</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Location</h4>
              <p>123 Green Energy Street</p>
              <p>City, State, 12345</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Follow Us</h4>
              <p>Facebook | Twitter | LinkedIn</p>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
}

export default App;