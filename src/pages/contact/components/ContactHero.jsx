import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative lg:py-5 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Portal de Reportes</span>
            <br />
            <span className="text-foreground">Ciudadanos</span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-primary/30 rounded-full" />
            <div className="h-1 w-24 bg-accent rounded-full" />
            <div className="h-1 w-12 bg-primary/30 rounded-full" />
          </div>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu reporte nos ayuda a construir el <span className="font-semibold text-primary">Municipio Sotillo</span>. 
            Cada sugerencia, denuncia o solicitud es una oportunidad para mejorar nuestra comunidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
