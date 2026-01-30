import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const BentoGrid = () => {
  const services = [
    {
      id: 1,
      title: "Vialidad y Asfaltado",
      description: "Producción y colocación de asfalto de alta resistencia para las arterias viales de Sotillo.",
      icon: "Truck", 
      link: "/services/asfaltado",
      // Using Primary Blue
      gradient: "from-[#243F60] to-[#1e3a5f]", 
      textColor: "text-white",
      iconColor: "#FFCC00" // Yellow accent icon
    },
    {
      id: 2,
      title: "Ingeniería Civil",
      description: "Desarrollo de infraestructuras complejas, desde drenajes hasta edificaciones públicas.",
      icon: "Building2",
      link: "/services/civil",
      // Using Accent Yellow
      gradient: "from-[#FFCC00] to-[#e6b800]",
      textColor: "text-slate-900",
      iconColor: "#243F60" // Blue primary icon
    },
    {
      id: 3,
      title: "Mantenimiento Urbano",
      description: "Limpieza, ornato y recuperación de espacios públicos para el bienestar ciudadano.",
      icon: "Brush", // Or Shovel/Tree if available
      link: "/services/mantenimiento",
      // Using Secondary Red (Subtle)
      gradient: "from-[#C00000] to-[#a30000]",
      textColor: "text-white",
      iconColor: "#ffffff"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">
            Nuestras Operaciones
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-primary">
            Ejes de Acción <span className="text-secondary">Estratégica</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Ejecutamos soluciones integrales de infraestructura para transformar la calidad de vida en el Municipio Sotillo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={service.link} className="block h-full">
                <div className="relative h-full rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white border border-slate-100">
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div 
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transition-colors duration-300 group-hover:bg-white/20`}
                      style={{ background: index === 1 ? '#fff' : 'rgba(36, 63, 96, 0.1)' }} // Default light bg
                    >
                       {/* Icon color changes on hover via CSS classes or conditional rendering if needed. 
                           For simplicity, we keep specific icon colors but might need handling for hover contrast 
                       */}
                       <Icon name={service.icon} size={32} color={service.id === 2 ? '#243F60' : '#243F60'} className="group-hover:text-white transition-colors" />
                    </div>

                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 group-hover:${service.textColor} text-slate-800`}>
                      {service.title}
                    </h3>

                    <p className={`text-slate-500 mb-8 leading-relaxed flex-grow transition-colors duration-300 group-hover:${service.textColor === 'text-white' ? 'text-slate-100' : 'text-slate-800'}`}>
                      {service.description}
                    </p>

                    <div className={`flex items-center space-x-2 font-bold uppercase text-sm tracking-wider transition-colors duration-300 group-hover:${service.textColor} text-primary`}>
                      <span>Explorar Área</span>
                      <Icon name="ArrowRight" size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;