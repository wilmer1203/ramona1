import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import ImpactMetrics from './components/ImpactMetrics';
import BentoGrid from './components/BentoGrid';
import EulaliaBurozBanner from './components/EulaliaBurozBanner';
import QuickActions from './components/QuickActions';
import SocialProof from './components/SocialProof';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-background"
      >
        <Helmet>
          <title>CONVINEA - Corporación Venezolana de Infraestructura del Estado Anzoátegui</title>
          <meta
            name="description"
            content="CONVINEA - Construyendo el futuro de Anzoátegui. Transparencia en acción, proyectos de infraestructura, vialidad, salud y educación para el desarrollo de Venezuela."
          />
          <meta name="keywords" content="CONVINEA, Anzoátegui, infraestructura, vialidad, Venezuela, gobierno, transparencia, proyectos" />
          <meta property="og:title" content="CONVINEA - Construyendo el Futuro de Anzoátegui" />
          <meta property="og:description" content="Corporación Venezolana de Infraestructura del Estado Anzoátegui - Transformando comunidades con transparencia y compromiso ciudadano" />
          <meta property="og:type" content="website" />
        </Helmet>

        <Header />

        <main className="pt-16 lg:pt-20">
          <HeroSection />
          <ImpactMetrics />
          <BentoGrid />
          <EulaliaBurozBanner />
          <QuickActions />
          <SocialProof />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Homepage;