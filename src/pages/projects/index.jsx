import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
// import CategoryFilter from './components/CategoryFilter'; // Removed
import SearchBar from './components/SearchBar';
import ProjectCard from './components/ProjectCard';
import ProjectDetailsModal from './components/ProjectDetailsModal';
import StatsOverview from './components/StatsOverview';
import Button from '../../components/ui/Button';
import Aurora from '../../components/ui/Aurora';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'Todos los Sectores', icon: 'LayoutGrid', count: 15 },
    { id: 'Puerto La Cruz', name: 'Puerto La Cruz', icon: 'MapPin', count: 5 },
    { id: 'Pozuelos', name: 'Pozuelos', icon: 'MapPin', count: 4 },
    { id: 'Chuparín', name: 'Chuparín', icon: 'MapPin', count: 6 },
    { id: 'Zona Rural', name: 'Zona Rural', icon: 'MapPin', count: 3 }
  ];

  const projects = [
    {
      id: 1,
      name: "Hospital General de Puerto La Cruz",
      category: "health",
      categoryIcon: "Heart",
      municipality: "Puerto La Cruz",
      description: "Modernización integral del Hospital General con nuevos equipos.",
      fullDescription: "Proyecto de modernización integral que incluye la renovación completa de 8 quirófanos, instalación de equipos de diagnóstico por imágenes de última generación, ampliación del área de emergencias con 20 nuevas camas, y mejora de la infraestructura eléctrica y de climatización.",
      images: [
        "https://images.unsplash.com/photo-1656932867014-1f86699fc7c4",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
      image: "https://images.unsplash.com/photo-1656932867014-1f86699fc7c4",
      imageAlt: "Hospital General",
      status: "in-progress",
      progress: 65,
      startDate: "15/03/2025",
      endDate: "30/11/2026",
      budget: "VES 45.000.000",
      beneficiaries: "50.000+",
      contractor: "Constructora Médica del Oriente C.A.",
      coordinates: { lat: 10.1333, lng: -64.7000 },
      impact: "Reducción de tiempos de espera en emergencias en un 40%.",
      testimonial: {
        text: "Un cambio histórico para nuestra comunidad.",
        author: "Dra. María Rodríguez",
        role: "Directora"
      }
    },
    {
      id: 2,
      name: "Centro de Salud Rural",
      category: "health",
      categoryIcon: "Heart",
      municipality: "Zona Rural",
      description: "Construcción de nuevo centro de salud rural.",
      fullDescription: "Nuevo centro de salud de 1.200 m² que incluye 6 consultorios médicos especializados, laboratorio clínico completo y farmacia.",
      images: [
        "https://images.unsplash.com/photo-1719845553716-644f7cb92baa",
         "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
         "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
         "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
      image: "https://images.unsplash.com/photo-1719845553716-644f7cb92baa",
      imageAlt: "Centro de Salud Rural",
      status: "planned",
      progress: 15,
      startDate: "01/06/2026",
      endDate: "15/12/2026",
      budget: "VES 12.500.000",
      beneficiaries: "15.000+",
      contractor: "Infraestructura Social Anzoátegui C.A.",
      coordinates: { lat: 8.8894, lng: -64.2528 },
      impact: "Acceso a salud de calidad para comunidades rurales.",
      testimonial: {
        text: "Un sueño hecho realidad para nuestras comunidades.",
        author: "Carlos Méndez",
        role: "Líder Comunitario"
      }
    },
    {
      id: 3,
      name: "Ambulatorio Tipo II Chuparín",
      category: "health",
      categoryIcon: "Heart",
      municipality: "Chuparín",
      description: "Ampliación y equipamiento del ambulatorio.",
      fullDescription: "Ampliación que añade 800 m² de nuevas instalaciones incluyendo consultorios de cardiología y pediatría.",
      images: [
         "https://img.rocket.new/generatedImages/rocket_gen_img_128f698a3-1768820684025.png",
         "https://images.unsplash.com/photo-1581093458891-9f302207d8b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
         "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
         "https://images.unsplash.com/photo-1512403754473-2311130495bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_128f698a3-1768820684025.png",
      imageAlt: "Ambulatorio Puerto La Cruz",
      status: "in-progress",
      progress: 80,
      startDate: "10/01/2025",
      endDate: "30/06/2026",
      budget: "VES 28.000.000",
      beneficiaries: "35.000+",
      contractor: "Construcciones Médicas Orientales S.A.",
      coordinates: { lat: 10.2167, lng: -64.6333 },
      impact: "Mejora significativa en la atención ambulatoria.",
      testimonial: {
        text: "Avance significativo para la salud pública.",
        author: "Dr. Luis Hernández",
        role: "Coordinador Médico"
      }
    },
    {
      id: 6,
      name: "Escuela Técnica Pozuelos",
      category: "education",
      categoryIcon: "GraduationCap",
      municipality: "Pozuelos",
      description: "Modernización de talleres industriales.",
      fullDescription: "Renovación de 6 talleres industriales, 3 laboratorios de computación y biblioteca digital.",
      images: [
        "https://img.rocket.new/generatedImages/rocket_gen_img_1267b2bed-1767112495022.png",
        "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1563205764-6aa065a4c953?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1267b2bed-1767112495022.png",
      imageAlt: "Escuela Técnica",
      status: "in-progress",
      progress: 70,
      startDate: "01/09/2025",
      endDate: "30/06/2027",
      budget: "VES 52.000.000",
      beneficiaries: "2.500+",
      contractor: "Construcciones Educativas del Oriente S.A.",
      coordinates: { lat: 10.1333, lng: -64.7000 },
      impact: "Formación de técnicos especializados para la industria.",
      testimonial: {
        text: "Inversión en el futuro de nuestros jóvenes.",
        author: "Prof. Roberto Silva",
        role: "Director"
      }
    },
    {
       id: 10,
       name: "Vialidad Principal Puerto La Cruz",
       category: "infrastructure",
       categoryIcon: "Construction",
       municipality: "Puerto La Cruz",
       description: "Ampliación y modernización de avenida principal.",
       fullDescription: "Ampliación a 6 carriles, iluminación LED completa y sistema de seguridad vial inteligente.",
       images: [
         "https://images.unsplash.com/photo-1669694543527-5f500fc4fa60",
         "https://images.unsplash.com/photo-1584974292709-5c2f06199712?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
         "https://images.unsplash.com/photo-1599369806440-27f9191d830b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
         "https://images.unsplash.com/photo-1621939514854-546a166113d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
       ],
       image: "https://images.unsplash.com/photo-1669694543527-5f500fc4fa60",
       imageAlt: "Autopista Moderna",
       status: "in-progress",
       progress: 75,
       startDate: "01/02/2025",
       endDate: "30/11/2026",
       budget: "VES 125.000.000",
       beneficiaries: "150.000+",
       contractor: "Vialidad y Construcción del Oriente C.A.",
       coordinates: { lat: 10.1750, lng: -64.6667 },
       impact: "Reducción de tiempos de viaje en 40%.",
       testimonial: {
         text: "Transformará el transporte en nuestra región.",
         author: "Ing. Fernando Gómez",
         role: "Director de Vialidad"
       }
    }
  ];

  const stats = [
    {
      icon: "Briefcase",
      value: "15",
      label: "Proyectos Activos",
      badge: "+3 este mes",
    },
    {
      icon: "CheckCircle2",
      value: "4",
      label: "Completados",
      badge: "2026",
    },
    {
      icon: "Users",
      value: "500K+",
      label: "Beneficiarios",
      badge: "Total",
    },
    {
      icon: "TrendingUp",
      value: "68%",
      label: "Avance Global",
      badge: "Promedio",
    }
  ];

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (activeCategory !== 'all') {
      filtered = filtered?.filter((project) => project?.municipality === activeCategory);
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
        <title>Proyectos | Alcaldía de Sotillo</title>
        <meta name="description" content="Obras y proyectos en ejecución para la transformación del Municipio Sotillo." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-950 font-sans selection:bg-accent/30">
        <Header />

        <main className="relative z-10">
          {/* Hero Section with Aurora */}
          <section className="relative pt-20 pb-20 md:pt-32 md:pb-10 overflow-hidden">
            <div className="absolute inset-0 z-0">
               {/* Tricolor Aurora: Yellow -> Blue -> Red */}
               <Aurora colorS="#FFCC00" colorT="#C00000" />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                  <span className="text-sm font-bold text-accent">Obras en Ejecución 2026</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                  Construyendo el <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
                    Anzoátegui del Futuro
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                  Infraestructura de vanguardia, centros de salud modernos y espacios educativos transformadores para nuestra gente.
                </p>

                {/* <StatsOverview stats={stats} /> */}
              </motion.div>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="py-8 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 max-w-4xl mx-auto">
                <div className="relative w-full md:w-1/2 group">
                  <input
                    type="text"
                    placeholder="Buscar proyectos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all shadow-lg backdrop-blur-sm"
                  />
                  <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-accent transition-colors" size={20} />
                </div>
                
                <div className="relative w-full md:w-1/2">
                   <div className="relative">
                      <select 
                        value={activeCategory}
                        onChange={(e) => setActiveCategory(e.target.value)}
                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-4 pl-12 pr-10 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer shadow-lg backdrop-blur-sm"
                      >
                        {categories.map(category => (
                            <option key={category.id} value={category.id} className="bg-slate-900 text-white">
                                {category.name}
                            </option>
                        ))}
                      </select>
                      <Icon name="MapPin" className="absolute left-4 top-1/2 -translate-y-1/2 text-accent" size={20} />
                      <Icon name="ChevronDown" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
                   </div>
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + searchTerm}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                    {filteredProjects?.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onViewDetails={handleViewDetails} 
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-card flex items-center justify-center border border-border">
                                <Icon name="Search" size={40} className="text-muted-foreground" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">No se encontraron resultados</h3>
                            <p className="text-muted-foreground">Intenta con otros términos de búsqueda.</p>
                        </div>
                    )}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

        </main>

        <Footer />
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </>
  );
};

export default Projects;