import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import OrganogramNode from './components/OrganogramNode';
import AuthorityModal from './components/AuthorityModal';
import GovernancePillars from './components/GovernancePillars';
import LegalFramework from './components/LegalFramework';
import TransparencyCTA from './components/TransparencyCTA';
import LeadershipCard from '../about-us/components/LeadershipCard';
import Aurora from '../../components/ui/Aurora';

const Authorities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedAuthority, setSelectedAuthority] = useState(null);

  // Data for Leadership Cards and Organogram
  // Note: For the organogram explicitly, we might want generic nodes for Asamblea/Junta if no specific person is named yet,
  // but we'll use the structure to represent them.
  
  const highLevelOrg = [
    {
        id: "asamblea",
        name: "Asamblea General de Accionistas",
        position: "Máxima Autoridad",
        credentials: "Órgano Supremo",
        bio: "Órgano supremo de la compañía, encargado de la toma de decisiones estratégicas, aprobación de balances y designación de la Junta Directiva.",
        image: null, // Generic icon
        functions: ["Designar Junta Directiva", "Aprobar Balances", "Definir Rumbo Estratégico"],
        level: -2
    },
    {
        id: "junta",
        name: "Junta Directiva",
        position: "Cuerpo Colegiado",
        credentials: "Dirección Estratégica",
        bio: "Cuerpo colegiado encargado de la administración y dirección superior de la empresa, supervisando la gestión de la Presidencia.",
        image: null, 
        functions: ["Supervisar Gestión", "Aprobar Planes Operativos", "Velar por el Patrimonio"],
        level: -1
    }
  ];

  const leadershipData = [
    {
      id: "presidencia",
      name: "Ing. Oswaldo González",
      position: "Presidente",
      credentials: "Ingeniero",
      bio: "Máxima autoridad ejecutiva, responsable de la dirección estratégica y la ejecución del Plan Operativo Anual. Lidera la transformación de COVIMUS en una EPS de vanguardia, enfocada en la eficiencia técnica y el compromiso social.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a1404b5-1763299032692.png",
      functions: [
        "Dirigir la administración y funcionamiento de la empresa.",
        "Ejecutar el Plan Operativo Anual y el Presupuesto.",
        "Representar legalmente a la empresa ante organismos públicos y privados.",
        "Rendir cuentas de la gestión ante la Junta Directiva y Accionistas.",
        "Velar por el cumplimiento de los objetivos estratégicos."
      ],
      contact: "presidencia@covimus.com.ve",
      level: 0
    },
    {
      id: "admin",
      name: "Lcda. Ramona Sánchez",
      position: "Gerente de Administración",
      credentials: "Licenciada en Contaduría",
      bio: "Profesional con amplia experiencia en gestión financiera pública. Responsable de garantizar la transparencia en el manejo de los recursos y la sostenibilidad económica de la institución.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ddd139a7-1763300023295.png",
      functions: [
        "Planificar, dirigir y controlar las actividades financieras.",
        "Elaborar el anteproyecto de presupuesto anual.",
        "Gestionar la contabilidad y tesorería de la empresa.",
        "Administrar el talento humano y los procesos de nómina.",
        "Garantizar el cumplimiento de las obligaciones tributarias."
      ],
      contact: "administracion@covimus.com.ve",
      level: 1
    },
    {
      id: "legal",
      name: "Abg. Eduardo Chivico",
      position: "Consultor Jurídico",
      credentials: "Abogado",
      bio: "Garante de la legalidad en todos los actos administrativos y operativos de COVIMUS. Su gestión asegura el blindaje jurídico y el cumplimiento normativo esencial para una EPS.",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9438107-1763299090100.png",
      functions: [
        "Asesorar legalmente a la Presidencia y Junta Directiva.",
        "Revisar y redactar contratos, convenios y acuerdos.",
        "Representar judicial y extrajudicialmente a la empresa.",
        "Velar por el cumplimiento del marco legal vigente.",
        "Coordinar los procedimeintos de contrataciones públicas."
      ],
      contact: "legal@covimus.com.ve",
      level: 1
    }
  ];

  const asamblea = highLevelOrg.find(d => d.id === "asamblea");
  const junta = highLevelOrg.find(d => d.id === "junta");
  const president = leadershipData.find(d => d.level === 0);
  const managers = leadershipData.filter(d => d.level === 1);

  return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Autoridades - COVIMUS | Estructura Organizativa</title>
          <meta name="description" content="Conoce a las autoridades de COVIMUS y nuestra estructura organizativa basada en la transparencia y eficiencia." />
        </Helmet>

        <Header />

        {/* Modal for Details */}
        <AuthorityModal 
          isOpen={!!selectedAuthority}
          onClose={() => setSelectedAuthority(null)}
          authority={selectedAuthority}
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Aurora
              colorStops={["#FFCC00", "#243F60", "#C00000"]} // Institutional Colors: Yellow, Blue, Red
              blend={0}      // Increased blend for better coverage
              amplitude={3}  // Restored amplitude for movement and height
              speed={1.2}
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                 <Icon name="Users" size={16} />
                 Liderazgo Institucional
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6">
                Autoridades y <span className="gradient-text">Gobierno</span>
              </h1>
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Estructura organizativa diseñada para garantizar la eficiencia, 
                la transparencia administrativa y el impacto social en Sotillo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Governance Pillars Section */}
        {/* <GovernancePillars /> */}

        {/* RESTORED: Leadership Cards Section */}
        <section className="py-20 bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Nuestro Equipo Directivo</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                Profesionales comprometidos con la transformación y el desarrollo sostenible de nuestro municipio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipData.map((leader, index) => (
                <LeadershipCard key={index} leader={leader} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Organogram Section */}
        <section className="py-24 bg-muted/30 relative overflow-hidden border-t border-border/50">
           {/* Background Grid Pattern */}
           <div className="absolute inset-0 opacity-[0.03]" style={{ 
              backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
              backgroundSize: '32px 32px' 
           }} />

           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Organigrama Institucional</h2>
                  <p className="text-muted-foreground">Estructura jerárquica y cadena de mando de COVIMUS.</p>
              </div>

              <div className="flex flex-col items-center">
                
                {/* Level -2: Asamblea */}
                <div className="relative mb-16 z-10">
                    <OrganogramNode 
                        authority={asamblea} 
                        level={0} // Using level 0 style for big top nodes
                        onClick={setSelectedAuthority} 
                    />
                    <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-slate-700 -translate-x-1/2 -z-10" />
                </div>

                {/* Level -1: Junta Directiva */}
                <div className="relative mb-16 z-10">
                    <OrganogramNode 
                        authority={junta} 
                        level={0} 
                        onClick={setSelectedAuthority} 
                    />
                    <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-slate-700 -translate-x-1/2 -z-10" />
                </div>

                {/* Level 0: Presidency */}
                <div className="relative mb-16 z-10">
                   <OrganogramNode 
                      authority={president} 
                      level={0} 
                      onClick={setSelectedAuthority} 
                   />
                   {/* Vertical Connector Down */}
                   <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-slate-700 to-transparent -translate-x-1/2 -z-10" />
                   <div className="absolute -bottom-16 left-1/2 w-0.5 h-8 bg-slate-700 -translate-x-1/2 -z-10" />
                </div>

                {/* Level 1: Managers Container */}
                <div className="relative w-full max-w-4xl">
                   {/* Horizontal Connector Bar */}
                   <div className="absolute -top-8 left-[20%] right-[20%] h-px bg-slate-700 hidden md:block" />
                   
                   {/* Vertical Connectors for Children (Desktop) */}
                   <div className="absolute -top-8 left-[20%] h-8 w-px bg-slate-700 hidden md:block" />
                   <div className="absolute -top-8 right-[20%] h-8 w-px bg-slate-700 hidden md:block" />

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 justify-items-center">
                      {managers.map((manager, idx) => (
                         <div key={manager.id} className="relative">
                            {/* Mobile Vertical Connector */}
                            <div className="absolute -top-16 left-1/2 w-0.5 h-16 bg-slate-700 -translate-x-1/2 md:hidden" />
                            
                            <OrganogramNode 
                               authority={manager} 
                               level={1} 
                               onClick={setSelectedAuthority} 
                            />
                         </div>
                      ))}
                   </div>
                </div>

              </div>
           </div>
        </section>

        {/* Legal Framework Section */}
        <LegalFramework />

        {/* Transparency CTA Section */}
        <TransparencyCTA />

        <Footer />
      </div>
  );
};

export default Authorities;
