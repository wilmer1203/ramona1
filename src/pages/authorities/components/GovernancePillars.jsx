import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const pillars = [
  {
    icon: "FileText",
    title: "Transparencia Total",
    desc: "Acceso abierto a la información de gestión y rendición de cuentas clara ante el Municipio y sus ciudadanos.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: "Cpu",
    title: "Eficiencia Operativa",
    desc: "Maximización de recursos técnicos y financieros para ejecutar obras de alto impacto con menor costo.",
    color: "from-cyan-400 to-cyan-600"
  },
  {
    icon: "Heart",
    title: "Compromiso Social",
    desc: "Gestión orientada 100% al bienestar del ciudadano de Puerto La Cruz, priorizando las necesidades colectivas.",
    color: "from-red-400 to-pink-600"
  },
  {
    icon: "Shield",
    title: "Ética e Integridad",
    desc: "Cero tolerancia a la corrupción y apego estricto a la normativa legal en cada proceso administrativo.",
    color: "from-emerald-400 to-emerald-600"
  }
];

const GovernancePillars = () => {
  return (
    <section className="py-20 bg-slate-900 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Pilares de Gobernanza</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Nuestra gestión se fundamenta en cuatro principios inquebrantables que garantizan el buen gobierno corporativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group h-full"
            >
              {/* Card Background with Glass effect */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl blur-sm group-hover:bg-white/10 transition-colors" />
              
              <div className="relative h-full p-8 rounded-3xl border border-white/10 bg-slate-800/50 backdrop-blur-md flex flex-col items-center text-center">
                
                {/* Icon Wrapper */}
                <div className={`size-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={pillar.icon} size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernancePillars;
