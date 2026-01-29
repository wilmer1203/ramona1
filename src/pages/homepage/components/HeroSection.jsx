import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const projectHighlights = [
  {
    id: 1,
    title: "Vialidad Urbana Sotillo",
    description: "Mantenimiento y asfaltado de avenidas principales",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15102ed5d-1768010396258.png",
    imageAlt: "Modern highway with multiple lanes stretching through urban landscape with clear blue sky and modern infrastructure",
    status: "En Progreso",
    progress: 85
  },
  {
    id: 2,
    title: "Hospital General del Este",
    description: "Ampliación de servicios de salud comunitaria",
    image: "https://images.unsplash.com/photo-1658131550268-8d86f719a041",
    imageAlt: "Modern hospital building exterior with white facade, large windows, and emergency entrance visible in daylight",
    status: "Completado",
    progress: 100
  },
  {
    id: 3,
    title: "Escuela Técnica Industrial",
    description: "Renovación integral de infraestructura educativa",
    image: "https://images.unsplash.com/photo-1679296036547-b57ae4b01b82",
    imageAlt: "Contemporary school building with red brick exterior, multiple floors, large windows and students visible in courtyard area",
    status: "Planificación",
    progress: 25
  }];


  const [currentProject, setCurrentProject] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectHighlights?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/av_paseo.png"
          alt="Paseo de la Cruz y el Mar - Puerto La Cruz"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8 backdrop-blur-md"
            >
              <Icon name="Building2" size={20} color="var(--color-accent)" />
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Alcaldía de Sotillo</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 leading-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] text-white">
              Liderando la Vialidad <br />
              <span className="gradient-text">en Sotillo</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Transformando el rostro de Puerto La Cruz con infraestructura de clase mundial. Expertos en pavimentación y servicios públicos bajo el modelo de producción social.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-primary shadow-lg transition-all duration-300 hover:shadow-xl text-lg"
                  style={{ background: 'var(--color-accent)' }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Icon name="MessageSquare" size={22} />
                    <span>Atención Ciudadana</span>
                  </span>
                </motion.button>
              </Link>

              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold border-2 transition-all duration-300 hover:bg-white hover:text-primary text-lg"
                  style={{
                    borderColor: '#ffffff',
                    color: '#ffffff',
                    background: 'transparent',
                  }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Ver Proyectos</span>
                    <Icon name="ArrowRight" size={22} />
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Project carousel commented for future use as requested
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            ... 
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;