import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border relative"
    >
      <div className="absolute top-6 right-6 opacity-10">
        <Icon name="Quote" size={48} color="var(--color-primary)" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-accent flex-shrink-0">
            <Image
              src={testimonial?.image}
              alt={testimonial?.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold text-foreground">{testimonial?.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial?.position}</p>
            <p className="text-xs text-muted-foreground">{testimonial?.organization}</p>
          </div>
        </div>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 italic">
          &ldquo;{testimonial?.quote}&rdquo;
        </p>

        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={16}
                color={i < testimonial?.rating ? 'var(--color-accent)' : 'var(--color-muted)'}
                className="fill-current"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">{testimonial?.date}</span>
        </div>

        {testimonial?.project && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={16} color="var(--color-primary)" />
              <span className="text-sm text-muted-foreground">Proyecto: {testimonial?.project}</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;