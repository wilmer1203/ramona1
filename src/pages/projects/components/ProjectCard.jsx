import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success/20 text-success border-success/50';
      case 'in-progress':
        return 'bg-primary/20 text-primary border-primary/50';
      case 'planned':
        return 'bg-secondary/20 text-secondary border-secondary/50';
      default:
        return 'bg-muted/50 text-muted-foreground border-border';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completado';
      case 'in-progress': return 'En Progreso';
      case 'planned': return 'Planificado';
      default: return 'Desconocido';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
        // Card Container
        className="group bg-slate-900/80 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] border border-white/5 hover:border-accent/30 transition-all duration-300"
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <Image
             src={project?.image}
             alt={project?.name}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
          
          <div className="absolute top-4 right-4">
             <span className={`px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider backdrop-blur-md border border-white/10 shadow-lg ${getStatusColor(project?.status)}`}>
               {getStatusText(project?.status)}
             </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="text-2xl font-black text-white mb-1 leading-tight group-hover:text-accent transition-colors line-clamp-2">
              {project?.name}
            </h3>
            <div className="flex items-center space-x-2 text-slate-300 text-xs font-bold uppercase tracking-wide">
               <Icon name="MapPin" size={14} className="text-secondary" />
               <span>{project?.location}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 pt-4 space-y-6">
           <p className="text-white text-sm leading-relaxed line-clamp-3 font-medium">
             {project?.description}
           </p>

           {/* Metrics Grid */}
           <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/10">
              <div>
                 <span className="text-[10px] font-black uppercase text-white/70 tracking-wider block mb-1">Inversión</span>
                 <span className="text-base font-bold text-white font-mono">{project?.budget}</span>
              </div>
              <div className="text-right">
                 <span className="text-[10px] font-black uppercase text-white/70 tracking-wider block mb-1">Inicio</span>
                 <span className="text-base font-bold text-white font-mono">{project?.startDate}</span>
              </div>
           </div>

           {/* Progress Bar */}
           <div className="space-y-2">
             <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
               <span className="text-white">Avance de Obra</span>
               <span className="text-accent">{project?.progress}%</span>
             </div>
             <div className="h-2 bg-black/40 rounded-full overflow-hidden border border-white/10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project?.progress}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-accent rounded-full shadow-[0_0_10px_rgba(var(--color-accent),0.5)]"
                />
             </div>
           </div>

        <Button
          variant="default"
          size="sm"
          onClick={() => onViewDetails(project)}
          className="w-full bg-accent hover:bg-yellow-400 text-slate-900 border-none transition-all h-10 font-bold shadow-lg shadow-accent/20"
        >
          Ver Ficha Técnica
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;