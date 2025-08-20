import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';

function App() {

  return (
    <main className="w-max-7xl mx-auto">
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
    </main>
  )
}

export default App
