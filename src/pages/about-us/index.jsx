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
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
             {/* Reduced Overlay Opacity to show image clearly */}
             <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950 z-10" />
             <img 
               src="/assets/images/nosotros.jpg" 
               alt="COVIMUS Institutional" 
               className="w-full h-full object-cover object-top opacity-100" 
             />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-white/10 mb-8 backdrop-blur-md shadow-2xl">
                <Icon name="Building2" size={18} color="var(--color-accent)" />
                <span className="text-xs font-bold text-white tracking-widest uppercase">Nuestra Esencia</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-[0.95] tracking-tight drop-shadow-xl">
                QUIÉNES <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">SOMOS</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                La fuerza motriz detrás de la infraestructura social de Sotillo. Historia, valores y compromiso en cada obra.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Mission & Vision - Zig Zag Layout with Videos */}
        <section className="bg-slate-950 overflow-hidden">
           
           {/* MISSION SECTION */}
           <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              {/* Video Side (Left) */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative h-full min-h-[400px]"
              >
                  <video 
                    src="/assets/mision_video.mp4" 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950" />
              </motion.div>

              {/* Text Side (Right) */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center p-8 lg:p-20 relative"
              >
                 <div className="max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                        Misión
                    </h2>
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-8">
                       {missionVision.mission}
                    </p>
                    <div className="h-1 w-20 bg-accent rounded-full mb-4" />
                    <span className="text-accent font-bold tracking-widest uppercase text-xs">Nuestro Propósito</span>
                 </div>
              </motion.div>
           </div>

           {/* VISION SECTION */}
           <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              {/* Text Side (Left on Desktop) */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center p-8 lg:p-20 relative order-2 lg:order-1"
              >
                 <div className="max-w-xl text-right lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                        Visión
                    </h2>
                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-8">
                       {missionVision.vision}
                    </p>
                    <div className="flex flex-col items-end lg:items-start">
                        <div className="h-1 w-20 bg-blue-500 rounded-full mb-4" />
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">Nuestro Norte</span>
                    </div>
                 </div>
              </motion.div>

              {/* Video Side (Right on Desktop) */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative h-full min-h-[400px] order-1 lg:order-2"
              >
                  <video 
                    src="/assets/vision_video.mp4" 
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-950" />
              </motion.div>
           </div>

        </section>

        {/* Objectives Section (Blueprint / Engineering Style) */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-950 to-blue-900">
           {/* Animated Background Elements */}
           <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid-pattern.svg')] opacity-20" />
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

        {/* 3.5 Nuestra Gente - Multimedia Gallery */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
               <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-30" />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-white/10 mb-6 backdrop-blur-md">
                        <Icon name="Users" size={16} color="var(--color-primary)" />
                        <span className="text-xs font-bold text-white tracking-widest uppercase">Capital Humano</span>
                     </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        El Motor de <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">COVIMUS</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                        Más de 300 profesionales, técnicos y obreros comprometidos con la transformación de Sotillo.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-[500px]">
                    {/* Item 1 - Large Left */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group min-h-[300px] md:min-h-0"
                    >
                        <video 
                          src="/assets/vision_video.mp4" 
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                             <p className="text-white font-bold text-lg">Equipo de Asfaltado</p>
                         </div>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group min-h-[150px] md:min-h-0"
                    >
                         <img src="/assets/images/motor_1.jpg" alt="Ingenieros" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div 
                         initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 row-span-2 relative rounded-3xl overflow-hidden group min-h-[316px] md:min-h-0"
                    >
                         <img src="/assets/images/1.jpg" alt="Maquinaria" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>

                     {/* Item 4 */}
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group min-h-[150px] md:min-h-0"
                    >
                         <img src="/assets/images/Impacto Real_3.jpg" alt="Supervisión" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* 4. Governance Pillars */}
        <div className="bg-slate-950">
           <GovernancePillars />
        </div>

        {/* Values Section (Parallax Background) */}
        <section className="py-24 relative overflow-hidden bg-slate-950 flex items-center">
           {/* Parallax Background - Fixed for Mobile */}
           <div 
             className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
             style={{ backgroundImage: "url('/assets/images/7.jpg')" }}
           />
           <div className="absolute inset-0 bg-slate-950/30 z-10" />

           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
              <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Nuestros Valores</h2>
                 <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto">
                    Los principios éticos que guían cada decisión y proyecto en nuestra organización.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {valuesData.map((value, index) => (
                    <ValueCard key={index} value={value} index={index} />
                 ))}
              </div>
           </div>
        </section>
        

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
