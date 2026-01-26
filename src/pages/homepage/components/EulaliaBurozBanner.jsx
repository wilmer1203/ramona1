import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const EulaliaBurozBanner = () => {
  const achievements = [
  { icon: "Zap", value: "850 MW", label: "Capacidad Instalada" },
  { icon: "Users", value: "1.2M", label: "Hogares Beneficiados" },
  { icon: "Award", value: "2023", label: "Modernización Completa" }];


  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">

              <Icon name="Zap" size={20} color="#facc15" />
              <span className="text-sm font-semibold text-accent">Proyecto Emblemático</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Planta Termoeléctrica
              <br />
              <span className="text-accent">Eulalia Buroz</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl mb-8 opacity-90 leading-relaxed">
              Símbolo de progreso energético en Anzoátegui. Una infraestructura de clase mundial que garantiza el suministro eléctrico confiable para más de un millón de hogares venezolanos, impulsando el desarrollo industrial y mejorando la calidad de vida de nuestras comunidades.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {achievements?.map((achievement, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="text-center">

                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon name={achievement?.icon} size={24} color="#facc15" />
                  </div>
                  <p className="text-xl lg:text-2xl font-bold mb-1">{achievement?.value}</p>
                  <p className="text-xs lg:text-sm opacity-80">{achievement?.label}</p>
                </motion.div>
              )}
            </div>

            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold bg-accent text-accent-foreground shadow-lg transition-all duration-300 hover:shadow-2xl">

                <span className="flex items-center space-x-2">
                  <span>Ver Detalles del Proyecto</span>
                  <Icon name="ExternalLink" size={20} />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative">

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1659290541783-3241bc39f7c9"
                  alt="Modern thermoelectric power plant with large industrial cooling towers emitting steam against blue sky, showing advanced energy infrastructure and industrial architecture"
                  className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold mb-1">Estado del Proyecto</p>
                    <p className="text-accent text-sm">Operativo - 100% Funcional</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} color="var(--color-success)" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default EulaliaBurozBanner;