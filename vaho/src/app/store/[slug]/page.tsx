"use client";

import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { getStore } from '@/lib/mockData';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StorefrontPage({ params }: { params: { slug: string } }) {
  const store = getStore(params.slug);
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-[#Fdfbf7] min-h-screen font-sans text-charcoal">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-[#Fdfbf7]/80 border-b border-charcoal/10">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span>←</span> VAHO
        </Link>
        <div className="text-sm font-bold tracking-widest uppercase">{store.category}</div>
      </header>

      <main className="pt-20">
        {/* HERO SECTION EDITORIAL STYLE */}
        <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden flex items-end pb-20 px-6">
          <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
             <img src={store.coverImage} alt={store.name} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </motion.div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               className="text-white"
            >
              <span className="text-sm font-bold tracking-widest uppercase text-cinnabar block mb-4">{store.category}</span>
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.8] mb-6">{store.name}</h1>
              <p className="text-lg md:text-xl font-light max-w-lg opacity-90 leading-relaxed italic border-l-2 border-cinnabar pl-6">
                "{store.bio}"
              </p>
            </motion.div>
          </div>
        </section>

        {/* BIO & STORY */}
        <section className="py-24 px-6 relative z-20 bg-[#Fdfbf7] -mt-10 mx-6 lg:mx-20 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-8 w-fit mx-auto border border-gray-300 px-4 py-2 rounded-full">
               Bản Sắc Thương Hiệu
             </h2>
             <p className="text-xl md:text-2xl text-charcoal leading-loose font-serif text-justify md:text-center px-4">
                {store.brandStory}
             </p>
          </div>
        </section>

        {/* GALLERIES & PRODUCTS */}
        <section className="py-32 bg-white px-6">
          <div className="container mx-auto">
             <div className="flex items-center justify-between mb-16 border-b border-charcoal/20 pb-4">
               <h2 className="text-4xl font-serif text-charcoal">Tác Phẩm Đặc Quyền</h2>
               <div className="text-sm font-bold uppercase tracking-widest text-cinnabar">Explore</div>
             </div>
             
             {/* Staggered Grid Layout mimicking editorial spread */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {store.products.map((product, idx) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/shop/${product.id}`} className="group block h-full flex flex-col">
                      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6 flex-grow">
                        <img src={product.img} alt={product.title} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors"></div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-lg font-serif text-charcoal group-hover:text-cinnabar transition-colors leading-snug mb-2">
                          {product.title}
                        </h3>
                        <div className="text-sm font-bold tracking-widest">
                          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>
        
        {/* EXCLUSIVE IMAGES GALLERY (If any) */}
        {store.images.length > 0 && (
          <section className="py-20 bg-[#1A1A1A] px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {store.images.map((imgUrl, i) => (
                <div key={i} className="aspect-square opacity-60 hover:opacity-100 transition-opacity">
                  <img src={imgUrl} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Gallery detail" />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
