"use client";

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { sellers } from '@/lib/mockData';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms for Hero Section
  const yHeroText = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const yHeroImage = useTransform(scrollYProgress, [0, 0.2], [0, 50]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Sidebar active index logic (simple scroll spy)
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['home', 'story', 'crafts', 'workshops', 'map'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = window.innerHeight;
      setActiveSection(Math.min(sections.length - 1, Math.floor(scrollY / height)));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  return (
    <div className="relative bg-[#Fdfbf7] min-h-screen text-charcoal overflow-hidden font-sans">
      
      {/* FIXED SIDEBAR - EDITORIAL STYLE */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8">
        {sections.map((sec, i) => (
          <a key={sec} href={`#${sec}`} className="group flex items-center gap-4">
            <span className={`text-xs font-serif transition-colors ${activeSection === i ? 'text-cinnabar font-bold' : 'text-gray-400 group-hover:text-charcoal'}`}>
              0{i + 1}
            </span>
            <span className={`text-[10px] tracking-widest uppercase transition-all duration-300 ${activeSection === i ? 'opacity-100 translate-x-0 text-charcoal' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-gray-400'}`}>
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </span>
          </a>
        ))}
      </nav>

      {/* HEADER / LOGO */}
      <header className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/" className="font-serif text-3xl font-bold tracking-tighter">VAHO</Link>
        <button className="text-sm font-medium tracking-widest uppercase border border-white/50 px-6 py-2 hover:bg-white hover:text-black transition-colors rounded-full">
          Ghé Cửa Hàng
        </button>
      </header>

      <main>
        {/* 01 HOME: HERO SECTION */}
        <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Extremely large overlapping Typography behind images */}
          <motion.h1 style={{ y: yHeroText, opacity: opacityHero }} className="absolute z-0 text-[18vw] font-serif leading-none tracking-tighter text-[#eae3d5] text-center whitespace-nowrap">
            DI SẢN <br /> VIỆT.
          </motion.h1>
          
          <motion.div style={{ y: yHeroImage }} className="relative z-10 w-full max-w-4xl px-6 aspect-video flex items-center justify-center mt-20">
             <img src={sellers[0].coverImage} alt="Di sản" className="w-[80%] h-[90%] md:w-[60%] md:h-[100%] object-cover shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700" />
             <div className="absolute top-1/2 left-4 md:left-20 -translate-y-1/2 z-20 bg-[#Fdfbf7] p-6 max-w-xs shadow-xl hidden md:block">
               <span className="text-xs uppercase tracking-widest text-cinnabar border-b border-cinnabar font-bold block mb-4 w-fit">Quy chuẩn thủ công</span>
               <h3 className="font-serif text-2xl leading-tight text-charcoal mb-4">Mỗi thiết kế là một chứng nhân văn hóa.</h3>
               <p className="text-sm font-light text-gray-600 leading-relaxed">Chúng tôi mang những sản phẩm nghệ thuật thủ công đến không gian sống đương đại.</p>
             </div>
          </motion.div>
        </section>

        {/* 02 STORY: OUR STORY SECTION */}
        <section id="story" className="relative w-full min-h-screen flex items-center py-32 px-6 lg:pl-40 text-charcoal">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-lg"
            >
              <h2 className="text-6xl md:text-8xl font-serif leading-[0.85] tracking-tight mb-8">BẢN <br/> SẮC</h2>
              <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
                Chuyện kể vào những năm thập niên 90, những làng nghề thủ công Việt Nam ngày một mai một trước làn sóng công nghiệp. Với mong muốn giữ lại hồn cốt dân tộc, VaHo ra đời như một không gian tuyển chọn khắt khe nhất.
              </p>
              <p className="text-lg text-gray-700 font-light leading-relaxed mb-10">
                Ở đây không có hàng sản xuất dây chuyền vô hồn. Bạn sẽ chạm vào những lớp men rạn mất hàng tháng để nung, những mảng sơn mài ủ mình trong xưởng tối, và nghệ thuật chạm khắc đầy tự kiêu của nghệ nhân bản địa.
              </p>
              <Link href="/journal" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-cinnabar border-b border-cinnabar pb-1 hover:pr-4 transition-all">
                Đọc thêm câu chuyện <span className="text-xl">→</span>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto"
            >
               <img src={sellers[1].coverImage} alt="Story Image" className="w-full h-full object-cover rounded-tl-[60px]" />
               {/* Decorative Element mimicking leaves in the Margarita design */}
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[url('https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=200&auto=format&fit=crop')] bg-cover rounded-full border-4 border-[#Fdfbf7]"></div>
            </motion.div>
          </div>
        </section>

        {/* 03 CRAFTS: PRODUCT DISPLAY (Recipes format style) */}
        <section id="crafts" className="relative w-full py-32 bg-[#1A1A1A] text-[#Fdfbf7] overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif leading-none tracking-tighter whitespace-nowrap text-white z-0 select-none"
          >
            TÁC PHẨM
          </motion.h2>

          <div className="relative z-10 container mx-auto px-6 lg:pl-32">
            <div className="text-center mb-16">
              <span className="text-cinnabar text-sm uppercase tracking-widest font-bold">Lưu giữ ngàn năm</span>
              <h3 className="text-4xl md:text-6xl font-serif mt-4">Nghệ Thuật Kể Chuyện</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
              {sellers.slice(0, 3).map((seller, idx) => (
                <motion.div 
                  key={seller.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="group block"
                >
                  <Link href={`/store/${seller.slug}`}>
                    <div className="aspect-[4/5] overflow-hidden bg-gray-800 relative mb-6">
                      <img src={seller.coverImage} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105" alt={seller.name} />
                      <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest font-bold border border-white/20">
                        {seller.category}
                      </div>
                    </div>
                    <div className="flex border-t border-gray-700 py-4 justify-between items-start">
                      <div>
                        <h4 className="text-xl font-serif group-hover:text-cinnabar transition-colors">{seller.name}</h4>
                        <p className="text-sm text-gray-400 font-light mt-2 line-clamp-2 max-w-[80%]">{seller.bio}</p>
                      </div>
                      <span className="text-xl">↗</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 WORKSHOPS: WORKSHOPS/EXPERIENCES (Passport Style) */}
        <section id="workshops" className="relative w-full py-40 px-6 lg:pl-40 bg-[#Fdfbf7] text-charcoal">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
             <div className="col-span-1 lg:col-span-5 relative">
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-serif leading-[0.85] tracking-tight mb-8 text-cinnabar"
              >
                TRẢI <br/> NGHIỆM
              </motion.h2>
              <div className="space-y-8 mt-16 max-w-sm">
                 {[1, 2, 3].map((step) => (
                   <motion.div 
                      key={step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: step * 0.2 }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-start"
                   >
                     <div className="w-8 h-8 rounded-full bg-cinnabar text-white flex items-center justify-center font-bold font-serif shrink-0">
                       {step}
                     </div>
                     <div>
                       <h4 className="font-bold mb-1">Bước {step}</h4>
                       <p className="text-sm text-gray-600 font-light">{step === 1 ? 'Chọn trải nghiệm từ các làng nghề và nghệ nhân trên khắp Việt Nam.' : step === 2 ? 'Nhận vé QR điện tử ngay lập tức thông qua Email.' : 'Đến và thả mình vào không gian văn hóa đích thực.'}</p>
                     </div>
                   </motion.div>
                 ))}
              </div>
             </div>

             <motion.div 
                initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="col-span-1 lg:col-span-7 relative h-[600px] flex items-center justify-center overflow-visible"
             >
                {/* Mockup Tickets rotating and overlapping */}
                <img src={sellers[3].coverImage} alt="Workshop" className="absolute w-[60%] h-[70%] object-cover shadow-2xl rotate-[-10deg] -translate-x-12 z-10 border-[8px] border-white" />
                <img src={sellers[4].coverImage} alt="Workshop" className="absolute w-[60%] h-[70%] object-cover shadow-2xl rotate-[5deg] translate-x-12 z-20 border-[8px] border-white" />
             </motion.div>
          </div>
        </section>

        {/* 05 MAP: ARTISAN MAP */}
        <section id="map" className="relative w-full py-32 bg-[#ebe5da] text-charcoal border-t border-charcoal">
          <div className="container mx-auto px-6 lg:pl-32 text-center">
            <motion.h2 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="text-5xl md:text-7xl font-serif tracking-tighter mb-16"
            >
               BẢN ĐỒ NGHỆ NHÂN
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto items-center text-left">
              <div className="flex justify-center p-8 bg-[#Fdfbf7] rounded-full aspect-square relative shadow-inner">
                 <div className="absolute inset-4 rounded-full border border-dashed border-charcoal/30 flex items-center justify-center font-serif text-3xl text-gray-400">
                   Bản Đồ Điểm Đến
                 </div>
              </div>
              <div className="space-y-6">
                 {sellers.slice(3, 5).map((seller) => (
                   <Link href={`/store/${seller.slug}`} key={seller.id} className="block group border-b border-charcoal/20 pb-6 hover:border-cinnabar transition-colors">
                     <div className="flex justify-between items-end">
                       <div>
                         <h4 className="text-2xl font-serif text-charcoal group-hover:text-cinnabar transition-colors mb-2">{seller.name}</h4>
                         <p className="text-sm font-light text-gray-500">{seller.category} — Trải nghiệm Workshop</p>
                       </div>
                       <button className="bg-charcoal text-[#Fdfbf7] px-4 py-2 text-xs font-bold uppercase hover:bg-cinnabar transition-colors">Ghé Thăm</button>
                     </div>
                   </Link>
                 ))}
                 <Link href="/stores" className="block text-center pt-8 text-sm font-bold uppercase tracking-widest text-cinnabar border-b-2 border-transparent hover:border-cinnabar transition-colors w-fit mx-auto">
                   Khám phá toàn bộ danh sách
                 </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
