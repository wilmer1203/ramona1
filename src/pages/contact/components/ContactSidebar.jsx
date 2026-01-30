import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactSidebar = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Map Card */}
      <div className="bg-card rounded-[2rem] border border-border overflow-hidden shadow-2xl flex flex-col h-full group">
        
        {/* Header */}
        <div className="p-8 border-b border-border bg-muted/10">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                <div className="size-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                   <Icon name="Building" size={20} />
                </div>
                Sede Principal
            </h3>
            <p className="text-muted-foreground text-sm mt-2 pl-12">
                Coordinación General y Atención Presencial
            </p>
        </div>

        {/* Map Image */}
        <div className="relative h-72 w-full bg-muted overflow-hidden">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7iAOY55IjpcZHT9WR5ZQ0zv8-NDs-6zPPd6Z1sawiX5NOmDEXl9DSYIf5ZCkW6B0Ss2Kb5GVRUIqHXcsjCPSZehjwdIlORxhaqP4JBvlsLAPyyzVi38dO7W15dckq3-G13MoRaEdfHIdClr0L_ZMUH5_g_5BWc2GYkBvqfKzVv0khNaUDYzQiqEFscmvTxhWU43wNWozdk_Kc6I6UGjxS-tbygIdMAP8LdEn5AWcifh_Yt6ZpEJ_pdj25W3uI-RCwqhlvnZL29NkQ" 
                alt="Mapa de ubicación" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
                <button className="w-full py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/10 transition-all">
                    <Icon name="MapPin" size={16} className="text-secondary" />
                    Abrir en Google Maps
                </button>
            </div>
        </div>

        {/* Contact Details */}
        <div className="p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
                <div className="mt-1 text-muted-foreground">
                    <Icon name="Map" size={24} />
                </div>
                <div>
                    <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Dirección</p>
                    <p className="text-muted-foreground leading-relaxed">Av. Costanera, Edificio COVINEA, Piso 2.<br/>Barcelona, Edo. Anzoátegui.</p>
                </div>
            </div>
            
             <div className="flex items-start gap-4">
                <div className="mt-1 text-muted-foreground">
                    <Icon name="Clock" size={24} />
                </div>
                <div>
                    <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Horario</p>
                    <p className="text-muted-foreground">Lunes a Viernes: <span className="text-foreground font-semibold">8:00 AM - 4:00 PM</span></p>
                </div>
            </div>

             <div className="flex items-start gap-4">
                <div className="mt-1 text-muted-foreground">
                    <Icon name="Phone" size={24} />
                </div>
                <div>
                    <p className="text-sm font-bold text-foreground uppercase tracking-wider mb-1">Contacto Directo</p>
                    <div className="space-y-1">
                        <p className="text-muted-foreground flex justify-between gap-4">
                            Master: <span className="text-foreground font-mono">(0281) 555-0199</span>
                        </p>
                        <p className="text-muted-foreground flex justify-between gap-4">
                            Emergencias: <span className="text-secondary font-mono font-bold">0800-COVINEA</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 bg-muted/10 mt-auto border-t border-border">
            <button className="w-full text-muted-foreground text-sm font-bold flex items-center justify-center gap-2 hover:text-accent transition-colors">
                <Icon name="Download" size={16} />
                Descargar Directorio Institucional
            </button>
        </div>

      </div>
    </div>
  );
};

export default ContactSidebar;
