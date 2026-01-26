import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import ProjectCard from './components/ProjectCard';
import ProjectDetailsModal from './components/ProjectDetailsModal';
import StatsOverview from './components/StatsOverview';
import Button from '../../components/ui/Button';


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
  { id: 'all', name: 'Todos', icon: 'LayoutGrid', count: 15 },
  { id: 'health', name: 'Salud', icon: 'Heart', count: 5 },
  { id: 'education', name: 'Educación', icon: 'GraduationCap', count: 4 },
  { id: 'infrastructure', name: 'Vialidad', icon: 'Construction', count: 6 }];


  const projects = [
  {
    id: 1,
    name: "Hospital General de Barcelona",
    category: "health",
    categoryIcon: "Heart",
    municipality: "Barcelona",
    description: "Modernización integral del Hospital General de Barcelona con nuevos equipos médicos de última generación, ampliación de salas de emergencia y mejora de infraestructura hospitalaria para atender a más de 50.000 pacientes anuales.",
    fullDescription: "Proyecto de modernización integral que incluye la renovación completa de 8 quirófanos, instalación de equipos de diagnóstico por imágenes de última generación, ampliación del área de emergencias con 20 nuevas camas, y mejora de la infraestructura eléctrica y de climatización. El proyecto también contempla la capacitación del personal médico en el uso de nuevas tecnologías y la implementación de un sistema de gestión hospitalaria digital.",
    image: "https://images.unsplash.com/photo-1656932867014-1f86699fc7c4",
    imageAlt: "Modern hospital building exterior with glass facade and emergency entrance, medical staff visible through windows",
    status: "in-progress",
    progress: 65,
    startDate: "15/03/2025",
    endDate: "30/11/2026",
    budget: "VES 45.000.000,00",
    beneficiaries: "50.000+",
    contractor: "Constructora Médica del Oriente C.A.",
    coordinates: { lat: 10.1333, lng: -64.7000 },
    impact: "Este proyecto transformará la atención médica en Barcelona, reduciendo los tiempos de espera en emergencias en un 40% y permitiendo realizar procedimientos quirúrgicos más complejos que actualmente requieren traslado a otras ciudades.",
    testimonial: {
      text: "La modernización del hospital representa un cambio histórico para nuestra comunidad. Finalmente tendremos acceso a servicios médicos de calidad sin necesidad de viajar a otras ciudades.",
      author: "Dra. María Rodríguez",
      role: "Directora del Hospital General de Barcelona"
    }
  },
  {
    id: 2,
    name: "Centro de Salud Rural El Tigre",
    category: "health",
    categoryIcon: "Heart",
    municipality: "El Tigre",
    description: "Construcción de nuevo centro de salud rural equipado con consultorios especializados, laboratorio clínico, farmacia y área de emergencias para comunidades rurales del municipio.",
    fullDescription: "Nuevo centro de salud de 1.200 m² que incluye 6 consultorios médicos especializados, laboratorio clínico completo, farmacia, área de emergencias con 8 camas, sala de partos, área de vacunación y consultorios odontológicos. El centro contará con ambulancia equipada y sistema de telemedicina para consultas con especialistas en hospitales principales.",
    image: "https://images.unsplash.com/photo-1719845553716-644f7cb92baa",
    imageAlt: "Small rural health clinic building with white walls and red cross symbol, surrounded by tropical vegetation",
    status: "planned",
    progress: 15,
    startDate: "01/06/2026",
    endDate: "15/12/2026",
    budget: "VES 12.500.000,00",
    beneficiaries: "15.000+",
    contractor: "Infraestructura Social Anzoátegui C.A.",
    coordinates: { lat: 8.8894, lng: -64.2528 },
    impact: "Brindará acceso a servicios de salud de calidad a comunidades rurales que actualmente deben recorrer más de 50 km para recibir atención médica básica.",
    testimonial: {
      text: "Este centro de salud es un sueño hecho realidad para nuestras comunidades. Nuestros niños y ancianos ya no tendrán que viajar horas para recibir atención médica.",
      author: "Carlos Méndez",
      role: "Líder Comunitario de El Tigre"
    }
  },
  {
    id: 3,
    name: "Ambulatorio Tipo II Puerto La Cruz",
    category: "health",
    categoryIcon: "Heart",
    municipality: "Puerto La Cruz",
    description: "Ampliación y equipamiento del ambulatorio con nuevas especialidades médicas, área de diagnóstico por imágenes y laboratorio de análisis clínicos avanzado.",
    fullDescription: "Proyecto de ampliación que añade 800 m² de nuevas instalaciones incluyendo consultorios de cardiología, dermatología, oftalmología y pediatría. Se instalará equipo de rayos X digital, ecógrafo de última generación y laboratorio con capacidad para 200 análisis diarios. También incluye renovación completa del sistema eléctrico y de climatización.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_128f698a3-1768820684025.png",
    imageAlt: "Medical clinic reception area with modern furniture, waiting patients and healthcare workers at desk",
    status: "in-progress",
    progress: 80,
    startDate: "10/01/2025",
    endDate: "30/06/2026",
    budget: "VES 28.000.000,00",
    beneficiaries: "35.000+",
    contractor: "Construcciones Médicas Orientales S.A.",
    coordinates: { lat: 10.2167, lng: -64.6333 },
    impact: "Reducirá la carga del hospital principal al ofrecer servicios especializados ambulatorios, disminuyendo tiempos de espera y mejorando la calidad de atención.",
    testimonial: {
      text: "La ampliación del ambulatorio nos permite ofrecer servicios que antes solo estaban disponibles en hospitales principales. Es un avance significativo para la salud pública.",
      author: "Dr. Luis Hernández",
      role: "Coordinador Médico del Ambulatorio"
    }
  },
  {
    id: 4,
    name: "Centro Materno Infantil Anaco",
    category: "health",
    categoryIcon: "Heart",
    municipality: "Anaco",
    description: "Construcción de centro especializado en atención materno-infantil con salas de parto, neonatología, consultas prenatales y programas de nutrición infantil.",
    fullDescription: "Centro especializado de 1.500 m² con 4 salas de parto equipadas, unidad de neonatología con 12 incubadoras, consultorios de ginecología y pediatría, área de lactancia materna, y programas de nutrición y desarrollo infantil temprano. Incluye laboratorio especializado y área de educación para madres primerizas.",
    image: "https://images.unsplash.com/photo-1634147070282-40cbdd54670a",
    imageAlt: "Maternity ward with newborn babies in incubators, nurses attending to infants in bright clean facility",
    status: "completed",
    progress: 100,
    startDate: "05/08/2024",
    endDate: "20/01/2026",
    budget: "VES 35.000.000,00",
    beneficiaries: "20.000+",
    contractor: "Salud Integral Anzoátegui C.A.",
    coordinates: { lat: 9.4389, lng: -64.4728 },
    impact: "Ha reducido la mortalidad materno-infantil en un 35% en el primer año de operación, ofreciendo atención especializada que antes requería traslado a otras ciudades.",
    testimonial: {
      text: "Gracias a este centro, mi bebé recibió la atención especializada que necesitaba desde el primer día. El personal es excepcional y las instalaciones son de primer nivel.",
      author: "Ana Gutiérrez",
      role: "Madre Beneficiaria"
    }
  },
  {
    id: 5,
    name: "Unidad de Diálisis Cantaura",
    category: "health",
    categoryIcon: "Heart",
    municipality: "Cantaura",
    description: "Instalación de unidad de diálisis con 20 máquinas de hemodiálisis, consultorios nefrológicos y área de tratamiento para pacientes con insuficiencia renal.",
    fullDescription: "Unidad especializada de 600 m² equipada con 20 máquinas de hemodiálisis de última generación, consultorios de nefrología, área de preparación de pacientes, sala de espera climatizada y sistema de tratamiento de agua de alta pureza. Incluye servicio de transporte para pacientes y programa de educación sobre cuidados renales.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_102c9dd39-1767080476304.png",
    imageAlt: "Dialysis treatment room with medical equipment, patient receiving treatment and healthcare professional monitoring",
    status: "in-progress",
    progress: 45,
    startDate: "20/02/2026",
    endDate: "15/09/2026",
    budget: "VES 18.500.000,00",
    beneficiaries: "800+",
    contractor: "Equipamiento Médico Especializado C.A.",
    coordinates: { lat: 9.3050, lng: -64.3583 },
    impact: "Salvará vidas al proporcionar tratamiento de diálisis local, eliminando la necesidad de que pacientes viajen 150 km tres veces por semana para recibir tratamiento.",
    testimonial: {
      text: "Esta unidad representa esperanza para cientos de pacientes renales. Ya no tendremos que hacer viajes agotadores para recibir nuestro tratamiento vital.",
      author: "Pedro Ramírez",
      role: "Paciente Renal"
    }
  },
  {
    id: 6,
    name: "Escuela Técnica Industrial Barcelona",
    category: "education",
    categoryIcon: "GraduationCap",
    municipality: "Barcelona",
    description: "Modernización completa de talleres industriales, laboratorios de computación, biblioteca digital y áreas deportivas para formación técnica de excelencia.",
    fullDescription: "Proyecto integral que incluye renovación de 6 talleres industriales (mecánica, electricidad, electrónica, soldadura, carpintería y refrigeración), 3 laboratorios de computación con 120 equipos, biblioteca digital con 50 estaciones de trabajo, auditorio para 300 personas, canchas deportivas y áreas verdes. Incluye capacitación docente en nuevas tecnologías educativas.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1267b2bed-1767112495022.png",
    imageAlt: "Technical school workshop with students working on industrial machinery, tools and equipment visible throughout",
    status: "in-progress",
    progress: 70,
    startDate: "01/09/2025",
    endDate: "30/06/2027",
    budget: "VES 52.000.000,00",
    beneficiaries: "2.500+",
    contractor: "Construcciones Educativas del Oriente S.A.",
    coordinates: { lat: 10.1333, lng: -64.7000 },
    impact: "Formará técnicos especializados con competencias demandadas por la industria local, reduciendo el desempleo juvenil y fortaleciendo el desarrollo económico regional.",
    testimonial: {
      text: "La modernización de nuestra escuela nos permite formar técnicos con las habilidades que demanda el mercado laboral actual. Es una inversión en el futuro de nuestros jóvenes.",
      author: "Prof. Roberto Silva",
      role: "Director de la Escuela Técnica"
    }
  },
  {
    id: 7,
    name: "Complejo Educativo Simón Bolívar",
    category: "education",
    categoryIcon: "GraduationCap",
    municipality: "Puerto La Cruz",
    description: "Construcción de complejo educativo integral con preescolar, primaria y secundaria, incluyendo laboratorios científicos, biblioteca y áreas recreativas.",
    fullDescription: "Complejo educativo de 8.500 m² con capacidad para 1.800 estudiantes, que incluye 45 aulas climatizadas, 3 laboratorios de ciencias, 2 laboratorios de computación, biblioteca con 15.000 volúmenes, auditorio, cafetería, canchas deportivas múltiples, áreas verdes y estacionamiento. Diseño arquitectónico moderno con espacios inclusivos y accesibles.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1abe4bf1c-1764697514463.png",
    imageAlt: "Modern school building complex with multiple floors, large windows, students walking in courtyard with trees",
    status: "planned",
    progress: 10,
    startDate: "15/08/2026",
    endDate: "30/11/2027",
    budget: "VES 85.000.000,00",
    beneficiaries: "1.800+",
    contractor: "Infraestructura Educativa Nacional C.A.",
    coordinates: { lat: 10.2167, lng: -64.6333 },
    impact: "Proporcionará educación de calidad desde preescolar hasta secundaria en una sola institución, reduciendo deserción escolar y mejorando índices de aprendizaje.",
    testimonial: {
      text: "Este complejo educativo transformará la educación en nuestra comunidad. Nuestros hijos tendrán acceso a instalaciones de primer nivel desde el preescolar hasta el bachillerato.",
      author: "Carmen Pérez",
      role: "Presidenta de la Asociación de Padres"
    }
  },
  {
    id: 8,
    name: "Centro de Educación Inicial El Tigre",
    category: "education",
    categoryIcon: "GraduationCap",
    municipality: "El Tigre",
    description: "Construcción de centro de educación inicial con aulas especializadas, áreas de juego, comedor y espacios para desarrollo psicomotor de niños de 0 a 6 años.",
    fullDescription: "Centro de educación inicial de 2.000 m² con 12 aulas especializadas por edades, sala de psicomotricidad, área de juegos cubierta y al aire libre, comedor con cocina equipada, consultorio médico, área de lactancia, y espacios verdes seguros. Diseño pedagógico basado en metodologías Montessori y Reggio Emilia.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1518bdf52-1769171252339.png",
    imageAlt: "Colorful preschool classroom with young children playing with educational toys, teacher supervising activities",
    status: "in-progress",
    progress: 55,
    startDate: "10/04/2025",
    endDate: "15/12/2026",
    budget: "VES 22.000.000,00",
    beneficiaries: "360+",
    contractor: "Construcciones Infantiles Anzoátegui S.A.",
    coordinates: { lat: 8.8894, lng: -64.2528 },
    impact: "Brindará educación inicial de calidad con enfoque en desarrollo integral, preparando a los niños para el éxito escolar futuro y apoyando a familias trabajadoras.",
    testimonial: {
      text: "Como madre trabajadora, este centro representa tranquilidad. Sé que mi hijo está en un ambiente seguro, estimulante y con profesionales capacitados.",
      author: "Luisa Martínez",
      role: "Madre de Estudiante"
    }
  },
  {
    id: 9,
    name: "Biblioteca Municipal Digital Anaco",
    category: "education",
    categoryIcon: "GraduationCap",
    municipality: "Anaco",
    description: "Modernización de biblioteca municipal con sala digital, área de estudio, auditorio y programas de alfabetización digital para todas las edades.",
    fullDescription: "Biblioteca moderna de 1.200 m² con sala digital equipada con 80 computadoras, área de lectura con 10.000 libros físicos y acceso a biblioteca digital con 50.000 títulos, salas de estudio grupal e individual, auditorio para 150 personas, área infantil especializada y programas de capacitación en tecnologías digitales para todas las edades.",
    image: "https://images.unsplash.com/photo-1706246612316-989af8e54658",
    imageAlt: "Modern public library interior with bookshelves, reading areas, people studying at computers and tables",
    status: "completed",
    progress: 100,
    startDate: "15/05/2024",
    endDate: "10/02/2026",
    budget: "VES 15.000.000,00",
    beneficiaries: "25.000+",
    contractor: "Proyectos Culturales y Educativos C.A.",
    coordinates: { lat: 9.4389, lng: -64.4728 },
    impact: "Ha democratizado el acceso a información y tecnología, con más de 500 usuarios diarios y programas de alfabetización digital que han capacitado a 2.000 personas en el primer año.",
    testimonial: {
      text: "Esta biblioteca ha cambiado mi vida. Aquí aprendí computación y ahora tengo un mejor trabajo. Es un espacio de oportunidades para toda la comunidad.",
      author: "Miguel Ángel Torres",
      role: "Usuario de la Biblioteca"
    }
  },
  {
    id: 10,
    name: "Autopista Barcelona - Puerto La Cruz",
    category: "infrastructure",
    categoryIcon: "Construction",
    municipality: "Barcelona / Puerto La Cruz",
    description: "Ampliación y modernización de autopista con nuevos carriles, iluminación LED, señalización inteligente y áreas de descanso para mejorar conectividad regional.",
    fullDescription: "Proyecto de ampliación de 18 km de autopista de 4 a 6 carriles, incluyendo repavimentación completa, instalación de 2.500 luminarias LED, sistema de señalización digital inteligente, 3 áreas de descanso con servicios, puentes peatonales, ciclovías, sistema de drenaje mejorado y cámaras de seguridad cada 500 metros.",
    image: "https://images.unsplash.com/photo-1669694543527-5f500fc4fa60",
    imageAlt: "Modern highway with multiple lanes, street lights, vehicles traveling, urban skyline visible in background",
    status: "in-progress",
    progress: 75,
    startDate: "01/02/2025",
    endDate: "30/11/2026",
    budget: "VES 125.000.000,00",
    beneficiaries: "150.000+",
    contractor: "Vialidad y Construcción del Oriente C.A.",
    coordinates: { lat: 10.1750, lng: -64.6667 },
    impact: "Reducirá tiempos de viaje en 40%, disminuirá accidentes viales en 50% y mejorará conectividad económica entre las dos ciudades principales del estado.",
    testimonial: {
      text: "Esta autopista moderna transformará el transporte en nuestra región. Los tiempos de viaje se reducirán significativamente y la seguridad vial mejorará notablemente.",
      author: "Ing. Fernando Gómez",
      role: "Director de Vialidad Estadal"
    }
  },
  {
    id: 11,
    name: "Vía Alterna El Tigre - Anaco",
    category: "infrastructure",
    categoryIcon: "Construction",
    municipality: "El Tigre / Anaco",
    description: "Construcción de vía alterna de 25 km con dos carriles por sentido, puentes vehiculares y sistema de drenaje para descongestionar ruta principal.",
    fullDescription: "Nueva vía de 25 km con dos carriles por sentido, 4 puentes vehiculares, 8 pasos peatonales elevados, sistema de drenaje completo, iluminación LED en toda la extensión, señalización horizontal y vertical, áreas de descanso cada 10 km y sistema de comunicación de emergencia.",
    image: "https://images.unsplash.com/photo-1634580871716-6d25eadc484a",
    imageAlt: "New highway construction site with heavy machinery, workers, freshly paved road stretching into distance",
    status: "in-progress",
    progress: 50,
    startDate: "15/06/2025",
    endDate: "30/12/2027",
    budget: "VES 95.000.000,00",
    beneficiaries: "80.000+",
    contractor: "Construcciones Viales Anzoátegui S.A.",
    coordinates: { lat: 9.1642, lng: -64.3625 },
    impact: "Descongestiona ruta principal, reduce tiempos de viaje en 35%, mejora transporte de carga y fortalece integración económica entre municipios.",
    testimonial: {
      text: "Esta vía alterna es fundamental para el desarrollo económico de la región. Facilitará el transporte de mercancías y reducirá los costos logísticos.",
      author: "Carlos Villegas",
      role: "Presidente de la Cámara de Comercio"
    }
  },
  {
    id: 12,
    name: "Puente Vehicular Cantaura",
    category: "infrastructure",
    categoryIcon: "Construction",
    municipality: "Cantaura",
    description: "Construcción de puente vehicular de 180 metros sobre río Unare con dos carriles por sentido, iluminación y accesos pavimentados.",
    fullDescription: "Puente vehicular moderno de 180 metros de longitud con estructura de concreto armado, dos carriles por sentido de 3.5 metros cada uno, aceras peatonales de 1.5 metros, iluminación LED, barandas de seguridad, sistema de drenaje y accesos pavimentados de 2 km en ambos extremos.",
    image: "https://images.unsplash.com/photo-1730663216486-52927db4ef69",
    imageAlt: "Modern concrete bridge spanning river, vehicles crossing, steel cables and support structures visible",
    status: "planned",
    progress: 20,
    startDate: "01/09/2026",
    endDate: "30/06/2027",
    budget: "VES 38.000.000,00",
    beneficiaries: "45.000+",
    contractor: "Puentes y Estructuras del Oriente C.A.",
    coordinates: { lat: 9.3050, lng: -64.3583 },
    impact: "Conectará comunidades separadas por el río, eliminará riesgo de inundaciones en paso actual y reducirá tiempos de viaje en 25 minutos.",
    testimonial: {
      text: "Este puente es un sueño de décadas para nuestra comunidad. Finalmente podremos cruzar el río de forma segura en cualquier época del año.",
      author: "María Sánchez",
      role: "Líder Comunitaria de Cantaura"
    }
  },
  {
    id: 13,
    name: "Rehabilitación Vial Zona Industrial",
    category: "infrastructure",
    categoryIcon: "Construction",
    municipality: "Barcelona",
    description: "Rehabilitación completa de 12 km de vías en zona industrial con repavimentación, señalización, iluminación y sistema de drenaje pluvial.",
    fullDescription: "Proyecto de rehabilitación integral que incluye repavimentación de 12 km de vías con asfalto de alta resistencia, instalación de 800 luminarias LED, señalización horizontal y vertical completa, construcción de 15 km de sistema de drenaje pluvial, aceras peatonales de 8 km y áreas verdes en intersecciones principales.",
    image: "https://images.unsplash.com/photo-1708117390188-d1547de962be",
    imageAlt: "Industrial area road construction with asphalt paving machine, workers, warehouses and factories in background",
    status: "in-progress",
    progress: 85,
    startDate: "10/11/2024",
    endDate: "30/04/2026",
    budget: "VES 42.000.000,00",
    beneficiaries: "30.000+",
    contractor: "Pavimentos Industriales Anzoátegui C.A.",
    coordinates: { lat: 10.1200, lng: -64.7100 },
    impact: "Mejora acceso a zona industrial, reduce costos de mantenimiento vehicular en 60%, disminuye accidentes laborales y fortalece competitividad empresarial.",
    testimonial: {
      text: "La rehabilitación de estas vías ha mejorado significativamente la logística de nuestra empresa. Los costos de transporte han disminuido y la seguridad ha aumentado.",
      author: "Ing. Ricardo Morales",
      role: "Gerente de Operaciones Zona Industrial"
    }
  },
  {
    id: 14,
    name: "Ciclovía Turística Costera",
    category: "infrastructure",
    categoryIcon: "Construction",
    municipality: "Puerto La Cruz",
    description: "Construcción de ciclovía de 8 km a lo largo de la costa con áreas de descanso, miradores, iluminación solar y señalización turística.",
    fullDescription: "Ciclovía turística de 8 km con superficie de concreto estampado, 12 áreas de descanso con bancas y bebederos, 6 miradores panorámicos, iluminación solar LED cada 50 metros, señalización turística bilingüe, estaciones de bicicletas públicas cada 2 km, áreas verdes con vegetación nativa y conexión con playas principales.",
    image: "https://images.unsplash.com/photo-1672263379730-697ed79c3df8",
    imageAlt: "Coastal bike path along beach with cyclists riding, ocean view, palm trees and modern lighting posts",
    status: "completed",
    progress: 100,
    startDate: "15/03/2024",
    endDate: "20/12/2025",
    budget: "VES 18.500.000,00",
    beneficiaries: "100.000+",
    contractor: "Proyectos Turísticos y Recreativos C.A.",
    coordinates: { lat: 10.2100, lng: -64.6200 },
    impact: "Ha incrementado turismo en 30%, promovido transporte sostenible, mejorado salud pública con 5.000 usuarios diarios y generado 150 empleos en servicios turísticos.",
    testimonial: {
      text: "La ciclovía ha transformado nuestro paseo marítimo. Es un espacio seguro para familias, deportistas y turistas. Ha revitalizado toda la zona costera.",
      author: "Laura Fernández",
      role: "Directora de Turismo Municipal"
    }
  },
  {
    id: 15,
    name: "Sistema de Drenaje Urbano Integral",
    category: "infrastructure",
    categoryIcon: "Construction",
    municipality: "Anaco",
    description: "Construcción de sistema de drenaje pluvial de 25 km con colectores, sumideros, estaciones de bombeo y obras de protección contra inundaciones.",
    fullDescription: "Sistema integral de drenaje que incluye 25 km de colectores principales de concreto, 800 sumideros estratégicamente ubicados, 3 estaciones de bombeo automatizadas, obras de canalización de quebradas, muros de contención en zonas vulnerables, sistema de monitoreo de niveles de agua y programa de mantenimiento preventivo.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7e57460-1767352239190.png",
    imageAlt: "Urban drainage construction site with large concrete pipes, excavation work, heavy machinery and workers",
    status: "in-progress",
    progress: 60,
    startDate: "01/07/2025",
    endDate: "30/11/2026",
    budget: "VES 55.000.000,00",
    beneficiaries: "65.000+",
    contractor: "Obras Hidráulicas del Oriente S.A.",
    coordinates: { lat: 9.4389, lng: -64.4728 },
    impact: "Eliminará inundaciones que afectan a 15 barrios, protegerá 3.000 viviendas, reducirá enfermedades transmitidas por agua estancada y mejorará calidad de vida urbana.",
    testimonial: {
      text: "Este sistema de drenaje es la solución que esperábamos desde hace años. Ya no viviremos con el temor de perder nuestras pertenencias cada vez que llueve.",
      author: "José Ramírez",
      role: "Presidente de Consejo Comunal"
    }
  }];


  const stats = [
  {
    icon: "Briefcase",
    value: "15",
    label: "Proyectos Activos",
    badge: "+3 este mes",
    bgColor: "bg-primary/10",
    iconColor: "var(--color-primary)",
    badgeColor: "bg-primary/20 text-primary"
  },
  {
    icon: "CheckCircle2",
    value: "4",
    label: "Proyectos Completados",
    badge: "2026",
    bgColor: "bg-success/10",
    iconColor: "var(--color-success)",
    badgeColor: "bg-success/20 text-success"
  },
  {
    icon: "Users",
    value: "500K+",
    label: "Beneficiarios Directos",
    badge: "Creciendo",
    bgColor: "bg-accent/10",
    iconColor: "var(--color-accent-foreground)",
    badgeColor: "bg-accent/20 text-accent-foreground"
  },
  {
    icon: "TrendingUp",
    value: "68%",
    label: "Progreso Promedio",
    badge: "+12% este año",
    bgColor: "bg-secondary/10",
    iconColor: "var(--color-secondary)",
    badgeColor: "bg-secondary/20 text-secondary"
  }];


  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (activeCategory !== 'all') {
      filtered = filtered?.filter((project) => project?.category === activeCategory);
    }

    if (searchTerm) {
      const searchLower = searchTerm?.toLowerCase();
      filtered = filtered?.filter((project) =>
      project?.name?.toLowerCase()?.includes(searchLower) ||
      project?.municipality?.toLowerCase()?.includes(searchLower) ||
      project?.description?.toLowerCase()?.includes(searchLower)
      );
    }

    return filtered;
  }, [activeCategory, searchTerm]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Proyectos - CONVINEA | Infraestructura para el Desarrollo de Anzoátegui</title>
        <meta name="description" content="Descubre los proyectos de infraestructura, salud, educación y vialidad que CONVINEA está desarrollando en todo el estado Anzoátegui para mejorar la calidad de vida de los ciudadanos." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20 lg:pt-24">
          <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 md:mb-12">

                <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                  <Icon name="Briefcase" size={20} color="var(--color-primary)" />
                  <span className="text-sm font-semibold text-primary">Nuestros Proyectos</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                  <span className="gradient-text">Construyendo el Futuro</span>
                  <br />
                  <span className="text-foreground">de Anzoátegui</span>
                </h1>
                
                <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                  Descubre los proyectos de infraestructura que están transformando comunidades y mejorando la calidad de vida en todo el estado.
                </p>
              </motion.div>

              <StatsOverview stats={stats} />
            </div>
          </section>

          <section className="py-8 md:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 md:space-y-8">
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory} />


                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center">

                  <p className="text-sm md:text-base text-muted-foreground">
                    Mostrando <span className="font-semibold text-foreground">{filteredProjects?.length}</span> proyecto{filteredProjects?.length !== 1 ? 's' : ''}
                    {searchTerm &&
                    <span> para "<span className="font-semibold text-primary">{searchTerm}</span>"</span>
                    }
                  </p>
                </motion.div>

                {filteredProjects?.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects?.map((project) =>
                  <ProjectCard
                    key={project?.id}
                    project={project}
                    onViewDetails={handleViewDetails} />

                  )}
                  </div> :

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 md:py-16">

                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                      <Icon name="Search" size={40} color="var(--color-muted-foreground)" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      No se encontraron proyectos
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Intenta ajustar los filtros o el término de búsqueda
                    </p>
                    <Button
                    variant="outline"
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchTerm('');
                    }}>

                      Limpiar Filtros
                    </Button>
                  </motion.div>
                }
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center">

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                  <span className="gradient-text">Transparencia</span> en Cada Proyecto
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12">
                  Accede a información detallada sobre presupuestos, cronogramas y avances de todos nuestros proyectos
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {[
                  {
                    icon: "FileText",
                    title: "Informes Públicos",
                    description: "Reportes mensuales de avance y ejecución presupuestaria"
                  },
                  {
                    icon: "BarChart3",
                    title: "Datos Abiertos",
                    description: "Estadísticas y métricas de impacto en tiempo real"
                  },
                  {
                    icon: "Shield",
                    title: "Auditorías",
                    description: "Verificación independiente de calidad y cumplimiento"
                  }]?.
                  map((item, index) =>
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300">

                      <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={item?.icon} size={28} color="var(--color-primary)" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                        {item?.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {item?.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />

        <ProjectDetailsModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} />

      </div>
    </>);

};

export default Projects;