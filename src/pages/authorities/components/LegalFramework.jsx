import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const legalItems = [
  {
    icon: "Book",
    title: "Constitución de la República",
    detail: "Artículo 141",
    desc: "Fundamentamos nuestra actuación en los principios de honestidad, participación, celeridad, eficacia, eficiencia, transparencia, rendición de cuentas y responsabilidad."
  },
  {
    icon: "Landmark",
    title: "Ley Orgánica del Poder Público Municipal",
    detail: "Autonomía de Gestión",
    desc: "Operamos bajo el marco de descentralización y autonomía funcional para garantizar soluciones rápidas a las necesidades locales de Sotillo."
  },
  {
    icon: "Scroll",
    title: "Decreto de Creación N° 93",
    detail: "Año 2004",
    desc: "Documento fundacional que instituye a COVIMUS como la Entidad de Vialidad e Infraestructura del Municipio, definiendo nuestro objeto y alcance social.",
    highlight: true
  },
  {
    icon: "Scale",
    title: "Ley de Contrataciones Públicas",
    detail: "Transparencia",
    desc: "Cada obra y servicio contratado por COVIMUS cumple rigurosamente con los procesos de licitación y adjudicación previstos en la ley."
  }
];

const LegalFramework = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="lg:w-1/3 sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Icon name="Scale" size={14} />
              Seguridad Jurídica
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Marco Legal y Normativo</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              En COVIMUS, cada acción administrativa y operativa está estrictamente apegada al ordenamiento jurídico venezolano, garantizando legitimidad y confianza.
            </p>
            <div className="p-6 bg-white rounded-2xl shadow-lg border-l-4 border-primary">
              <p className="italic text-slate-700 font-medium">
                "La sujeción a la ley es la mayor garantía de libertad y justicia para nuestros ciudadanos."
              </p>
            </div>
          </div>

          {/* List Items */}
          <div className="lg:w-2/3 grid grid-cols-1 gap-6">
            {legalItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                   relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl
                   ${item.highlight 
                      ? 'bg-slate-900 text-white border-slate-800' 
                      : 'bg-white text-slate-800 border-slate-200 hover:border-primary/30'}
                `}
              >
                <div className="flex gap-6 items-start">
                  <div className={`
                    shrink-0 size-14 rounded-xl flex items-center justify-center
                    ${item.highlight ? 'bg-accent/20 text-accent' : 'bg-slate-100 text-primary'}
                  `}>
                    <Icon name={item.icon} size={28} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-1 ${item.highlight ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${item.highlight ? 'text-accent' : 'text-primary'}`}>
                      {item.detail}
                    </div>
                    <p className={`text-sm leading-relaxed ${item.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LegalFramework;
