import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValueCard = ({ value, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border relative overflow-hidden group"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, var(--color-primary) 10px, var(--color-primary) 11px)'
      }} />
      <div className="relative z-10">
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center mb-4 md:mb-6"
          style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}
        >
          <Icon name={value?.icon} size={32} color="#ffffff" />
        </motion.div>

        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
          <span className="gradient-text">{value?.title}</span>
        </h3>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
          {value?.description}
        </p>

        {value?.examples && (
          <div className="space-y-2">
            {value?.examples?.map((example, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + idx * 0.1 }}
                className="flex items-start gap-2"
              >
                <Icon name="ArrowRight" size={16} color="var(--color-accent)" className="mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{example}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      {/* Hover Effect Border */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 border-2 border-accent rounded-xl pointer-events-none"
      />
    </motion.div>
  );
};

export default ValueCard;