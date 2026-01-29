import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ManagementReportCard = ({ report, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-primary rounded-xl p-5 shadow-lg border border-white/10 flex flex-col items-center text-center group relative overflow-hidden"
      style={{ minWidth: '220px', maxWidth: '220px' }}
    >
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="size-14 rounded-full bg-accent flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon name="FileText" size={28} className="text-accent-foreground" />
        </div>
        
        <h3 className="text-lg font-black text-white mb-1 uppercase tracking-tight">
          {report.month}
        </h3>
        <p className="text-xs font-bold text-white/80 mb-4 bg-black/20 py-1 px-3 rounded-full">
          GESTIÓN {report.year}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-accent text-accent-foreground text-xs font-black shadow-md hover:bg-accent/90 transition-colors group/btn"
        >
          <Icon name="Download" size={14} className="group-hover/btn:animate-bounce" />
          <span>DESCARGAR</span>
        </motion.button>
      </div>

      {/* Verified small badge */}
      <div className="absolute top-3 right-3 text-white/30">
        <Icon name="ShieldCheck" size={12} />
      </div>
    </motion.div>
  );
};

export default ManagementReportCard;
