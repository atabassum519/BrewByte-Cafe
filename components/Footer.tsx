import React from 'react';
import { MapPin, Phone, Mail, Github, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/40 border-t border-white/5 pt-20 pb-10 backdrop-blur-lg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-3xl font-bold text-white mb-6">BrewByte Cafe</h3>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Rahim Yar Khan's premier digital sanctuary. 
              We compile coffee code into liquid energy.
            </p>
            <div className="flex space-x-4">
              {[Github, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-coffee-600 transition-all duration-300 border border-white/10">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs font-mono">Location Node</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 group">
                <MapPin className="w-5 h-5 mr-3 text-coffee-500 shrink-0 group-hover:text-tech-400 transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">Model Town Road,<br />Rahim Yar Khan,<br />Punjab, Pakistan</span>
              </li>
              <li className="flex items-center text-gray-400 group">
                <Phone className="w-5 h-5 mr-3 text-coffee-500 group-hover:text-tech-400 transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">+92 68 123 4567</span>
              </li>
              <li className="flex items-center text-gray-400 group">
                <Mail className="w-5 h-5 mr-3 text-coffee-500 group-hover:text-tech-400 transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">sysadmin@brewbyte.pk</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs font-mono">Uptime</h4>
            <ul className="space-y-3 text-gray-400 font-mono text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>MON - FRI</span>
                <span className="text-white">08:00 - 23:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>SATURDAY</span>
                <span className="text-white">09:00 - 00:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>SUNDAY</span>
                <span className="text-white">10:00 - 22:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-mono">
          <p>&copy; {new Date().getFullYear()} BrewByte Cafe. System Status: Normal.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <a href="#" className="hover:text-coffee-400 transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-coffee-400 transition-colors">Terms of Service</a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 flex items-center justify-center bg-white/5 rounded hover:bg-coffee-600 hover:text-white transition-all ml-4"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;