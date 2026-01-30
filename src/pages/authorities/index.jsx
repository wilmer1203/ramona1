import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
import Aurora from '../../components/ui/Aurora';

const Authorities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedAuthority, setSelectedAuthority] = useState(null);

  // --- Mayor Data ---
  const mayor = {
    name: "Dr. Jesús Marcano Tábata",
    position: "Alcalde del Municipio Sotillo",
    credentials: "Doctor / Investigador / Líder Político",
    bio: "Un líder con una sólida trayectoria técnica y política. Su experiencia como Director Estadal del Ministerio de Transporte Terrestre y Autoridad Única de Vivienda le otorga una visión integral para la transformación de la infraestructura municipal.",
    image: "/assets/images/Jesus.jpeg",
    highlights: [
       "Director Estadal MPPTT Anzoátegui (2012)",
       "Autoridad Única de Vivienda en Anzoátegui",
       "Presidente de Gas Anzoátegui"
    ]
  };

  // --- Leadership Data (Management Team) ---
  const leadershipTeam = [
    {
       id: "vicepresidencia",
       name: "Vacante / Por Designar",
       position: "Vicepresidente",
       credentials: "Alto Nivel Gerencial",
       bio: "Responsable de apoyar a la presidencia en la coordinación general de las actividades de la corporación y suplir faltas temporales.",
       image: null,
       highlights: ["Coordinación Operativa", "Planificación Estratégica"]
    },
    {
       id: "admin",
       name: "Lcda. Ramona Sánchez",
       position: "Gerente Administración",
       credentials: "Licenciada en Contaduría Pública",
       bio: "Garante de la salud financiera de la institución. Su gestión transparente asegura la ejecución eficiente de los recursos asignados al desarrollo municipal.",
       image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ddd139a7-1763300023295.png",
       highlights: [
          "Auditoría y Control Fiscal",
          "Gestión de Recursos Públicos",
          "Planificación Presupuestaria"
       ]
    },
    {
       id: "rrhh",
       name: "Vacante / Por Designar",
       position: "Gerente de RRHH",
       credentials: "Gestión de Talento Humano",
       bio: "Encargado de la gestión del capital humano, bienestar laboral y capacitación continua del personal de COVIMUS.",
       image: null,
       highlights: ["Bienestar Social", "Capacitación", "Nómina"]
    },
    {
       id: "legal",
       name: "Abg. Eduardo Chivico",
       position: "Consultor Jurídico",
       credentials: "Abogado / Especialista en Derecho Administrativo",
       bio: "Vela por la legalidad y el cumplimiento normativo en cada acto administrativo, brindando seguridad jurídica a las operaciones de la corporación.",
       image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d9438107-1763299090100.png",
       highlights: [
          "Derecho Administrativo",
          "Contrataciones Públicas",
          "Defensa Patrimonial"
       ]
    },
    // {
    //    id: "operaciones",
    //    name: "Vacante / Por Designar",
    //    position: "Gerente de Operaciones",
    //    credentials: "Ingeniero Civil / Arquitecto",
    //    bio: "Líder de la ejecución de obras en campo, garantizando el cumplimiento de cronogramas y estándares de calidad.",
    //    image: null,
    //    highlights: ["Ejecución de Obras", "Supervisión Técnica"]
    // }
  ];

  // Organogram Data (Simplified)
  const highLevelOrg = [
      { id: "asamblea", name: "Asamblea General Accionistas", position: "Autoridad Suprema" },
      { id: "junta", name: "Junta Directiva", position: "Dirección Colegiada" }
  ];

  return (
      <div className="min-h-screen bg-background font-sans">
         <Helmet>
            <title>Autoridades - COVIMUS | Gobierno Corporativo</title>
            <meta name="description" content="Conoce a nuestras autoridades, lideradas por el Alcalde Dr. Jesús Marcano Tábata, y el equipo profesional que impulsa COVIMUS." />
         </Helmet>

         <Header />

         <AuthorityModal 
           isOpen={!!selectedAuthority} 
           onClose={() => setSelectedAuthority(null)} 
           authority={selectedAuthority} 
         />

         {/* Hero Section */}
         <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden min-h-[40vh] flex items-center">
            <div className="absolute inset-0">
               <Aurora colorStops={["#243F60", "#1c3149", "#000000"]} speed={0.8} />
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">
                     Liderazgo & <span className="gradient-text">Gobierno</span>
                  </h1>
                  <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                     Un equipo multidisciplinario de alto nivel técnico comprometido con la visión socialista de eficiencia.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* High Command Section (Shareholders & President) */}
         <HighCommandSection />

         {/* Management Team Carousel */}
         <section className="py-24 bg-slate-900 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Gerencia Operativa</h2>
                  <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                     Equipo multidisciplinario encargado de las áreas funcionales clave de la corporación.
                  </p>
               </div>

               {/* Carousel Grid for now - Can be advanced carousel later if requested */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {leadershipTeam.map((leader, index) => (
                     <AuthorityCard key={index} authority={leader} index={index} />
                  ))}
               </div>
            </div>
         </section>

         {/* Simplified Organogram - Concepts only */}
         <section className="py-24 bg-white dark:bg-slate-900 relative border-t border-border/50 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            <div className="max-w-5xl mx-auto px-4 relative z-10">
               <div className="text-center mb-16">
                   <h2 className="text-3xl font-black mb-4">Estructura Organizativa</h2>
                   <p className="text-muted-foreground">Cadena de mando simplificada para máxima eficiencia operativa.</p>
               </div>

               <div className="flex flex-col items-center gap-12">
                   {/* Top Lever */}
                   <div className="flex flex-col items-center gap-2">
                       <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-xl w-64 text-center border-b-4 border-accent">
                          <Icon name="Users" className="mx-auto mb-2 text-accent" />
                          <div className="font-bold">Asamblea de Accionistas</div>
                       </div>
                       <div className="h-8 w-px bg-slate-300" />
                       <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-lg w-64 text-center">
                          <div className="font-bold text-slate-800">Junta Directiva</div>
                       </div>
                       <div className="h-8 w-px bg-slate-300" />
                   </div>

                   {/* Presidency */}
                   <div className="p-8 bg-gradient-to-br from-primary to-slate-800 text-white rounded-3xl shadow-2xl w-full max-w-md text-center relative overflow-hidden">
                       <div className="relative z-10">
                          <h3 className="text-2xl font-black mb-2">Presidencia</h3>
                          <p className="text-white/80 text-sm">Órgano Ejecutivo Central</p>
                       </div>
                   </div>

                   {/* Departments */}
                   <div className="relative w-full">
                       <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-slate-300" />
                       <div className="absolute -top-6 left-[10%] right-[10%] h-px bg-slate-300" />
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                           {/* Department Nodes */}
                           {['Consultoría Jurídica', 'Auditoría Interna', 'Gerencia General', 'Gerencia Administrativa'].map((dept, i) => (
                              <div key={i} className="relative pt-6">
                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-slate-300" />
                                 <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center text-sm font-bold text-slate-700 hover:shadow-md transition-shadow">
                                    {dept}
                                 </div>
                              </div>
                           ))}
                       </div>
                   </div>
               </div>
            </div>
         </section>

         {/* Legal & Transparency (Kept as requested) */}
         <LegalFramework />
         <TransparencyCTA />

         <Footer />
      </div>
  );
};

export default Authorities;
