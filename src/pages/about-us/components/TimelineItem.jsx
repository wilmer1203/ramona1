import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TimelineItem = ({ item, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* Content Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full lg:w-5/12 bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}
            >
              <Icon name={item?.icon} size={24} color="#ffffff" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">{item?.year}</h3>
              <p className="text-sm text-muted-foreground">{item?.date}</p>
            </div>
          </div>
          <h4 className="text-lg md:text-xl font-semibold text-foreground mb-3">{item?.title}</h4>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item?.description}</p>
          {item?.achievements && (
            <div className="mt-4 space-y-2">
              {item?.achievements?.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Timeline Connector */}
        <div className="hidden lg:flex lg:w-2/12 flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-4 border-primary bg-card shadow-lg"
            style={{ background: 'var(--color-accent)' }}
          >
            <span className="text-xl md:text-2xl font-bold" style={{ color: 'var(--color-accent-foreground)' }}>
              {index + 1}
            </span>
          </motion.div>
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className="w-1 bg-gradient-to-b from-primary to-secondary mt-4"
              style={{ minHeight: '80px' }}
            />
          )}
        </div>

        {/* Mobile Timeline Connector */}
        <div className="flex lg:hidden flex-col items-center w-full">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-12 h-12 rounded-full flex items-center justify-center border-4 border-primary bg-card shadow-lg"
            style={{ background: 'var(--color-accent)' }}
          >
            <span className="text-lg font-bold" style={{ color: 'var(--color-accent-foreground)' }}>
              {index + 1}
            </span>
          </motion.div>
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '60px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-1 bg-gradient-to-b from-primary to-secondary mt-2"
            />
          )}
        </div>

        {/* Spacer for even layout */}
        <div className="hidden lg:block lg:w-5/12" />
      </div>
    </motion.div>
  );
};

export default TimelineItem;