import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PresidentialCard = ({ leader, contextImage, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="relative group rounded-[3rem] overflow-hidden bg-slate-900 border border-white/10 hover:border-white/20 transition-all duration-700 h-full min-h-[500px] flex flex-col md:flex-row"
    >
        {/* Context Background (Project Image) */}
        <div className="absolute inset-0 z-0">
            <img 
               src={contextImage} 
               alt="Contexto" 
               className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent md:hidden" />
        </div>

        {/* Leader Image (Left Side) */}
        <div className="relative z-10 w-full md:w-5/12 h-[400px] md:h-auto overflow-hidden">
             {leader.image ? (
                <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover object-top md:object-center drop-shadow-2xl"
                />
             ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-800">
                    <Icon name="User" size={100} className="text-white/20" />
                </div>
             )}
             {/* Gradient overlay for blending bottom on mobile */}
             <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent md:hidden" />
        </div>

        {/* Content Side (Right Side) */}
        <div className="relative z-20 w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
            
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md w-fit">
                <Icon name="Crown" size={16} className="text-yellow-400" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">{leader.roleTag}</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-[1.1]">
                {leader.name}
            </h3>
            
            <p className="text-xl text-blue-400 font-bold mb-6">{leader.position}</p>
            
            <div className="h-px w-24 bg-gradient-to-r from-blue-500 to-transparent mb-8" />

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl font-light">
                {leader.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {leader.highlights?.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <Icon name="CheckCircle" size={18} className="text-green-400 shrink-0" />
                        <span className="text-sm font-medium text-slate-200">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  );
};

const HighCommandSection = () => {
    // Data with Context Images
    const alcalde = {
        name: "Dr. Jesús Marcano Tábata",
        position: "Alcalde del Municipio Sotillo",
        roleTag: "Autoridad Suprema",
        bio: "Líder visionario que impulsa la transformación integral de Puerto La Cruz, integrando la gestión política con la eficiencia técnica para el bienestar del pueblo.",
        image: "/assets/images/Jesus.jpeg",
        highlights: ["99% Acciones (Municipio Sotillo)", "Plan Rector de Desarrollo", "Gestión Social Eficiente"],
        contextImage: "/assets/images/av_paseo.png" // Context: The City
    };

    const presidente = {
        name: "Ing. Oswaldo González",
        position: "Presidente COVIMUS S.A.",
        roleTag: "Dirección Ejecutiva",
        bio: "Ingeniero civil con amplia experiencia en gerencia de proyectos de infraestructura. Responsable de materializar los planes estratégicos en obras tangibles de alta calidad.",
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a1404b5-1763299032692.png",
        highlights: ["Dirección General Operativa", "Control de Calidad", "Optimización de Recursos"],
        contextImage: "/assets/images/asphalt-plant.png" // Context: The Industry/Plant
    };

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5" />
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-3 block">Nuestra Estructura</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Alto Mando</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        La sinergia entre el liderazgo político y la capacidad técnica que impulsa a COVIMUS.
                    </p>
                </div>

                <div className="space-y-12">
                     {/* Alcalde Card */}
                     <PresidentialCard leader={alcalde} contextImage={alcalde.contextImage} index={0} />
                     
                     {/* Connector Element (Visual Hierarchy) */}
                     <div className="flex justify-center -my-6 relative z-0 opacity-50">
                        <div className="h-16 w-1 bg-gradient-to-b from-blue-500/50 to-slate-700" />
                     </div>

                     {/* Presidente Card */}
                     <PresidentialCard leader={presidente} contextImage={presidente.contextImage} index={1} />
                </div>

            </div>
        </section>
    );
};

export default HighCommandSection;
