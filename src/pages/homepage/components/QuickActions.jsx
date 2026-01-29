import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: "Gestión de Obras",
      description: "Consulta y planificación de proyectos",
      icon: "FileText",
      link: "/contact",
      color: "var(--color-primary)"
    },
    {
      id: 2,
      title: "Reportar Problema",
      description: "Notifica daños o emergencias viales",
      icon: "AlertTriangle",
      link: "/contact",
      color: "var(--color-warning)"
    },
    {
      id: 3,
      title: "Seguimiento",
      description: "Consulta el estado de tu solicitud",
      icon: "Search",
      link: "/projects",
      color: "var(--color-secondary)"
    },
    {
      id: 4,
      title: "Transparencia",
      description: "Accede a presupuestos y licitaciones",
      icon: "BarChart3",
      link: "/projects",
      color: "var(--color-success)"
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Acciones Rápidas</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Unidades de trabajo colectiva destinadas al servicio del Municipio Sotillo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions?.map((action, index) => (
            <motion.div
              key={action?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link to={action?.link}>
                <div className="bg-card rounded-xl p-6 shadow-lg border border-border transition-all duration-300 hover:shadow-2xl group">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${action?.color}15` }}
                  >
                    <Icon name={action?.icon} size={28} color={action?.color} />
                  </motion.div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {action?.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {action?.description}
                  </p>

                  <div className="flex items-center space-x-2 text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm">Acceder</span>
                    <Icon name="ArrowRight" size={16} />
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