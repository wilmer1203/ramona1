import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const OrganogramNode = ({ authority, onClick, level = 0 }) => {
  const isMain = level === 0;
  
  return (
    <div className="relative flex flex-col items-center">
      <motion.button
        onClick={() => onClick(authority)}
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative group text-left w-full
          ${isMain ? 'max-w-md' : 'max-w-sm'}
        `}
      >
        {/* Animated Gradient Border (hover effect) */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none" />
        
        <div className="relative bg-slate-900 border border-white/10 rounded-xl p-5 shadow-lg overflow-hidden h-full flex items-center gap-4 transition-colors group-hover:bg-slate-800">
             
             {/* Decor */}
             <div className="absolute top-0 right-0 p-3 opacity-5">
               <Icon name="Award" size={60} />
             </div>

             <div className="shrink-0 relative">
               <div className={`
                 rounded-full overflow-hidden border-2 border-white/10 bg-slate-800
                 ${isMain ? 'size-20' : 'size-14'}
               `}>
                 {authority.image ? (
                   <img src={authority.image} alt={authority.name} className="w-full h-full object-cover" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-white/20">
                     <Icon name="User" size={isMain ? 24 : 18} />
                   </div>
                 )}
               </div>
               {/* Status Indicator */}
               <div className="absolute bottom-0 right-0 size-3 rounded-full bg-green-500 border-2 border-slate-900" title="Activo" />
             </div>

             <div className="flex-grow min-w-0">
               <div className="text-accent text-[10px] font-bold uppercase tracking-widest mb-0.5 truncate">
                 {authority.position}
               </div>
               <h3 className={`font-bold text-white truncate ${isMain ? 'text-xl' : 'text-base'}`}>
                 {authority.name}
               </h3>
               {authority.credentials && (
                 <div className="text-white/40 text-xs truncate mt-0.5">
                   {authority.credentials}
                 </div>
               )}
             </div>

             <div className="shrink-0 text-white/20 group-hover:text-accent transition-colors">
               <Icon name="ChevronRight" size={20} />
             </div>
        </div>
      </motion.button>
    </div>
  );
};

export default OrganogramNode;
