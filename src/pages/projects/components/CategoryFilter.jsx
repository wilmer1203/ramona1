import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
      {categories?.map((category, index) => {
        const isActive = activeCategory === category?.id;
        
        return (
          <motion.button
            key={category?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category?.id)}
            className={`
              flex items-center space-x-2 px-4 md:px-6 py-3 rounded-xl font-semibold text-sm md:text-base
              transition-all duration-300 border-2
              ${isActive 
                ? 'bg-primary text-primary-foreground border-primary shadow-lg' 
                : 'bg-card text-foreground border-border hover:border-primary hover:shadow-md'
              }
            `}
          >
            <Icon 
              name={category?.icon} 
              size={20} 
              color={isActive ? 'currentColor' : 'var(--color-primary)'} 
            />
            <span>{category?.name}</span>
            <span className={`
              px-2 py-0.5 rounded-full text-xs font-bold
              ${isActive 
                ? 'bg-primary-foreground/20 text-primary-foreground' 
                : 'bg-primary/10 text-primary'
              }
            `}>
              {category?.count}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;