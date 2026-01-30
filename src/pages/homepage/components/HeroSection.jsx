import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image - Industrial Vibe */}
      <div className="absolute inset-0 z-0">
         <Image 
            src="https://images.unsplash.com/photo-1621939514854-546a166113d5?q=80&w=2600&auto=format&fit=crop"
            alt="Maquinaria de Asfalto COVIMUS"
            className="w-full h-full object-cover opacity-60 grayscale-[30%] scale-105"
         />
           {/* Heavy Dark Overlay for Legibility */}
         <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/30" />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center space-x-2 border-l-4 border-accent pl-4 mb-6">
                        <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">E.P.S. COVIMUS S.A.</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
                        TRANSFORMANDO <br/>
                        LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">VIALIDAD</span> <br/>
                        DE SOTILLO
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light border-l border-white/10 pl-4 py-2">
                        Ejecución de proyectos de ingeniería civil y asfaltado bajo un modelo de gestión social eficiente. Construyendo el futuro de Puerto La Cruz.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                    <Link to="/projects">
                        <button className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-yellow-400 text-slate-900 font-bold rounded-none flex items-center justify-center gap-3 transition-all uppercase tracking-wider group">
                            <span>Ver Proyectos</span>
                            <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="w-full sm:w-auto px-8 py-4 border border-white text-white hover:bg-white hover:text-slate-900 font-bold rounded-none flex items-center justify-center gap-3 transition-all uppercase tracking-wider">
                            <span>Contáctanos</span>
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Visual Stats / Highlights (Tachitec Style Cards) */}
            <div className="hidden lg:block relative">
                 {/* Floating Abstract Elements */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
                 
                 <div className="grid grid-cols-2 gap-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:border-accent/50 transition-colors group cursor-default"
                    >
                        <div className="mb-4 text-accent group-hover:scale-110 transition-transform origin-left">
                            <Icon name="HardHat" size={40} />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-1">542</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Toneladas de Asfalto</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-accent text-slate-900 p-6 mt-12 shadow-2xl shadow-accent/20"
                    >
                        <div className="mb-4">
                            <Icon name="Activity" size={40} />
                        </div>
                        <h3 className="text-3xl font-black mb-1">15</h3>
                        <p className="text-xs font-bold uppercase tracking-widest opacity-80">Obras en Ejecución</p>
                    </motion.div>

                     <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="col-span-2 bg-slate-900/80 backdrop-blur-md border-l-4 border-accent p-6 flex items-center gap-6"
                    >
                        <div className="size-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                            <Icon name="MapPin" size={24} />
                        </div>
                        <div>
                             <p className="text-xs font-bold uppercase text-slate-400 mb-1">Ubicación</p>
                             <p className="text-white font-bold text-lg">Puerto La Cruz, Municipio Sotillo</p>
                        </div>
                    </motion.div>
                 </div>
            </div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent flex items-end justify-center pb-8 z-20 pointer-events-none">
         <div className="animate-bounce text-white/30">
            <Icon name="ChevronDown" size={32} />
         </div>
      </div>
    </section>
  );
};

export default HeroSection;