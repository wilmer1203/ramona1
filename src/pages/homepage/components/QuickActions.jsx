import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickActions = () => {
    const cards = [
    {
      id: 1,
      title: "Transparencia Total",
      description: "Acceso completo a presupuestos, licitaciones y avances de proyectos en tiempo real",
      icon: "Eye",
      link: "/projects",
      gradient: "from-blue-500 to-blue-700",
      features: ["Presupuestos Públicos", "Seguimiento en Vivo", "Reportes Mensuales"]
    },
    {
      id: 2,
      title: "Atención Ciudadana",
      description: "Sistema integrado de solicitudes, quejas y sugerencias con respuesta garantizada",
      icon: "MessageSquare",
      link: "/contact",
      gradient: "from-yellow-400 to-yellow-600",
      features: ["Respuesta 48h", "Seguimiento Digital", "Múltiples Canales"]
    },
    {
      id: 3,
      title: "Nuestra Historia",
      description: "Más de 20 años transformando Anzoátegui desde el Decreto N° 93 de 2004",
      icon: "BookOpen",
      link: "/about-us",
      gradient: "from-emerald-500 to-emerald-700",
      features: ["Decreto N° 93", "Logros 2004-2026", "Equipo Directivo"]
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-slate-900">
            <span className="gradient-text">Tu Infraestructura, Tu Voz</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-light">
            Tres pilares fundamentales de nuestro compromiso con los ciudadanos de Anzoátegui
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards?.map((card, index) => (
            <motion.div
              key={card?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link to={card?.link}>
                <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 group-hover:shadow-2xl hover:border-accent/30">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card?.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${card?.gradient} flex items-center justify-center mb-6 shadow-lg text-white`}
                    >
                      <Icon name={card?.icon} size={28} />
                    </motion.div>

                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {card?.title}
                    </h3>

                    <p className="text-sm lg:text-base text-slate-500 mb-6 leading-relaxed">
                      {card?.description}
                    </p>

                    <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                      {card?.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card?.gradient}`}></div>
                          <span className="text-sm text-slate-500 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 text-primary font-bold uppercase tracking-wider text-xs group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm">Explorar</span>
                      <Icon name="ArrowRight" size={16} />
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

export default QuickActions;