import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
    >
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center space-x-2 text-white text-sm">
            <Icon name="MapPin" size={16} />
            <span>{project?.municipality}</span>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg md:text-xl font-bold text-foreground line-clamp-2 flex-1">
            {project?.name}
          </h3>
          <div className="ml-2 flex-shrink-0">
            <Icon name={project?.categoryIcon} size={24} color="var(--color-primary)" />
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {project?.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Calendar" size={16} color="var(--color-primary)" />
              <span className="text-xs text-muted-foreground">Inicio</span>
            </div>
            <p className="text-sm font-semibold text-foreground whitespace-nowrap">
              {project?.startDate}
            </p>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="DollarSign" size={16} color="var(--color-primary)" />
              <span className="text-xs text-muted-foreground">Presupuesto</span>
            </div>
            <p className="text-sm font-semibold text-foreground whitespace-nowrap">
              {project?.budget}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Progreso</span>
            <span className="text-xs font-semibold text-foreground">{project?.progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${project?.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} color="var(--color-muted-foreground)" />
            <span className="text-xs text-muted-foreground">
              {project?.beneficiaries} beneficiarios
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onViewDetails(project)}
          >
            Ver Detalles
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;