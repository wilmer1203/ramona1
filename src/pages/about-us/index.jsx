import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Timeline from '../../components/ui/Timeline';
// Components migrated from Authorities
import OrganogramNode from '../authorities/components/OrganogramNode';
import AuthorityModal from '../authorities/components/AuthorityModal';
import GovernancePillars from '../authorities/components/GovernancePillars';
import LegalFramework from '../authorities/components/LegalFramework';
import TransparencyCTA from '../authorities/components/TransparencyCTA';
import LeadershipCard from '../about-us/components/LeadershipCard'; // Already here
import ValueCard from './components/ValueCard';
import ManagementReportCard from './components/ManagementReportCard';
import TestimonialCard from './components/TestimonialCard';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Data from Authorities Page Removed (Moved back to Authorities) ---

  const timelineData = [
    {
      year: "2009",
      date: "08 de Mayo",
      title: "Fundación de COVIMUS S.A.",
      description: "Inscripción formal ante el Registro Mercantil Tercero del Estado Anzoátegui como Empresa de Producción Social, marcando el inicio de una nueva era en la infraestructura municipal.",
      icon: "FileText",
      achievements: [
        "Inscripción en Registro Mercantil (Tomo A-43)",
        "Definición del objeto social como EPS",
        "Arranque de operaciones viales en Sotillo"
      ]
    },
    {
      year: "2010",
      date: "20 de Noviembre",
      title: "Fortalecimiento Institucional",
      description: "Aumento significativo de capital aprobado en Asamblea Extraordinaria para potenciar la capacidad técnica y operativa de la empresa en beneficio del colectivo.",
      icon: "TrendingUp",
      achievements: [
        "Aumento de capital a Bs. 40.000.000",
        "Expansión de la flota de maquinaria pesada",
        "Consolidación de la estructura gerencial"
      ]
    },
    {
      year: "2026",
      date: "Presente",
      title: "Vanguardia en Construcción",
      description: "Consolidación como la empresa líder en infraestructura y asfaltado del Municipio Sotillo mediante el Plan Operativo Anual Municipal.",
      icon: "ShieldCheck",
      achievements: [
        "Operatividad total de la Planta de Asfalto",
        "Ejecución del Plan Vialidad Sotillo",
        "Liderazgo en proyectos de impacto social"
      ]
    }
  ];

  const valuesData = [
    {
      title: "Conciencia del Deber Social",
      description: "Actitud permanente de servicio orientada a la participación ciudadana y el convencimiento de que la suerte de la sociedad depende del esfuerzo de cada uno.",
      icon: "Heart",
      examples: [
        "Iniciativas solidarias comunitarias",
        "Control fiscal sobre bases jurídicas",
        "Enfoque en el beneficio colectivo"
      ]
    },
    {
      title: "Compromiso Organizacional",
      description: "Capacidad de comprender la estructura de la organización y orientar la actuación profesional de acuerdo con los principios y objetivos de la misma.",
      icon: "Target",
      examples: [
        "Alineación con planes municipales",
        "Ética en el desempeño profesional",
        "Fidelidad a la misión institucional"
      ]
    },
    {
      title: "Visión de Futuro",
      description: "Capacidad de visualizar a la Institución como un organismo de excelencia en la Administración Pública, alcanzando metas de alto impacto.",
      icon: "TrendingUp",
      examples: [
        "Modernización tecnológica continua",
        "Excelencia operativa sostenida",
        "Planificación estratégica a largo plazo"
      ]
    }
  ];

  const missionVision = {
    mission: "Producir bienes o servicios para satisfacer necesidades sociales y materiales a través de la reinversión social de sus excedentes cuya propiedad es ejercida por el Estado en nombre de la comunidad en beneficio del colectivo; garantizando la calidad y cumpliendo con los más altos estándares de seguridad, salud, higiene y ambiente.",
    vision: "Ser reconocida como una Empresa de Producción Social, de Servicios, Mantenimiento y Construcción del sector Público, Petrolero y Petroquímico, a nivel nacional con los más altos estándares de desempeño."
  };

  const objectives = {
    general: "Crear una unidad de trabajo colectiva destinada a la producción de bienes o servicios para satisfacer necesidades sociales y materiales a través de la reinversión social de sus excedentes, impulsando proyectos de infraestructura y vialidad en el territorio del Municipio.",
    specific: [
      "Fortalecer las políticas socialistas en vialidad y saneamiento.",
      "Optimizar el mantenimiento y asfaltado del Municipio Sotillo.",
      "Coordinar obras relativas al equipamiento urbano municipal.",
      "Ejecutar proyectos de acueductos rurales y urbanos.",
      "Gestionar financiamiento para proyectos de alto impacto vial."
    ]
  };


  const testimonialsData = [
  {
    name: "Alcalde José Ramírez",
    position: "Alcalde",
    organization: "Municipio Simón Bolívar",
    quote: "La colaboración con COVIMUS ha transformado nuestra infraestructura vial. En 18 meses rehabilitaron 35 kilómetros de vías que llevaban décadas sin mantenimiento. Su profesionalismo y transparencia son ejemplares.",
    rating: 5,
    date: "Diciembre 2025",
    project: "Rehabilitación Vial Integral Municipio Bolívar",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9438107-1763299090100.png",
    imageAlt: "Professional portrait of Hispanic male mayor in dark suit with Venezuelan flag pin standing in municipal office with warm smile"
  },
  {
    name: "Dra. Carmen Velásquez",
    position: "Directora",
    organization: "Hospital General de Barcelona",
    quote: "La ampliación de nuestro hospital fue ejecutada sin interrumpir servicios médicos. COVIMUS coordinó cada detalle con nuestro equipo, cumpliendo plazos y presupuesto. Ahora atendemos 300 pacientes más diariamente.",
    rating: 5,
    date: "Octubre 2025",
    project: "Ampliación Hospital General Barcelona",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_155748a5d-1763296653785.png",
    imageAlt: "Professional portrait of Hispanic female doctor in white medical coat with stethoscope and warm smile in modern hospital corridor"
  },
  {
    name: "Prof. Luis Martínez",
    position: "Director",
    organization: "Unidad Educativa Simón Rodríguez",
    quote: "Nuestra escuela pasó de instalaciones precarias a un complejo educativo moderno con laboratorios, biblioteca digital y áreas deportivas. COVIMUS no solo construyó infraestructura, construyó futuro para 800 estudiantes.",
    rating: 5,
    date: "Agosto 2025",
    project: "Reconstrucción U.E. Simón Rodríguez",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1087a87b5-1763296313545.png",
    imageAlt: "Professional portrait of Hispanic male school director in blue shirt with glasses standing in modern school library with books in background"
  }];


  // Updated Data with PDF links
  const reportsData = [
    { month: "Enero", year: "2026", url: "#", type: "PDF" },
    { month: "Diciembre", year: "2025", url: "#", type: "PDF" },
    { month: "Noviembre", year: "2025", url: "#", type: "PDF" },
    { month: "Octubre", year: "2025", url: "#", type: "PDF" },
    { month: "Septiembre", year: "2025", url: "#", type: "PDF" },
    { month: "Agosto", year: "2025", url: "#", type: "PDF" },
  ];

  // Carousel State
  // const [currentIndex, setCurrentIndex] = React.useState(0);
  // const [isPaused, setIsPaused] = React.useState(false);
  // const [isResetting, setIsResetting] = React.useState(false);
  
  // const cardWidth = 220;
  // const gap = 32;
  // const stepSize = cardWidth + gap;
  // const totalOriginalItems = reportsData.length;

  // Autoplay Logic
  // useEffect(() => {
  //   if (isPaused) return;

  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [currentIndex, isPaused]);

  // Reset Logic (Infinite Loop)
  // useEffect(() => {
  //   if (currentIndex >= totalOriginalItems) {
  //     // Wait for animation to finish then reset instantly
  //     const timeout = setTimeout(() => {
  //       setIsResetting(true);
  //       setCurrentIndex(0);
  //     }, 500); // 500ms matches transition duration
  //     return () => clearTimeout(timeout);
  //   } else if (isResetting) {
  //     // Re-enable animation after reset
  //     const timeout = setTimeout(() => {
  //       setIsResetting(false);
  //     }, 50);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [currentIndex, totalOriginalItems]);

  // const handleNext = () => {
  //   if (currentIndex < doubledReports.length - 1) {
  //     setCurrentIndex(prev => prev + 1);
  //   }
  // };

  // const handlePrev = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(prev => prev - 1);
  //   }
  // };


  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-background">

        <Helmet>
          <title>Nosotros - COVIMUS | Historia, Valores y Misión</title>
          <meta name="description" content="Conoce la historia de COVIMUS desde el Decreto N° 93, nuestros valores institucionales y objetivos estratégicos para el desarrollo de Sotillo." />
        </Helmet>

        <Header />

        {/* Modal for Authority Details */}
        {/* <AuthorityModal 
          isOpen={!!selectedAuthority}
          onClose={() => setSelectedAuthority(null)}
          authority={selectedAuthority}
        /> */}

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center mt-12 pt-24 pb-12 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-950 z-10" />
             {/* Use existing Gemini image or similar abstract institutional bg */}
             <img 
               src="/assets/images/Gemini.png" 
               alt="COVIMUS Institutional" 
               className="w-full h-full object-cover opacity-30"
             />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <Icon name="Building2" size={18} color="var(--color-accent)" />
                <span className="text-xs font-bold text-white tracking-widest uppercase">Nuestra Esencia</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
                Quiénes <span className="gradient-text">Somos</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                La fuerza motriz detrás de la infraestructura social de Sotillo. Historia, valores y compromiso en cada obra.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 1. Governance & Organogram (High Importance) */}
        {/* <section className="py-24 bg-background relative overflow-hidden border-b border-border/40">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                  <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">Estructura de Mando</span>
                  <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Gobierno Corporativo</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    COVIMUS opera bajo un estricto esquema jerárquico que garantiza la toma de decisiones eficiente y la subordinación al interés colectivo.
                  </p>
              </div>

              Organogram Structure
              <div className="flex flex-col items-center">
                Level -2: Asamblea
                <div className="relative mb-12 z-10">
                    <OrganogramNode authority={asamblea} level={0} onClick={setSelectedAuthority} />
                    <div className="absolute -bottom-12 left-1/2 w-0.5 h-12 bg-slate-300 dark:bg-slate-700 -translate-x-1/2 -z-10" />
                </div>
                Level -1: Junta Directiva
                <div className="relative mb-12 z-10">
                    <OrganogramNode authority={junta} level={0} onClick={setSelectedAuthority} />
                    <div className="absolute -bottom-12 left-1/2 w-0.5 h-12 bg-slate-300 dark:bg-slate-700 -translate-x-1/2 -z-10" />
                </div>
                Level 0: Presidency
                <div className="relative mb-12 z-10">
                   <OrganogramNode authority={president} level={0} onClick={setSelectedAuthority} />
                   <div className="absolute -bottom-12 left-1/2 w-0.5 h-12 bg-slate-300 dark:bg-slate-700 -translate-x-1/2 -z-10" />
                </div>
                Level 1: Managers Container
                <div className="relative w-full max-w-4xl">
                   <div className="absolute -top-6 left-[20%] right-[20%] h-px bg-slate-300 dark:bg-slate-700 hidden md:block" />
                   <div className="absolute -top-6 left-[20%] h-6 w-px bg-slate-300 dark:bg-slate-700 hidden md:block" />
                   <div className="absolute -top-6 right-[20%] h-6 w-px bg-slate-300 dark:bg-slate-700 hidden md:block" />
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                      {managers.map((manager, idx) => (
                         <div key={manager.id} className="relative">
                            <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-slate-300 dark:bg-slate-700 -translate-x-1/2 md:hidden" />
                            <OrganogramNode authority={manager} level={1} onClick={setSelectedAuthority} />
                         </div>
                      ))}
                   </div>
                </div>
              </div>
           </div>
        </section> */}

        {/* 2. Mission & Vision - Side by Side High-End */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Mission Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-900 border border-white/5 hover:border-accent/30 transition-all duration-500 overflow-hidden"
              >
                 <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute -right-12 -top-12 bg-accent/10 w-48 h-48 rounded-full blur-[60px] group-hover:bg-accent/20 transition-all duration-500" />
                 
                 <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-2xl bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon name="Target" size={32} />
                    </div>
                    <h2 className="text-4xl font-black text-white mb-6">Misión</h2>
                    <p className="text-slate-300 text-lg leading-relaxed font-light">
                      {missionVision.mission}
                    </p>
                 </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-900 border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                 <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute -left-12 -bottom-12 bg-primary/10 w-48 h-48 rounded-full blur-[60px] group-hover:bg-primary/20 transition-all duration-500" />
                 
                 <div className="relative z-10">
                    <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon name="Eye" size={32} />
                    </div>
                    <h2 className="text-4xl font-black text-white mb-6">Visión</h2>
                    <p className="text-slate-300 text-lg leading-relaxed font-light">
                      {missionVision.vision}
                    </p>
                 </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Objectives Section (Restored Blue Animated Style) */}
        <section className="py-32 relative overflow-hidden bg-[var(--color-primary)]">
           {/* Animated Background Elements */}
           <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid-pattern.svg')] opacity-10" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/2 w-[100vw] h-[100vw] rounded-full border border-white/5 border-dashed opacity-30" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/2 -left-1/2 w-[80vw] h-[80vw] rounded-full border border-white/10 opacity-20" 
              />
           </div>

           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 
                 {/* Left: General Objective */}
                 <motion.div 
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                 >
                    <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Nuestra Meta</span>
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                       Objetivos <br/>Institucionales
                    </h2>
                    <p className="text-white/80 text-xl leading-relaxed mb-8">
                       {objectives.general}
                    </p>
                    <div className="h-1 w-32 bg-accent rounded-full" />
                 </motion.div>

                 {/* Right: Specific Objectives Cards */}
                 <div className="grid gap-4">
                    {objectives.specific.map((obj, i) => (
                       <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ scale: 1.02, x: -10 }}
                          className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/20 transition-all cursor-default"
                       >
                          <div className="bg-white text-primary font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                             {i + 1}
                          </div>
                          <p className="text-white font-medium text-lg">{obj}</p>
                       </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 3. History Timeline (Decreto 93) */}
        <section className="py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Nuestra Evolución</h2>
              <p className="text-slate-500 text-lg">Del Decreto N° 93 a la Potencia Industrial de hoy.</p>
            </div>
            <Timeline />
          </div>
        </section>

        {/* 4. Governance Pillars & Legal */}
        {/* <div className="bg-white">
           <GovernancePillars />
           <LegalFramework />
        </div> */}

        {/* Values Section (Restored Original Logic) */}
        <section className="py-20 bg-slate-900 relative">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-black text-white mb-4">Nuestros Valores</h2>
                 <p className="text-slate-400">Pilares de nuestra cultura organizacional</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {valuesData.map((value, index) => (
                    <ValueCard key={index} value={value} index={index} />
                 ))}
              </div>
           </div>
        </section>
        
        {/* 5. Transparency / Management Reports */}
        {/* <section className="py-20 bg-[#4C4C4C] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                <div>
                   <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Gestión Transparente</h2>
                   <p className="text-white/80 max-w-xl">
                      Acceso directo a los informes de gestión y rendición de cuentas.
                   </p>
                </div>
                <div className="flex gap-4">
                  <button onClick={handlePrev} className="size-12 rounded-xl border border-white/20 text-white flex items-center justify-center hover:bg-white/10"><Icon name="ChevronLeft" /></button>
                  <button onClick={handleNext} className="size-12 rounded-xl bg-accent text-slate-900 flex items-center justify-center hover:bg-yellow-400"><Icon name="ChevronRight" /></button>
                </div>
             </div>
             
             <div className="overflow-hidden">
                <motion.div 
                  className="flex gap-8"
                  animate={{ x: -currentIndex * stepSize }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {doubledReports.map((report, index) => (
                    <div key={index} className="shrink-0" style={{ width: cardWidth }}>
                      <ManagementReportCard report={report} index={index} />
                    </div>
                  ))}
                </motion.div>
             </div>
          </div>
        </section> */}

        {/* 6. Contact CTA */}
        <section className="py-20 bg-slate-950 border-t border-white/10">
           <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold text-white mb-8">¿Listo para construir el futuro?</h2>
              <div className="flex justify-center gap-4">
                 <a href="/contact" className="px-8 py-3 bg-accent text-slate-900 font-bold rounded-lg hover:shadow-lg transition-all">Contáctanos</a>
              </div>
           </div>
        </section>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUs;
