import React from 'react';
import { Coffee, Cpu, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-visible">
      
      <div className="container mx-auto px-6 z-10 text-center relative">
        {/* Status Badge */}
        <div className="inline-flex items-center justify-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.2)] animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-gray-300 text-xs font-mono tracking-[0.2em] uppercase">
            System Online <span className="text-coffee-500">//</span> RYK Node
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl md:text-8xl font-bold mb-8 text-white leading-tight tracking-tight">
          Future of <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-coffee-300 via-coffee-100 to-coffee-300">Caffeine</span>
            <div className="absolute -bottom-2 left-0 right-0 h-4 bg-coffee-500/20 blur-xl rounded-full transform scale-x-75"></div>
          </span>
          <span className="text-coffee-600">.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          BrewByte Cafe merges artisanal brewing with quantum processing. 
          The first <span className="text-tech-400 font-medium">AI-driven coffee interface</span> in Rahim Yar Khan.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => document.getElementById('ai-barista')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-coffee-600 text-white rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 overflow-hidden shadow-[0_0_30px_rgba(194,133,99,0.3)] hover:shadow-[0_0_50px_rgba(194,133,99,0.5)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-coffee-500 to-coffee-700 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-tech-600 to-tech-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <Cpu className="w-5 h-5 relative z-10 group-hover:animate-pulse" />
            <span className="relative z-10 tracking-wide">Initialize Order</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
             onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm hover:-translate-y-1"
          >
            <Coffee className="w-5 h-5" />
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-10 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3">
             <div className="w-2 h-12 bg-gradient-to-b from-coffee-500 to-transparent rounded-full"></div>
             <div className="text-left">
               <div className="text-xs text-gray-500 font-mono">BREW TEMP</div>
               <div className="text-xl font-display font-bold">94.5°C</div>
             </div>
          </div>
        </div>

        <div className="absolute bottom-20 right-10 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
          <div className="glass-panel p-4 rounded-2xl flex items-center gap-3">
             <div className="text-right">
               <div className="text-xs text-gray-500 font-mono">LATENCY</div>
               <div className="text-xl font-display font-bold text-green-400">12ms</div>
             </div>
             <div className="w-2 h-12 bg-gradient-to-b from-green-500 to-transparent rounded-full"></div>
          </div>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;