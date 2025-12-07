import React from 'react';
import { MenuItem } from '../types';
import { Zap, Coffee, Code, Database, Battery, Disc, ArrowUpRight } from 'lucide-react';

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Binary Espresso',
    description: 'Double shot espresso. Pure energy. 0 or 1, awake or asleep.',
    price: '250 PKR',
    category: 'Hot Bytes',
    icon: 'Zap'
  },
  {
    id: '2',
    name: 'Cyber Chai',
    description: 'Traditional Karak Chai brewed with laser precision.',
    price: '150 PKR',
    category: 'Hot Bytes',
    icon: 'Coffee'
  },
  {
    id: '3',
    name: 'Algo-Latte',
    description: 'Silky steamed milk with espresso logic. Perfectly balanced.',
    price: '350 PKR',
    category: 'Hot Bytes',
    icon: 'Code'
  },
  {
    id: '4',
    name: 'Tech-Brew Cold',
    description: 'Slow-steeped for 12 hours in our cryo-chamber.',
    price: '400 PKR',
    category: 'Cold Data',
    icon: 'Battery'
  },
  {
    id: '5',
    name: 'Data-Dump Donut',
    description: 'Glazed and filled with berry jam. A sweet stack overflow.',
    price: '120 PKR',
    category: 'Algorithm Snacks',
    icon: 'Disc'
  },
  {
    id: '6',
    name: 'Full Stack Sandwich',
    description: 'Chicken, cheese, lettuce, spicy mayo. The complete package.',
    price: '450 PKR',
    category: 'Algorithm Snacks',
    icon: 'Database'
  }
];

const Menu: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Code': return <Code className="w-6 h-6" />;
      case 'Battery': return <Battery className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Disc': return <Disc className="w-6 h-6" />;
      default: return <Coffee className="w-6 h-6" />;
    }
  };

  return (
    <section id="menu" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl font-bold text-white mb-2">System Menu</h2>
            <p className="text-gray-400 text-lg">Optimized fuel for biological engines.</p>
          </div>
          <div className="flex gap-2">
            {['Hot Bytes', 'Cold Data', 'Algorithm Snacks'].map((cat) => (
              <span key={cat} className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-gray-300 uppercase tracking-wider">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-coffee-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-coffee-400 group-hover:text-coffee-300 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-black/20">
                    {getIcon(item.icon)}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-xl font-bold text-tech-400 text-shadow-glow">{item.price}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">PKR CREDITS</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 font-display group-hover:text-coffee-100 transition-colors flex items-center gap-2">
                  {item.name}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity -translate-y-1 translate-x-1" />
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed border-l-2 border-white/5 pl-3 group-hover:border-coffee-500/50 transition-colors">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center text-xs font-mono text-gray-500 uppercase tracking-wider">
                    <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                      item.category === 'Hot Bytes' ? 'bg-orange-500' : 
                      item.category === 'Cold Data' ? 'bg-blue-500' : 'bg-purple-500'
                    }`}></span>
                    {item.category}
                  </div>
                  <button className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 px-3 py-1 rounded hover:bg-white/20">
                    ADD +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;