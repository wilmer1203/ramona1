import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats?.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -4 }}
          className="bg-card rounded-xl p-4 md:p-6 border border-border shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat?.bgColor}`}>
              <Icon name={stat?.icon} size={24} color={stat?.iconColor} />
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat?.badgeColor}`}>
              {stat?.badge}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            {stat?.value}
          </h3>
          <p className="text-sm text-muted-foreground">{stat?.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsOverview;