import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import TimelineItem from './components/TimelineItem';
import ValueCard from './components/ValueCard';
import ManagementReportCard from './components/ManagementReportCard';
import LeadershipCard from './components/LeadershipCard';
import TestimonialCard from './components/TestimonialCard';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Quadruple data for safe infinite loop on large screens
  const doubledReports = [...reportsData, ...reportsData, ...reportsData, ...reportsData];

  // Carousel State
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isResetting, setIsResetting] = React.useState(false);
  
  const cardWidth = 220;
  const gap = 32;
  const stepSize = cardWidth + gap;
  const totalOriginalItems = reportsData.length;

  // Autoplay Logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Reset Logic (Infinite Loop)
  useEffect(() => {
    if (currentIndex >= totalOriginalItems) {
      // Wait for animation to finish then reset instantly
      const timeout = setTimeout(() => {
        setIsResetting(true);
        setCurrentIndex(0);
      }, 500); // 500ms matches transition duration
      return () => clearTimeout(timeout);
    } else if (isResetting) {
      // Re-enable animation after reset
      const timeout = setTimeout(() => {
        setIsResetting(false);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalOriginalItems]);

  const handleNext = () => {
    if (currentIndex < doubledReports.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };


  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-background">

        <Helmet>
          <title>Nosotros - COVIMUS | Historia, Valores y Liderazgo</title>
          <meta name="description" content="Conoce la historia de COVIMUS desde el Decreto N° 93 de 2004, nuestros valores institucionales, equipo de liderazgo y compromiso con el desarrollo de infraestructura en Anzoátegui." />
        </Helmet>

        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center mt-12 pt-24 pb-12 overflow-hidden">
          {/* Gemini Background with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-slate-950/70 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950 z-10" />
            <img 
              src="/assets/images/Gemini.png" 
              alt="COVIMUS Backdrop" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center">

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                <Icon name="Building2" size={18} color="var(--color-accent)" />
                <span className="text-xs font-bold text-white tracking-widest uppercase">Nuestra Identidad</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                <span className="text-white">Construyendo el Futuro</span>
                <br />
                <span className="gradient-text drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">Sotillo en Marcha</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                COVIMUS nace con la misión de transformar la realidad urbana, 
                garantizando infraestructura de excelencia bajo un modelo de producción social único.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section (Premium Redesign) */}
        <section className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {/* Misión Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none" />
                
                <div className="relative h-full bg-slate-900 leading-relaxed p-10 lg:p-14 rounded-[22px] border border-white/10 flex flex-col items-center text-center">
                  <div className="size-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                    <Icon name="Target" size={40} />
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-white tracking-tight">Misión</h2>
                  <p className="text-slate-400 text-lg lg:text-xl leading-relaxed italic border-l-4 border-primary/40 pl-6 text-left">
                    "{missionVision.mission}"
                  </p>
                </div>
              </motion.div>

              {/* Visión Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none" />
                
                <div className="relative h-full bg-slate-900 leading-relaxed p-10 lg:p-14 rounded-[22px] border border-white/10 flex flex-col items-center text-center">
                  <div className="size-20 rounded-2xl bg-secondary/20 flex items-center justify-center mb-8 text-secondary group-hover:scale-110 transition-transform duration-500">
                    <Icon name="Eye" size={40} />
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-white tracking-tight">Visión</h2>
                  <p className="text-slate-400 text-lg lg:text-xl leading-relaxed italic border-r-4 border-secondary/40 pr-6 text-right">
                    "{missionVision.vision}"
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Objectives Section (Modern Animation) */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-[40px] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl border border-white/5"
            >
              <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
                  <div className="lg:w-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="size-16 rounded-full bg-accent flex items-center justify-center mb-8"
                    >
                      <Icon name="Star" color="var(--color-accent-foreground)" size={32} />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                      Nuestro <span className="text-accent underline decoration-accent/30 underline-offset-8">Objetivo</span> General
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-12">
                      {objectives.general}
                    </p>
                  </div>

                  <div className="lg:w-1/2">
                    <h3 className="font-bold mb-10 text-white/60 tracking-widest uppercase text-sm">Específicos para el Desarrollo</h3>
                    <div className="grid grid-cols-1 gap-6">
                      {objectives.specific.map((obj, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15 }}
                          className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                          <div className="size-10 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-lg text-slate-200 group-hover:text-white transition-colors">{obj}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16">

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">Línea de Tiempo Institucional</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Dos décadas de evolución continua, innovación y compromiso con el desarrollo sostenible de Anzoátegui
              </p>
            </motion.div>

            <div className="space-y-8 md:space-y-12 lg:space-y-16">
              {timelineData?.map((item, index) =>
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLast={index === timelineData?.length - 1} />

              )}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-32 bg-slate-950 relative">
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 md:mb-24">

              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="text-white">Nuestros</span> <span className="gradient-text">Valores</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
                Principios fundamentales que guían cada decisión y fortalecen nuestro compromiso con el bienestar colectivo.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {valuesData?.map((value, index) =>
              <ValueCard key={index} value={value} index={index} />
              )}
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16">

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">Testimonios de Aliados</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Voces de líderes comunitarios y socios institucionales que han experimentado el impacto de nuestro trabajo
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonialsData?.map((testimonial, index) =>
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
              )}
            </div>
          </div>
        </section>

        {/* Management Reports Section (Transparency) */}
        <section className="py-20 md:py-16 bg-[#4C4C4C] relative overflow-hidden">
          {/* Brand Pattern (Same as Impacto Real / FeaturedProjects) */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }} />
          </div>
          
          {/* Soft Radial Glow for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                  <Icon name="Eye" size={16} />
                  Transparencia Institucional
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                  <span className="text-white">Informes de</span> <span className="gradient-text">Gestión</span>
                </h2>
                <p className="text-white text-xl leading-relaxed font-light">
                  Consulte nuestros reportes mensuales de actividades y obras. 
                  Garantizamos el acceso a la información como pilar de nuestra gestión social.
                </p>
              </motion.div>

              <div className="flex gap-4 relative z-20">
                <button 
                  onClick={handlePrev}
                  className="size-14 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-accent/40 transition-all duration-300"
                >
                  <Icon name="ChevronLeft" size={28} />
                </button>
                <button 
                  onClick={handleNext}
                  className="size-14 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all duration-300"
                >
                  <Icon name="ChevronRight" size={28} />
                </button>
              </div>
            </div>

            <div 
              className="relative group/carousel z-10 w-full overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="w-full">
                <motion.div 
                  className="flex gap-8"
                  animate={{ x: -currentIndex * stepSize }}
                  transition={{ 
                    duration: isResetting ? 0 : 0.5, 
                    ease: "easeInOut" 
                  }}
                >
                  {doubledReports.map((report, index) => (
                    <div 
                      key={index} 
                      className="shrink-0"
                      style={{ width: cardWidth }}
                    >
                      <ManagementReportCard report={report} index={index} />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">

              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, #ffffff 15px, #ffffff 16px)'
              }} />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">

                  <Icon name="Users" size={40} color="var(--color-accent-foreground)" />
                </motion.div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Únete a Nuestra Misión
                </h2>
                <p className="text-base md:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Estamos construyendo el futuro de Anzoátegui. Si compartes nuestra visión de desarrollo sostenible 
                  y transparencia institucional, queremos conocerte.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-accent text-accent-foreground hover:shadow-lg">

                    Contáctanos
                  </motion.a>
                  <motion.a
                    href="/projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">

                    Ver Proyectos
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </motion.div>
    </AnimatePresence>);

};

export default AboutUs;