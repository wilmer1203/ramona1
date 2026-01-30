import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  // Reset image index when project changes
  React.useEffect(() => {
    if (isOpen) {
      setActiveImageIndex(0);
    }
  }, [isOpen, project]);

  if (!project) return null;

  const images = project.images || [project.image];

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'in-progress':
        return 'bg-primary text-primary-foreground';
      case 'planned':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completado';
      case 'in-progress':
        return 'En Progreso';
      case 'planned':
        return 'Planificado';
      default:
        return 'Desconocido';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden"
          >
            <div className="bg-slate-950/90 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl h-full flex flex-col border border-white/10 overflow-hidden relative">
               {/* Decorative Glow */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5 relative z-10 bg-white/5 backdrop-blur-sm">
                <div>
                   <span className="text-xs font-bold text-accent uppercase tracking-widest mb-1 block">Ficha Técnica</span>
                   <h2 className="text-2xl md:text-3xl font-black text-white line-clamp-1">{project?.name}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8 relative z-10 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Image and Map */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
                      <AnimatePresence mode="wait">
                          <motion.div
                            key={activeImageIndex}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                          >
                             <Image
                                src={images[activeImageIndex]}
                                alt={`${project?.name} - Imagen ${activeImageIndex + 1}`}
                                className="w-full h-full object-cover"
                             />
                          </motion.div>
                      </AnimatePresence>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                      
                      {/* Carousel Controls */}
                      {images.length > 1 && (
                          <>
                             <button onClick={handlePrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-sm transition-all z-20">
                                 <Icon name="ChevronLeft" size={24} />
                             </button>
                             <button onClick={handleNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white backdrop-blur-sm transition-all z-20">
                                 <Icon name="ChevronRight" size={24} />
                             </button>
                             <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                                {images.map((_, idx) => (
                                    <div 
                                      key={idx} 
                                      className={`h-1.5 rounded-full transition-all shadow-sm ${idx === activeImageIndex ? 'w-6 bg-accent' : 'w-2 bg-white/50'}`}
                                    />
                                ))}
                             </div>
                          </>
                      )}

                      <div className="absolute bottom-4 left-4 z-20">
                         <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider border border-white/10 ${getStatusColor(project?.status)}`}>
                                {getStatusText(project?.status)}
                            </span>
                         </div>
                      </div>
                    </div>

                    <div className="bg-card/80 rounded-2xl p-6 border border-white/5">
                      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center space-x-2">
                        <Icon name="MapPin" size={20} className="text-secondary" />
                        <span>Ubicación Satelital</span>
                      </h3>
                      <div className="rounded-xl overflow-hidden h-64 border border-white/10">
                        <iframe
                            width="100%"
                            height="100%"
                            loading="lazy"
                            title={project?.name}
                            src={`https://www.google.com/maps?q=${project?.coordinates?.lat},${project?.coordinates?.lng}&z=15&output=embed&maptype=satellite`}
                            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Details */}
                  <div className="lg:col-span-7 space-y-8">
                    <div>
                      <h3 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Descripción Detallada</h3>
                      <p className="text-lg text-slate-300 leading-relaxed font-light">
                        {project?.fullDescription}
                      </p>
                    </div>
                    
                    {/* Explicit Dates */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center gap-4">
                           <div className="size-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                              <Icon name="Calendar" size={20} />
                           </div>
                           <div>
                              <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Fecha de Inicio</p>
                              <p className="text-white font-bold">{project?.startDate}</p>
                           </div>
                        </div>
                         <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-center gap-4">
                           <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                              <Icon name="Flag" size={20} />
                           </div>
                           <div>
                              <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Fecha de Culminación</p>
                              <p className="text-white font-bold">{project?.endDate}</p>
                           </div>
                        </div>
                    </div>

                    {/* Stats Grid - Replacing with 'Toneladas' and Technical Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "Asfalto", value: "542 Ton", icon: "HardHat" },
                            { label: "Concreto", value: "120 m³", icon: "Component" },
                            { label: "Inversión", value: project?.budget?.split(' ')[1], icon: "DollarSign" },
                            { label: "Personal", value: "45 Obreros", icon: "Users" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                                <div className="mb-2 text-accent">
                                    <Icon name={stat.icon} size={18} />
                                </div>
                                <p className="text-white font-bold text-sm md:text-base truncate">{stat.value}</p>
                                <p className="text-white/70 text-xs font-bold uppercase mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Progress */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-white">Avance Físico de Obra</h3>
                        <span className="text-3xl font-black text-accent">{project?.progress}%</span>
                      </div>
                      <div className="w-full bg-black/50 rounded-full h-6 overflow-hidden border border-white/10 relative">
                          {/* Grid pattern overlay on bar */}
                          <div className="absolute inset-0 z-20 bg-[url('/assets/grid-pattern.svg')] opacity-20 mix-blend-overlay" />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project?.progress}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-accent rounded-full relative z-10 box-decoration-clone shadow-[0_0_20px_rgba(var(--color-accent),0.4)]"
                        />
                      </div>
                    </div>

                    {/* Impacto Comunitario Card */}
                    <div className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 rounded-2xl p-8 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] pointer-events-none" />
                        
                        <div className="flex items-start gap-4 relative z-10">
                            <div className="size-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
                                <Icon name="Users" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">Impacto Comunitario</h3>
                                <p className="text-white/90 leading-relaxed font-light">
                                    {project?.impact || "Mejora directa en la calidad de vida de los habitantes del sector."}
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-background/80 backdrop-blur-md flex justify-end gap-4 relative z-20">
                 <button onClick={onClose} className="px-6 py-3 rounded-xl border border-white/10 text-foreground font-bold hover:bg-white/5 transition-colors">
                    Cerrar Ficha
                 </button>
                 <button className="px-8 py-3 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20 transition-all flex items-center gap-2">
                    <Icon name="Download" size={18} />
                    Descargar Memoria
                 </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;