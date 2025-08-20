import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';

function App() {

  return (
    <main className="w-max-7xl mx-auto">
      <Navbar />
      <Hero />
      <About/>
    </main>
  )
}

export default App
