import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CertificationBadge = ({ certification, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="bg-card rounded-lg p-4 md:p-6 shadow-md border border-border flex flex-col items-center text-center"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 md:mb-4"
        style={{ background: 'linear-gradient(135deg, var(--color-success) 0%, var(--color-primary) 100%)' }}
      >
        <Icon name={certification?.icon} size={32} color="#ffffff" />
      </motion.div>
      <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">{certification?.title}</h4>
      <p className="text-xs md:text-sm text-muted-foreground mb-2">{certification?.issuer}</p>
      <span className="text-xs text-muted-foreground">{certification?.year}</span>
      {certification?.verified && (
        <div className="mt-3 flex items-center gap-1 text-success">
          <Icon name="ShieldCheck" size={14} />
          <span className="text-xs font-medium">Verificado</span>
        </div>
      )}
    </motion.div>
  );
};

export default CertificationBadge