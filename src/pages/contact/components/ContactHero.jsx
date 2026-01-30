import React from 'react';
import { motion } from 'framer-motion';
import Aurora from '../../../components/ui/Aurora';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        {/* Tricolor Aurora: Yellow -> Blue -> Red */}
        <Aurora colorS="#FFCC00" colorT="#C00000" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[url('/assets/grid-pattern.svg')] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <Icon name="MessageSquare" size={14} />
            Atención Ciudadana
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
            Portal de <span className="gradient-text">Reportes</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Tu voz construye el <span className="font-semibold text-white">Municipio Sotillo</span>. 
            Ayúdanos a identificar y solucionar incidencias en tiempo real.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
