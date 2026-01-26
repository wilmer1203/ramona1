import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'in-progress':
        return 'bg-warning text-warning-foreground';
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
          >
            <div className="bg-card rounded-2xl shadow-2xl h-full flex flex-col">
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
                <h2 className="text-xl md:text-2xl font-bold text-foreground line-clamp-1">
                  {project?.name}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Cerrar"
                >
                  <Icon name="X" size={24} color="var(--color-foreground)" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-6">
                    <div className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">
                      <Image
                        src={project?.image}
                        alt={project?.imageAlt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project?.status)}`}>
                          {getStatusText(project?.status)}
                        </span>
                      </div>
                    </div>

                    <div className="bg-muted rounded-xl p-4 md:p-6">
                      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center space-x-2">
                        <Icon name="MapPin" size={20} color="var(--color-primary)" />
                        <span>Ubicación</span>
                      </h3>
                      <iframe
                        width="100%"
                        height="300"
                        loading="lazy"
                        title={project?.name}
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps?q=${project?.coordinates?.lat},${project?.coordinates?.lng}&z=14&output=embed`}
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-3">Descripción del Proyecto</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project?.fullDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Calendar" size={18} color="var(--color-primary)" />
                          <span className="text-sm text-muted-foreground">Fecha de Inicio</span>
                        </div>
                        <p className="text-base font-semibold text-foreground">{project?.startDate}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="CalendarCheck" size={18} color="var(--color-primary)" />
                          <span className="text-sm text-muted-foreground">Fecha Estimada</span>
                        </div>
                        <p className="text-base font-semibold text-foreground">{project?.endDate}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="DollarSign" size={18} color="var(--color-primary)" />
                          <span className="text-sm text-muted-foreground">Presupuesto</span>
                        </div>
                        <p className="text-base font-semibold text-foreground">{project?.budget}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Users" size={18} color="var(--color-primary)" />
                          <span className="text-sm text-muted-foreground">Beneficiarios</span>
                        </div>
                        <p className="text-base font-semibold text-foreground">{project?.beneficiaries}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-foreground">Progreso del Proyecto</h3>
                        <span className="text-2xl font-bold text-primary">{project?.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project?.progress}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>

                    <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 md:p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3 flex items-center space-x-2">
                        <Icon name="Building2" size={20} color="var(--color-primary)" />
                        <span>Contratista</span>
                      </h3>
                      <p className="text-foreground font-semibold">{project?.contractor}</p>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 md:p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3 flex items-center space-x-2">
                        <Icon name="Target" size={20} color="var(--color-primary)" />
                        <span>Impacto Comunitario</span>
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{project?.impact}</p>
                    </div>

                    {project?.testimonial && (
                      <div className="bg-muted rounded-xl p-4 md:p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                              <Icon name="Quote" size={20} color="#ffffff" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-muted-foreground italic mb-3">"{project?.testimonial?.text}"</p>
                            <p className="text-sm font-semibold text-foreground">{project?.testimonial?.author}</p>
                            <p className="text-xs text-muted-foreground">{project?.testimonial?.role}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Button variant="outline" onClick={onClose}>
                    Cerrar
                  </Button>
                  <Button variant="default" iconName="Share2" iconPosition="left">
                    Compartir Proyecto
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;