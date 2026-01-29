import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactSidebar = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Map Card */}
      <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm flex flex-col h-full">
        
        {/* Header */}
        <div className="p-6 border-b border-border">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Icon name="Building" size={24} className="text-primary" />
                Sede Principal - Barcelona
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
                Coordinación General y Atención Presencial
            </p>
        </div>

        {/* Map Image */}
        <div className="relative h-64 w-full bg-muted">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7iAOY55IjpcZHT9WR5ZQ0zv8-NDs-6zPPd6Z1sawiX5NOmDEXl9DSYIf5ZCkW6B0Ss2Kb5GVRUIqHXcsjCPSZehjwdIlORxhaqP4JBvlsLAPyyzVi38dO7W15dckq3-G13MoRaEdfHIdClr0L_ZMUH5_g_5BWc2GYkBvqfKzVv0khNaUDYzQiqEFscmvTxhWU43wNWozdk_Kc6I6UGjxS-tbygIdMAP8LdEn5AWcifh_Yt6ZpEJ_pdj25W3uI-RCwqhlvnZL29NkQ" 
                alt="Mapa de ubicación" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-destructive" />
                    <span className="text-xs font-bold text-foreground">Ver en Google Maps</span>
                </div>
            </div>
        </div>

        {/* Contact Details */}
        <div className="p-6 flex flex-col gap-4">
            <div className="flex items-start gap-3">
                <Icon name="Map" size={20} className="text-muted-foreground mt-0.5" />
                <div>
                    <p className="text-sm font-bold text-foreground">Dirección</p>
                    <p className="text-sm text-muted-foreground">Av. Costanera, Edificio COVINEA, Piso 2.<br/>Barcelona, Edo. Anzoátegui.</p>
                </div>
            </div>
            
             <div className="flex items-start gap-3">
                <Icon name="Clock" size={20} className="text-muted-foreground mt-0.5" />
                <div>
                    <p className="text-sm font-bold text-foreground">Horario de Atención</p>
                    <p className="text-sm text-muted-foreground">Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                </div>
            </div>

             <div className="flex items-start gap-3">
                <Icon name="Phone" size={20} className="text-muted-foreground mt-0.5" />
                <div>
                    <p className="text-sm font-bold text-foreground">Teléfonos</p>
                    <p className="text-sm text-muted-foreground">Master: (0281) 555-0199</p>
                    <p className="text-sm text-muted-foreground">Emergencias Viales: 0800-COVINEA</p>
                </div>
            </div>
        </div>

        {/* Footer Action */}
        <div className="p-4 bg-muted/30 mt-auto border-t border-border">
            <button className="w-full text-primary font-bold text-sm flex items-center justify-center gap-2 hover:underline">
                Descargar Directorio Telefónico
                <Icon name="Download" size={16} />
            </button>
        </div>

      </div>
    </div>
  );
};

export default ContactSidebar;
