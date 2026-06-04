import React, { useState } from 'react';

const Products = () => {
  const [featuredProduct, setFeaturedProduct] = useState(0);
  
  const products = [
    { name: 'UI KIT PRO', price: '$49', type: 'Design', sales: '2.3k+', featured: true },
    { name: 'TAILWIND BLOCKS', price: '$29', type: 'Code', sales: '4.1k+', featured: false },
    { name: '3D ASSETS', price: '$89', type: '3D', sales: '892+', featured: false },
  ];

  return (
    <section id="products" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Digital <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Products</span>
        </h2>
        <p className="text-gray-400 text-center mb-16">Tools I've built for creators</p>
        
        {/* Featured product spotlight */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />
          <div className="relative bg-black/50 backdrop-blur border border-cyan-500/30 rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-block px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-sm mb-4">
              ⭐ FEATURED
            </div>
            <h3 className="text-3xl md:text-5xl font-bold mb-4">{products[0].name}</h3>
            <div className="text-4xl font-bold text-cyan-400 mb-6">{products[0].price}</div>
            <p className="text-gray-300 mb-8">Complete design system with 500+ components</p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold transform hover:scale-105 transition">
              Get Access →
            </button>
            <div className="mt-4 text-sm text-gray-500">{products[0].sales} sold</div>
          </div>
        </div>
        
        {/* Product badges */}
        <div className="flex flex-wrap gap-4 justify-center">
          {products.slice(1).map((product, idx) => (
            <div 
              key={idx}
              className="group relative bg-gray-800/50 backdrop-blur rounded-2xl p-6 w-64 text-center hover:bg-gray-800 transition-all cursor-pointer"
            >
              <div className="text-3xl mb-3">{product.type === 'Code' ? '💻' : '🎨'}</div>
              <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
              <div className="text-cyan-400 font-bold mb-2">{product.price}</div>
              <div className="text-sm text-gray-500">{product.sales} sold</div>
              <button className="mt-4 px-4 py-2 bg-cyan-500/20 rounded-full text-sm opacity-0 group-hover:opacity-100 transition">
                Claim
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;