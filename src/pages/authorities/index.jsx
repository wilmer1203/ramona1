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
import AuthorityCard from './components/AuthorityCard';
import HighCommandSection from './components/HighCommandSection';
import ManagementCarousel from './components/ManagementCarousel';
import Aurora from '../../components/ui/Aurora';

const Authorities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedAuthority, setSelectedAuthority] = useState(null);
  const [showOrganogram, setShowOrganogram] = useState(false);

  // --- Leadership Data (Management Team) ---
  const leadershipTeam = [
     {
        id: "Vicepresidencia",
        name: "Vacante / Por Designar",
        position: "Vicepresidente",
        credentials: "Alto Nivel Gerencial",
        bio: "Responsable de apoyar a la presidencia en la coordinación general de las actividades de la corporación y suplir faltas temporales.",
        image: null,
        highlights: ["Coordinación Operativa", "Planificación Estratégica"],
        functions: [
            "Suplir las faltas temporales del Presidente.",
            "Coordinar la ejecución de los planes operativos anuales.",
            "Supervisar el desempeño de las gerencias adscritas."
        ]
     },
     {
        id: "Administración",
        name: "Lcda. Ramona Sánchez",
        position: "Gerente Administración",
        credentials: "Licenciada en Contaduría Pública",
        bio: "Garante de la salud financiera de la institución. Su gestión transparente asegura la ejecución eficiente de los recursos asignados al desarrollo municipal.",
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ddd139a7-1763300023295.png",
        highlights: ["Auditoría", "Recursos Públicos"],
        functions: [
            "Administrar los recursos financieros de la empresa.",
            "Elaborar y controlar el presupuesto anual.",
            "Supervisar los procesos contables y tributarios."
        ]
     },
     {
        id: "Talento Humano",
        name: "Lic. María Rodríguez", 
        position: "Gerente de RRHH",
        credentials: "Gestión de Talento Humano",
        bio: "Encargada de la gestión del capital humano, bienestar laboral y capacitación continua del personal de COVIMUS.",
        image: "/assets/images/Impacto Real_1.jpg", 
        highlights: ["Bienestar Social", "Capacitación"],
        functions: [
            "Gestionar el reclutamiento y selección de personal.",
            "Velar por el cumplimiento de la normativa laboral.",
            "Administrar la nómina y beneficios sociales."
        ]
     },
     {
        id: "Consultoría",
        name: "Abg. Eduardo Chivico",
        position: "Consultor Jurídico",
        credentials: "Abogado / Especialista Administrativo",
        bio: "Vela por la legalidad y el cumplimiento normativo en cada acto administrativo, brindando seguridad jurídica a las operaciones.",
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9438107-1763299090100.png",
        highlights: ["Derecho Administrativo", "Defensa Patrimonial"],
        functions: [
             "Asesorar legalmente a la Junta Directiva y Presidencia.",
             "Revisar y redactar contratos y convenios.",
             "Representar judicialmente a la empresa."
        ]
     },
     {
        id: "Operaciones",
        name: "Ing. Carlos Pérez",
        position: "Gerente de Operaciones",
        credentials: "Ingeniero Civil",
        bio: "Coordina la maquinaria y equipos en terreno, asegurando el avance físico de las obras bajo los estándares de calidad.",
        image: "/assets/images/Impacto Real_2.jpg",
        highlights: ["Logística", "Maquinaria"],
        functions: [
            "Planificar y supervisar la operatividad de la planta de asfalto.",
            "Coordinar el mantenimiento de la flota de maquinaria pesada.",
            "Garantizar el suministro de mezcla asfáltica para las obras."
        ]
     },
     {
        id: "Proyectos",
        name: "Arq. Ana González",
        position: "Gerente de Proyectos",
        credentials: "Arquitecto / Urbanista",
        bio: "Diseña y planifica las intervenciones urbanas, desde la conceptualización hasta la entrega de los planos ejecutivos.",
        image: "/assets/images/Impacto Real_3.jpg",
        highlights: ["Diseño Urbano", "Planificación"],
        functions: [
            "Elaborar proyectos de ingeniería y arquitectura.",
            "Realizar inspecciones técnicas de obras.",
            "Controlar el avance físico-financiero de los proyectos."
        ]
     },
     {
        id: "Compras",
        name: "Lic. José López",
        position: "Gerente de Compras",
        credentials: "Licenciado en Administración",
        bio: "Gestiona la adquisición de insumos y materiales estratégicos para garantizar la continuidad operativa de la planta.",
        image: null,
        highlights: ["Procura", "Inventario"],
        functions: [
            "Gestionar la adquisición de bienes y servicios.",
            "Mantener el registro de proveedores actualizado.",
            "Controlar el inventario de almacenes."
        ]
     },
     {
        id: "Seguridad",
        name: "Sup. Miguel Torres",
        position: "Jefe de Seguridad",
        credentials: "Seguridad Industrial",
        bio: "Responsable de los protocolos de seguridad industrial y patrimonial en todas las instalaciones de la corporación.",
        image: null,
        highlights: ["Seguridad Industrial", "Control de Acceso"],
        functions: [
            "Velar por la seguridad física de las instalaciones.",
            "Implementar normas de higiene y seguridad industrial.",
            "Controlar el acceso de personas y vehículos."
        ]
     }
  ];

  // Organogram Data
  const highLevelOrg = [
      { 
        id: "asamblea", 
        name: "Asamblea General Accionistas", 
        position: "Asamblea General de Accionistas",
        image: null,
        credentials: "Máxima Autoridad",
        functions: ["Aprobar estados financieros.", "Designar la Junta Directiva.", "Modificar estatutos sociales."]
      },
      { 
        id: "junta", 
        name: "Junta Directiva", 
        position: "Junta Directiva",
        image: null,
        credentials: "Cuerpo Colegiado",
        functions: ["Definir las políticas estratégicas.", "Supervisar la gestión de la Presidencia.", "Aprobar contratos de gran envergadura."]
      }
  ];

  const asamblea = highLevelOrg[0];
  const junta = highLevelOrg[1];
  const president = {
    id: "presidencia",
    name: "Ing. Oswaldo González",
    position: "Presidencia",
    credentials: "Ingeniero Civil",
    bio: "Líder de la ejecución de obras en campo.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15a1404b5-1763299032692.png",
    highlights: ["Dirección General"],
    functions: ["Ejercer la representación legal de la empresa.", "Dirigir la administración y operaciones.", "Ejecutar las decisiones de la Asamblea y Junta Directiva."]
  };
  
  // Render ALL managers
  const managers = leadershipTeam; 

  return (
      <div className="min-h-screen bg-background font-sans">
         <Helmet>
            <title>Autoridades - COVIMUS | Gobierno Corporativo</title>
            <meta name="description" content="Conoce a nuestras autoridades, lideradas por el Alcalde Dr. Jesús Marcano Tábata." />
         </Helmet>

         <Header />

         <AuthorityModal 
           isOpen={!!selectedAuthority} 
           onClose={() => setSelectedAuthority(null)} 
           authority={selectedAuthority} 
         />

         {/* Hero Section */}
         <section className="relative pt-40 pb-32 overflow-hidden min-h-[60vh] flex items-center justify-center">
             <div className="absolute inset-0 z-0">
                <img 
                   src="/assets/images/av_paseo.png" 
                   alt="Alcaldía de Sotillo" 
                   className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/80 z-10" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-950 z-20" />
                <div className="absolute inset-0 z-20 opacity-40 mix-blend-overlay">
                    <Aurora colorStops={["#3b82f6", "#1d4ed8", "#0f172a"]} speed={0.5} />
                </div>
             </div>

            <div className="max-w-7xl mx-auto px-4 relative z-30 text-center w-full">
               <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                     <Icon name="Building2" size={16} className="text-blue-400" />
                     <span className="text-xs font-bold text-blue-100 tracking-[0.2em] uppercase">Gobierno Corporativo</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-[0.9] tracking-tight">
                     LIDERAZGO & <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">ESTRATEGIA</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed border-t border-white/10 pt-8 mt-8">
                     La estructura de mando que garantiza la eficiencia en la gestión pública de Sotillo.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* High Command Section */}
         <HighCommandSection />

         {/* Management Teams Carousel */}
         <section className="py-24 bg-slate-900 border-t border-white/5 relative">
             <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5" />
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                   <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Nuestro Equipo</h2>
                   <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                      Conoce a los profesionales detrás de cada área estratégica.
                   </p>
                </div>
                <ManagementCarousel leaders={leadershipTeam} />
             </div>
         </section>

         {/* Functional Organogram */}
         <section className="py-24 bg-[#4C4C4C] relative border-t border-border/50 overflow-hidden">
             <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5" />
             
             <div className="max-w-7xl mx-auto px-4 relative z-10 font-sans">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black mb-4 text-white">Estructura Funcional</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Mapa de procesos y responsabilidades.</p>
                    
                    {/* Accordion Trigger Button */}
                    <button 
                       onClick={() => setShowOrganogram(!showOrganogram)}
                       className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#FFCC00] text-slate-900 font-bold uppercase tracking-widest rounded-full hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)] transform hover:-translate-y-1"
                    >
                       <span className="relative z-10 flex items-center gap-2">
                          {showOrganogram ? 'Ocultar Organigrama' : 'Ver el Organigrama y sus Funciones'}
                          <Icon name={showOrganogram ? "ChevronUp" : "ChevronDown"} size={20} className="stroke-[3]" />
                       </span>
                    </button>
                </div>
 
               <AnimatePresence>
                 {showOrganogram && (
                   <motion.div 
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 'auto' }}
                     exit={{ opacity: 0, height: 0 }}
                     transition={{ duration: 0.5, ease: "easeInOut" }}
                     className="flex flex-col items-center w-full overflow-hidden"
                   >
                     <div className="py-12 w-full flex flex-col items-center">
                     
                     {/* Level -2: Asamblea */}
                     <div className="relative mb-16 z-10">
                         <OrganogramNode 
                             authority={asamblea} 
                             level={0} 
                             onClick={setSelectedAuthority} 
                         />
                         <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#FFCC00] to-[#C00000] -translate-x-1/2 -z-10" />
                     </div>
    
                     {/* Level -1: Junta Directiva */}
                     <div className="relative mb-16 z-10">
                         <OrganogramNode 
                             authority={junta} 
                             level={0} 
                             onClick={setSelectedAuthority} 
                         />
                         <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#FFCC00] to-[#C00000] -translate-x-1/2 -z-10" />
                     </div>
    
                     {/* Level 0: Presidency */}
                     <div className="relative mb-16 z-10">
                        <OrganogramNode 
                           authority={president} 
                           level={0} 
                           onClick={setSelectedAuthority} 
                        />
                        <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-slate-700 to-[#FFCC00] -translate-x-1/2 -z-10" />
                        <div className="absolute -bottom-16 left-1/2 w-0.5 h-8 bg-[#FFCC00] shadow-[0_0_15px_rgba(255,204,0,0.6)] -translate-x-1/2 -z-10" />
                     </div>
    
                     {/* Level 1: Functional Managers Grid */}
                     <div className="relative w-full max-w-6xl">
                        {/* Horizontal Connector Bar */}
                        <div className="absolute -top-8 left-[10%] right-[10%] h-px bg-[#FFCC00]/50 shadow-[0_0_8px_rgba(255,204,0,0.4)] hidden md:block" />
                        
                        {/* Vertical Connectors Ends */}
                        <div className="absolute -top-8 left-[10%] h-8 w-px bg-gradient-to-b from-transparent to-[#FFCC00] hidden md:block" />
                        <div className="absolute -top-8 right-[10%] h-8 w-px bg-gradient-to-b from-transparent to-[#FFCC00] hidden md:block" />
    
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
                           {managers.map((manager, idx) => (
                              <div key={manager.id} className="relative w-full flex justify-center">
                                 {/* Vertical Line Connector Top */}
                                 <div className="absolute -top-16 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#243F60] to-slate-800 -translate-x-1/2 md:hidden" />
                                 <div className="absolute -top-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#FFCC00] to-slate-800 -translate-x-1/2 hidden md:block" />
                                 
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
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
         </section>

         <LegalFramework />
         <TransparencyCTA />
         <Footer />
      </div>
  );
};


export default Authorities;
