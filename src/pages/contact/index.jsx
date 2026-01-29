import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';

// Components
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactSidebar from './components/ContactSidebar';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = React.useState('reporte');

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
          <title>Atención al Ciudadano - COVIMUS | Portal de Reportes</title>
          <meta name="description" content="Portal de atención ciudadana de COVIMUS. Reporta incidencias, solicita servicios o envía sugerencias para mejorar tu comunidad en el Municipio Sotillo." />
        </Helmet>

        <Header />

        <main className="pt-16 lg:pt-20">
          {/* Main Hero Section */}
          <ContactHero />

          {/* Wrapper for content */}
          <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-8 flex flex-col gap-8">

            {/* Main Content Area: Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
              
              {/* Left Column: Form (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold leading-tight text-foreground">Detalles del Reporte</h2>
                  <p className="text-sm text-muted-foreground">Ayúdenos a identificar y solucionar problemas en la infraestructura vial.</p>
                </div>
                <ContactForm />
              </div>

              {/* Right Column: Map & Info (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                 <ContactSidebar />
              </div>

            </div>

            {/* Contractor Section */}
            <div className="mt-4 mb-8 bg-primary/10 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/20">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-card flex items-center justify-center shadow-sm text-primary border border-border">
                    <Icon name="Handshake" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">¿Eres Contratista?</h3>
                  <p className="text-muted-foreground text-sm">Regístrate en nuestro sistema de proveedores para licitaciones.</p>
                </div>
              </div>
              <button className="whitespace-nowrap px-6 h-10 bg-card border border-border hover:border-primary text-foreground font-bold text-sm rounded-lg transition-colors shadow-sm">
                 Ir al Portal de Contratistas
              </button>
            </div>

          </div>
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactPage;
