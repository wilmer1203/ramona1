import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const InstitutionalAlliances = () => {
    const allies = [
        { name: "Alcaldía de Sotillo", icon: "Building2" },
        { name: "Gobernación de Anzoátegui", icon: "Map" },
        { name: "PDVSA", icon: "Droplet" },
        { name: "Gobierno Bolivariano", icon: "Flag" }
    ];

    return (
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                        Respaldo Institucional
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60">
                    {allies.map((ally, index) => (
                         <motion.div 
                            key={index}
                            whileHover={{ opacity: 1, scale: 1.05 }}
                            className="flex items-center gap-3 group cursor-default transition-all"
                         >
                            <div className="p-2 rounded-lg bg-slate-100 text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-200 transition-colors">
                                <Icon name={ally.icon} size={24} />
                            </div>
                            <span className="text-lg font-bold text-slate-400 group-hover:text-slate-800 uppercase tracking-tight transition-colors">
                                {ally.name}
                            </span>
                         </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstitutionalAlliances;
