import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AIBarista from './components/AIBarista';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 text-white selection:bg-coffee-500 selection:text-white overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-dark-900 z-[-2]"></div>
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-coffee-800/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-tech-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-coffee-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>
      
      {/* Noise Overlay */}
      <div className="bg-noise"></div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <AIBarista />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;