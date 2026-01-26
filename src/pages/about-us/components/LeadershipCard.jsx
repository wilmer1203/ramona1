import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const LeadershipCard = ({ leader, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group"
    >
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={leader?.image}
          alt={leader?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="absolute bottom-0 left-0 right-0 p-6"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{leader?.name}</h3>
          <p className="text-sm md:text-base text-white/80">{leader?.position}</p>
        </motion.div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon name="Award" size={18} color="var(--color-accent)" />
          <span className="text-sm font-semibold text-accent">{leader?.credentials}</span>
        </div>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          {leader?.bio}
        </p>

        {leader?.achievements && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground mb-2">Logros Destacados:</h4>
            {leader?.achievements?.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm text-muted-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        )}

        {leader?.contact && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="Mail" size={16} />
              <span>{leader?.contact}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default LeadershipCard;