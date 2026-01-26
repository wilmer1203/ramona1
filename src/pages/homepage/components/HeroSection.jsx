import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const projectHighlights = [
  {
    id: 1,
    title: "Autopista Barcelona-Puerto La Cruz",
    description: "Modernización de 45km de vialidad principal",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15102ed5d-1768010396258.png",
    imageAlt: "Modern highway with multiple lanes stretching through urban landscape with clear blue sky and modern infrastructure",
    status: "En Progreso",
    progress: 75
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a8a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 mb-6">

              <Icon name="Building2" size={20} color="var(--color-primary)" />
              <span className="text-sm font-semibold text-primary">Gobierno de Anzoátegui</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Construyendo el Futuro</span>
              <br />
              <span className="text-foreground">de Anzoátegui</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Corporación Venezolana de Infraestructura del Estado Anzoátegui - Transformando comunidades a través de proyectos de vialidad, salud y educación con transparencia y compromiso ciudadano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-white shadow-lg transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}>

                  <span className="flex items-center justify-center space-x-2">
                    <span>Ver Proyectos</span>
                    <Icon name="ArrowRight" size={20} />
                  </span>
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300"
                  style={{
                    borderColor: 'var(--color-accent)',
                    color: 'var(--color-accent-foreground)',
                    background: 'var(--color-accent)'
                  }}>

                  <span className="flex items-center justify-center space-x-2">
                    <Icon name="MessageSquare" size={20} />
                    <span>Atención Ciudadana</span>
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative">

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src={projectHighlights?.[currentProject]?.image}
                  alt={projectHighlights?.[currentProject]?.imageAlt}
                  className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
                      {projectHighlights?.[currentProject]?.status}
                    </span>
                    <span className="text-sm opacity-90">{projectHighlights?.[currentProject]?.progress}% Completado</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{projectHighlights?.[currentProject]?.title}</h3>
                  <p className="text-sm opacity-90">{projectHighlights?.[currentProject]?.description}</p>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex space-x-2">
                {projectHighlights?.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentProject ? 'bg-accent w-8' : 'bg-white/50'}`
                  }
                  aria-label={`Ver proyecto ${index + 1}`} />

                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;