import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HighCommandCard = ({ leader, isShareholder, percentage, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className={`relative group rounded-[2.5rem] overflow-hidden border transition-all duration-500 hover:shadow-2xl
        ${isShareholder 
            ? 'border-red-600/30 bg-gradient-to-b from-slate-900 to-black hover:border-red-600/50' 
            : 'border-slate-800 bg-slate-900 hover:border-blue-500/30'}
      `}
    >
        {/* Shareholder Badge */}
        {percentage && (
            <div className={`absolute top-6 right-6 z-20 px-4 py-1.5 rounded-full font-black text-xs tracking-widest uppercase border backdrop-blur-md shadow-lg
                ${isShareholder ? 'bg-red-600 text-white border-red-400' : 'bg-blue-600 text-white border-blue-400'}
            `}>
                Accionista {percentage}
            </div>
        )}

        {/* Image Container */}
        <div className="relative h-[280px] md:h-[320px] overflow-hidden">
            <div className={`absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent`} />
            
            {leader.image ? (
                <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
            ) : (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <Icon name="User" size={80} className="text-white/10" />
                </div>
            )}
        </div>

        {/* Content */}
        <div className="relative z-20 p-8 -mt-12">
            <div className={`mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg border backdrop-blur-md
                ${isShareholder ? 'bg-red-950/30 border-red-500/20 text-red-400' : 'bg-blue-950/30 border-blue-500/20 text-blue-400'}
            `}>
                <Icon name={isShareholder ? "Crown" : "Briefcase"} size={14} />
                <span className="text-xs font-bold uppercase tracking-widest">{leader.roleTag}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                {leader.name}
            </h3>
            <p className="text-slate-400 font-medium text-lg mb-6">{leader.position}</p>

            <div className="h-px w-full bg-white/10 mb-6" />

            <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                {leader.bio}
            </p>

            {/* Highlights */}
            <div className="space-y-2">
                {leader.highlights?.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-slate-400 transition-colors">
                        <Icon name="CheckCircle" size={12} className={isShareholder ? "text-red-500" : "text-blue-500"} />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
  );
};

const HighCommandSection = () => {
    // Placeholder Data - TO BE UPDATED WITH REAL INFO
    const leaders = [
        {
            name: "Dr. Jesús Marcano Tábata",
            position: "Alcalde del Municipio Sotillo",
            roleTag: "Autoridad Político-Administrativa",
            bio: "Líder de la transformación municipal con amplia trayectoria como Director Estadal del Ministerio de Transporte y Autoridad Única de Vivienda.",
            image: "/assets/images/Jesus.jpeg",
            highlights: ["99% Acciones (Municipio Sotillo)", "Plan Rector de Desarrollo"],
            isShareholder: true,
            percentage: "99%"
        },
        {
            name: "Gral. Gabriel Aguana Rodríguez",
            position: "Presidente del INTT",
            roleTag: "Aliado Institucional",
            bio: "Representante del Instituto Nacional de Transporte Terrestre, garantizando la alineación estratégica con las políticas nacionales de vialidad.",
            image: null, // Placeholder
            highlights: ["1% Acciones (INTT)", "Enlace Gobierno Nacional"],
            isShareholder: true,
            percentage: "1%"
        }
    ];

    const president = {
        name: "Ing. Oswaldo González",
        position: "Presidente COVIMUS S.A.",
        roleTag: "Presidente Ejecutivo",
        bio: "Ingeniero civil encargado de materializar la visión estratégica a través de la ejecución eficiente del Plan Operativo Anual.",
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a1404b5-1763299032692.png",
        highlights: ["Dirección General", "Responsable Legal y Operativo"],
        isShareholder: false
    };

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm mb-3 block">Jerarquía Suprema</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Junta de Accionistas</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        La estructura de capital de COVIMUS refleja la alianza estratégica entre el Poder Municipal y Nacional.
                    </p>
                </div>

                {/* Level 1: Shareholders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto mb-16 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                    
                    {leaders.map((leader, idx) => (
                        <HighCommandCard key={idx} leader={leader} index={idx} isShareholder={true} percentage={leader.percentage} />
                    ))}
                </div>

                {/* Connector Lines Down */}
                <div className="flex justify-center mb-8 relative h-16">
                    <div className="w-px h-full bg-gradient-to-b from-red-500/50 to-blue-500/50" />
                </div>

                {/* Level 2: President */}
                <div className="max-w-xl mx-auto">
                    <HighCommandCard leader={president} index={2} isShareholder={false} />
                </div>
            </div>
        </section>
    );
};

export default HighCommandSection;
