import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const TransparencyCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-700 to-secondary" />
      <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 20%)', 
          backgroundSize: '100% 100%' 
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center size-16 rounded-full bg-white/10 backdrop-blur-sm mb-8 text-white">
            <Icon name="Eye" size={32} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Gestión de Puertas Abiertas
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Creemos que la confianza se construye con hechos. Ponemos a tu disposición los canales directos para verificar nuestra gestión y participar activamente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/proyectos" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-xl hover:bg-slate-50 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="Briefcase" size={20} />
              Ver Proyectos Ejecutados
            </Link>
            
            <Link 
              to="/contacto" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/30 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-slate-900/50 hover:border-white/40 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="MessageSquare" size={20} />
              Buzón de Atención
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 text-white/60 text-sm font-medium">
             <span className="flex items-center gap-2">
               <Icon name="CheckCircle" size={16} className="text-accent" />
               Auditorías Anuales
             </span>
             <span className="flex items-center gap-2">
               <Icon name="CheckCircle" size={16} className="text-accent" />
               Rendición de Cuentas Pública
             </span>
             <span className="flex items-center gap-2">
               <Icon name="CheckCircle" size={16} className="text-accent" />
               Atención al Ciudadano
             </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default TransparencyCTA;
