import { useState } from 'react';
import Layout from '../components/Layout';
import { menuItems } from '../data/menuData';

export default function Menu({ items }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Donuts', 'Sandwiches', 'Specials'];

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <Layout title="Menu | Duffin's Donuts">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
            <p className="text-gray-600">Freshly made every day.</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-red text-white shadow-lg shadow-red-500/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 rounded-lg object-cover bg-gray-100"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <span className="text-brand-red font-bold">{item.price}</span>
                  </div>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { items: menuItems },
  };
}
