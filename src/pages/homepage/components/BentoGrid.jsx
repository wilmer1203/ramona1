import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const BentoGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Transparencia Total",
      description: "Acceso completo a presupuestos, licitaciones y avances de proyectos en tiempo real",
      icon: "Eye",
      link: "/projects",
      gradient: "from-[#243F60] to-[#1B2F4E]", // Navy gradient
      features: ["Presupuestos Públicos", "Seguimiento en Vivo", "Reportes Mensuales"]
    },
    {
      id: 2,
      title: "Atención Ciudadana",
      description: "Sistema integrado de solicitudes, quejas y sugerencias con respuesta garantizada",
      icon: "MessageSquare",
      link: "/contact",
      gradient: "from-[#FFCC00] to-[#E6B800]", // Yellow gradient
      features: ["Respuesta 48h", "Seguimiento Digital", "Múltiples Canales"]
    },
    {
      id: 3,
      title: "Nuestra Historia",
      description: "Más de 15 años de compromiso ciudadano impulsando el desarrollo desde mayo de 2009",
      icon: "BookOpen",
      link: "/about-us",
      gradient: "from-[#C00000] to-[#A30000]", // Red gradient
      features: ["Fundado en 2009", "Logros 2009-2026", "Compromiso Social"]
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Compromiso en cada Calle</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tres pilares fundamentales que nos definen como la fuerza constructora del Municipio Sotillo
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
                <div className="relative h-full bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card?.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${card?.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon name={card?.icon} size={28} color="#ffffff" />
                    </motion.div>

                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                      {card?.title}
                    </h3>

                    <p className="text-sm lg:text-base text-muted-foreground mb-6">
                      {card?.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {card?.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card?.gradient}`}></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-sm lg:text-base">Explorar</span>
                      <Icon name="ArrowRight" size={20} />
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