import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import TimelineItem from './components/TimelineItem';
import ValueCard from './components/ValueCard';
import LeadershipCard from './components/LeadershipCard';
import TestimonialCard from './components/TestimonialCard';
import CertificationBadge from './components/CertificationBadge';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timelineData = [
  {
    year: "2004",
    date: "15 de Marzo",
    title: "Decreto N° 93 - Fundación de CONVINEA",
    description: "Mediante Decreto Presidencial N° 93, se crea la Corporación Venezolana de Infraestructura del Estado Anzoátegui, estableciendo las bases para el desarrollo sistemático de infraestructura vial y obras públicas en el estado.",
    icon: "FileText",
    achievements: [
    "Establecimiento del marco legal institucional",
    "Definición de competencias y alcance territorial",
    "Creación de la estructura organizacional inicial"]

  },
  {
    year: "2006-2008",
    date: "Período de Consolidación",
    title: "Primeros Proyectos Emblemáticos",
    description: "Inicio de operaciones con proyectos piloto en infraestructura vial y educativa, estableciendo metodologías de trabajo y estándares de calidad que definirían la identidad institucional.",
    icon: "Building2",
    achievements: [
    "Rehabilitación de 45 km de vías principales",
    "Construcción de 8 centros educativos",
    "Implementación de sistemas de gestión de proyectos"]

  },
  {
    year: "2010-2015",
    date: "Expansión Regional",
    title: "Cobertura Integral del Estado",
    description: "Ampliación de operaciones a todos los municipios de Anzoátegui, desarrollando proyectos de impacto comunitario en salud, educación y vialidad con enfoque de desarrollo sostenible.",
    icon: "MapPin",
    achievements: [
    "Presencia activa en 21 municipios",
    "Más de 150 proyectos ejecutados",
    "Creación de 2,500 empleos directos"]

  },
  {
    year: "2016-2020",
    date: "Modernización Tecnológica",
    title: "Transformación Digital Institucional",
    description: "Implementación de sistemas digitales para gestión de proyectos, transparencia ciudadana y seguimiento en tiempo real, posicionando a CONVINEA como referente en gobierno electrónico.",
    icon: "Laptop",
    achievements: [
    "Portal de transparencia en línea",
    "Sistema de seguimiento de proyectos GPS",
    "Plataforma de atención ciudadana digital"]

  },
  {
    year: "2021-2024",
    date: "Sostenibilidad y Resiliencia",
    title: "Infraestructura Resiliente y Sostenible",
    description: "Adopción de estándares internacionales de construcción sostenible y desarrollo de proyectos con enfoque de adaptación al cambio climático y eficiencia energética.",
    icon: "Leaf",
    achievements: [
    "Certificación ISO 14001 en gestión ambiental",
    "15 proyectos con energía solar integrada",
    "Reducción del 30% en huella de carbono"]

  },
  {
    year: "2025-2026",
    date: "Presente y Futuro",
    title: "Innovación y Excelencia Operacional",
    description: "Consolidación como institución líder en infraestructura pública con proyectos de cuarta generación que integran tecnología, sostenibilidad y participación ciudadana activa.",
    icon: "Rocket",
    achievements: [
    "Implementación de BIM en diseño de proyectos",
    "Red de monitoreo inteligente de infraestructura",
    "Programa de innovación abierta con universidades"]

  }];


  const valuesData = [
  {
    title: "Transparencia",
    description: "Rendición de cuentas clara y accesible en cada proyecto, con información pública detallada sobre presupuestos, cronogramas y resultados de impacto comunitario.",
    icon: "Eye",
    examples: [
    "Publicación trimestral de estados financieros",
    "Portal de datos abiertos con información de proyectos",
    "Auditorías externas anuales publicadas"]

  },
  {
    title: "Excelencia",
    description: "Compromiso con los más altos estándares de calidad en diseño, construcción y gestión de proyectos, superando normativas nacionales e internacionales.",
    icon: "Award",
    examples: [
    "Certificaciones ISO 9001 y 14001",
    "Cumplimiento del 95% en plazos de entrega",
    "Índice de satisfacción ciudadana del 92%"]

  },
  {
    title: "Innovación",
    description: "Adopción de tecnologías emergentes y metodologías innovadoras para optimizar procesos, reducir costos y mejorar la experiencia ciudadana en cada interacción.",
    icon: "Lightbulb",
    examples: [
    "Uso de drones para inspección de obras",
    "Modelado BIM en proyectos complejos",
    "Inteligencia artificial para mantenimiento predictivo"]

  },
  {
    title: "Sostenibilidad",
    description: "Desarrollo de infraestructura resiliente con mínimo impacto ambiental, integrando criterios de eficiencia energética y adaptación al cambio climático.",
    icon: "TreePine",
    examples: [
    "30% de energía renovable en operaciones",
    "Gestión integral de residuos de construcción",
    "Diseños con criterios de arquitectura bioclimática"]

  },
  {
    title: "Compromiso Social",
    description: "Priorización del impacto positivo en comunidades, generando empleo local, desarrollando capacidades y mejorando la calidad de vida de los ciudadanos de Anzoátegui.",
    icon: "Users",
    examples: [
    "70% de mano de obra local en proyectos",
    "Programas de capacitación técnica gratuita",
    "Consultas comunitarias en fase de diseño"]

  },
  {
    title: "Integridad",
    description: "Actuación ética y profesional en todas las operaciones, con tolerancia cero a la corrupción y mecanismos robustos de control interno y auditoría.",
    icon: "ShieldCheck",
    examples: [
    "Código de ética institucional obligatorio",
    "Canal de denuncias anónimo 24/7",
    "Comité de ética independiente"]

  }];


  const leadershipData = [
  {
    name: "Ing. Carlos Rodríguez Méndez",
    position: "Presidente Ejecutivo",
    credentials: "Ingeniero Civil, MBA en Gestión Pública",
    bio: "Con más de 25 años de experiencia en gestión de infraestructura pública, el Ing. Rodríguez ha liderado la transformación digital de CONVINEA y la implementación de estándares internacionales de calidad.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a1404b5-1763299032692.png",
    imageAlt: "Professional portrait of Hispanic male executive in navy suit with short gray hair and confident smile in modern office setting",
    achievements: [
    "Reducción del 40% en tiempos de ejecución de proyectos",
    "Implementación exitosa de sistema de gestión ISO 9001",
    "Reconocimiento nacional por transparencia institucional"],

    contact: "carlos.rodriguez@convinea.gob.ve"
  },
  {
    name: "Arq. María Fernández Torres",
    position: "Directora de Proyectos",
    credentials: "Arquitecta, Especialista en Desarrollo Urbano Sostenible",
    bio: "Especialista en diseño urbano sostenible con enfoque en participación ciudadana, la Arq. Fernández coordina el portafolio completo de proyectos de CONVINEA con visión de largo plazo.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ddd139a7-1763300023295.png",
    imageAlt: "Professional portrait of Hispanic female architect with long dark hair in white blouse holding blueprints in modern architectural office",
    achievements: [
    "Dirección de 50+ proyectos de infraestructura educativa",
    "Certificación LEED en 8 edificios públicos",
    "Premio Nacional de Arquitectura Sostenible 2023"],

    contact: "maria.fernandez@convinea.gob.ve"
  },
  {
    name: "Lic. Roberto Gutiérrez Silva",
    position: "Director de Transparencia y Atención Ciudadana",
    credentials: "Licenciado en Administración Pública, Especialista en Gobierno Abierto",
    bio: "Líder en implementación de políticas de transparencia y datos abiertos, el Lic. Gutiérrez ha posicionado a CONVINEA como referente nacional en rendición de cuentas y participación ciudadana.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9438107-1763299090100.png",
    imageAlt: "Professional portrait of Hispanic male administrator in gray suit with glasses and warm smile in government office with Venezuelan flag",
    achievements: [
    "Creación del portal de transparencia más completo del país",
    "Reducción del 60% en tiempos de respuesta ciudadana",
    "Implementación de sistema de seguimiento en tiempo real"],

    contact: "roberto.gutierrez@convinea.gob.ve"
  }];


  const testimonialsData = [
  {
    name: "Alcalde José Ramírez",
    position: "Alcalde",
    organization: "Municipio Simón Bolívar",
    quote: "La colaboración con CONVINEA ha transformado nuestra infraestructura vial. En 18 meses rehabilitaron 35 kilómetros de vías que llevaban décadas sin mantenimiento. Su profesionalismo y transparencia son ejemplares.",
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
    quote: "La ampliación de nuestro hospital fue ejecutada sin interrumpir servicios médicos. CONVINEA coordinó cada detalle con nuestro equipo, cumpliendo plazos y presupuesto. Ahora atendemos 300 pacientes más diariamente.",
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
    quote: "Nuestra escuela pasó de instalaciones precarias a un complejo educativo moderno con laboratorios, biblioteca digital y áreas deportivas. CONVINEA no solo construyó infraestructura, construyó futuro para 800 estudiantes.",
    rating: 5,
    date: "Agosto 2025",
    project: "Reconstrucción U.E. Simón Rodríguez",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1087a87b5-1763296313545.png",
    imageAlt: "Professional portrait of Hispanic male school director in blue shirt with glasses standing in modern school library with books in background"
  }];


  const certificationsData = [
  {
    title: "ISO 9001:2015",
    issuer: "Sistemas de Gestión de Calidad",
    year: "2023",
    icon: "Award",
    verified: true
  },
  {
    title: "ISO 14001:2015",
    issuer: "Gestión Ambiental",
    year: "2023",
    icon: "Leaf",
    verified: true
  },
  {
    title: "OHSAS 18001",
    issuer: "Seguridad y Salud Ocupacional",
    year: "2024",
    icon: "ShieldCheck",
    verified: true
  },
  {
    title: "Certificación LEED",
    issuer: "Construcción Sostenible",
    year: "2024",
    icon: "Building2",
    verified: true
  },
  {
    title: "Gobierno Abierto",
    issuer: "Alianza para el Gobierno Abierto",
    year: "2025",
    icon: "Eye",
    verified: true
  },
  {
    title: "Excelencia Operacional",
    issuer: "Instituto Venezolano de Calidad",
    year: "2025",
    icon: "Star",
    verified: true
  }];


  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-background">

        <Helmet>
          <title>Nosotros - CONVINEA | Historia, Valores y Liderazgo</title>
          <meta name="description" content="Conoce la historia de CONVINEA desde el Decreto N° 93 de 2004, nuestros valores institucionales, equipo de liderazgo y compromiso con el desarrollo de infraestructura en Anzoátegui." />
        </Helmet>

        <Header />

        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, var(--color-primary) 20px, var(--color-primary) 21px)'
          }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center">

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">

                <Icon name="Building2" size={20} color="var(--color-accent)" />
                <span className="text-sm font-semibold text-accent">Nuestra Historia</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Construyendo el Futuro</span>
                <br />
                <span className="text-foreground">de Anzoátegui</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Desde 2004, CONVINEA ha sido el motor del desarrollo de infraestructura en el estado Anzoátegui, 
                transformando comunidades a través de proyectos que combinan excelencia técnica, transparencia 
                institucional y compromiso social inquebrantable.
              </p>
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
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16">

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">Nuestros Valores</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Principios fundamentales que guían cada decisión, proyecto y relación con las comunidades que servimos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {valuesData?.map((value, index) =>
              <ValueCard key={index} value={value} index={index} />
              )}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16">

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">Equipo de Liderazgo</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Profesionales comprometidos con la excelencia, la transparencia y el desarrollo sostenible de Anzoátegui
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {leadershipData?.map((leader, index) =>
              <LeadershipCard key={index} leader={leader} index={index} />
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

        {/* Certifications Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16">

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">Certificaciones y Reconocimientos</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Validación externa de nuestro compromiso con la calidad, sostenibilidad y transparencia institucional
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {certificationsData?.map((certification, index) =>
              <CertificationBadge key={index} certification={certification} index={index} />
              )}
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