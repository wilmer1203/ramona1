import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ManagementCarousel = ({ leaders }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(leaders.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Safe subset of leaders for current page
  const visibleLeaders = leaders.slice(
    currentIndex * itemsPerPage,
    (currentIndex * itemsPerPage) + itemsPerPage
  );
  
  // Fill functionality if last page has fewer items (optional, but keeps layout stable)
  // For now we just render what we have.

  return (
    <div className="relative px-4 sm:px-12">
       {/* Controls */}
       <div className="absolute top-1/2 -left-2 md:-left-8 -translate-y-1/2 z-20">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-slate-800/80 border border-white/10 text-white hover:bg-accent hover:text-slate-900 transition-all shadow-lg backdrop-blur-sm"
          >
             <Icon name="ChevronLeft" size={24} />
          </button>
       </div>
       
       <div className="absolute top-1/2 -right-2 md:-right-8 -translate-y-1/2 z-20">
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-slate-800/80 border border-white/10 text-white hover:bg-accent hover:text-slate-900 transition-all shadow-lg backdrop-blur-sm"
          >
             <Icon name="ChevronRight" size={24} />
          </button>
       </div>

       {/* Track */}
       <div className="overflow-hidden min-h-[500px]">
          <AnimatePresence mode='wait'>
            <motion.div
               key={currentIndex}
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -50 }}
               transition={{ duration: 0.5, ease: "circOut" }}
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
               {visibleLeaders.map((leader, idx) => (
                  <ManagementCard key={`${currentIndex}-${idx}`} leader={leader} />
               ))}
            </motion.div>
          </AnimatePresence>
       </div>
       
       {/* Dots */}
       <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
             <button
               key={i}
               onClick={() => setCurrentIndex(i)}
               className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-slate-700'}`}
             />
          ))}
       </div>
    </div>
  );
};

const ManagementCard = ({ leader }) => (
    <motion.div 
       className="bg-slate-900 rounded-3xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all duration-300 group h-full flex flex-col"
       whileHover={{ y: -10 }}
    >
       <div className="h-64 relative overflow-hidden bg-slate-800">
          {leader.image ? (
             <img 
               src={leader.image} 
               alt={leader.name}
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               style={{ filter: 'none' }} // Explicitly full color
             />
          ) : (
             <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                <Icon name="User" size={64} className="text-slate-700" />
             </div>
          )}
          
          {/* Badge Overlay */}
          <div className="absolute top-4 left-4">
             <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-2">
                <Icon name="Briefcase" size={12} className="text-accent" />
                {leader.id || "Directiva"}
             </div>
          </div>
       </div>
       
       <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{leader.name}</h3>
          <p className="text-sm text-slate-400 font-medium mb-4">{leader.position}</p>
          
          <div className="h-px w-full bg-white/5 mb-4" />
          
          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
             {leader.bio}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
             {leader.highlights?.slice(0,2).map((h, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-blue-900/20 text-blue-300 px-2 py-1 rounded border border-blue-500/10">
                   {h}
                </span>
             ))}
          </div>
       </div>
    </motion.div>
);

export default ManagementCarousel;
