import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    cedula: '',
    phone: '',
    email: '',
    requestType: 'denuncia',
    sector: '',
    referencePoint: '',
    description: '',
    image: null
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setPreviewUrl(null);
    setFormData(prev => ({ ...prev, image: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('¡Reporte enviado con éxito! Gracias por contribuir con el municipio.');
    setIsSubmitting(false);
  };

  const requestTypes = [
    { value: 'denuncia', label: 'Denuncia' },
    { value: 'servicio', label: 'Solicitud de Servicio' },
    { value: 'reclamo', label: 'Reclamo' },
    { value: 'sugerencia', label: 'Sugerencia' }
  ];

  const inputClasses = "w-full rounded-lg border border-border bg-card text-foreground h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow placeholder:text-muted-foreground";
  const labelClasses = "text-foreground text-sm font-bold leading-normal pb-2 block";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      
      {/* Personal Info Grid - Keeping this for data organization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col flex-1">
          <span className={labelClasses}>Nombre Completo *</span>
          <input
            required
            type="text"
            placeholder="Juan Pérez"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col flex-1">
           <span className={labelClasses}>Cédula *</span>
           <input
             required
             type="text"
             placeholder="V-12.345.678"
             value={formData.cedula}
             onChange={(e) => handleChange('cedula', e.target.value)}
             className={inputClasses}
           />
        </label>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col flex-1">
          <span className={labelClasses}>Teléfono *</span>
          <input
            required
            type="tel"
            placeholder="(0414) 123-4567"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col flex-1">
           <span className={labelClasses}>Correo Electrónico *</span>
           <input
             required
             type="email"
             placeholder="juan@ejemplo.com"
             value={formData.email}
             onChange={(e) => handleChange('email', e.target.value)}
             className={inputClasses}
           />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {/* Request Type */}
        <label className="flex flex-col flex-1">
          <span className={labelClasses}>Tipo de Solicitud *</span>
          <div className="relative">
            <select
                value={formData.requestType}
                onChange={(e) => handleChange('requestType', e.target.value)}
                className={`${inputClasses} appearance-none pr-10`}
            >
                {requestTypes.map(type => (
                <option key={type.value} value={type.value}>
                    {type.label}
                </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground">
                <Icon name="ChevronDown" size={20} />
            </div>
          </div>
        </label>

        {/* Sector / Parroquia */}
        <label className="flex flex-col flex-1">
            <span className={labelClasses}>Sector / Parroquia *</span>
            <input 
                className={inputClasses}
                placeholder="Ej. Av. Intercomunal" 
                type="text"
                value={formData.sector}
                onChange={(e) => handleChange('sector', e.target.value)}
                required
            />
        </label>
      </div>

      {/* Reference Point */}
      <label className="flex flex-col flex-1">
        <span className={labelClasses}>Punto de Referencia *</span>
        <div className="relative">
            <input 
                className={`${inputClasses} pl-10`}
                placeholder="Ej. Frente al Centro Comercial..." 
                type="text"
                value={formData.referencePoint}
                onChange={(e) => handleChange('referencePoint', e.target.value)}
                required
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-muted-foreground">
                <Icon name="MapPin" size={20} />
            </div>
        </div>
      </label>

      {/* Description */}
      <label className="flex flex-col flex-1">
        <span className={labelClasses}>Descripción de la Falla</span>
        <textarea 
            className="w-full rounded-lg border border-border bg-card text-foreground p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow placeholder:text-muted-foreground resize-none" 
            placeholder="Describa brevemente el problema (hueco, alcantarilla dañada, falta de señalización...)" 
            rows="4"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            required
        ></textarea>
      </label>

      {/* File Upload */}
      <div>
        <span className={labelClasses}>Evidencia Fotográfica</span>
        <div 
            className={`border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center hover:bg-muted/10 transition-colors cursor-pointer bg-card relative overflow-hidden ${previewUrl ? 'border-primary' : ''}`}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            
            {previewUrl ? (
                <div className="relative z-20">
                     <img src={previewUrl} alt="Preview" className="max-h-48 rounded-lg mb-2" />
                     <button 
                        type="button" 
                        onClick={(e) => {e.preventDefault(); e.stopPropagation(); clearImage()}}
                        className="px-3 py-1 bg-destructive text-white text-sm rounded-md"
                     >
                        Quitar Imagen
                     </button>
                </div>
            ) : (
                <>
                    <div className="bg-primary/20 p-3 rounded-full mb-3 text-primary-dark">
                        <Icon name="UploadCloud" size={24} className="text-primary" />
                    </div>
                    <p className="text-sm font-bold text-foreground">Haga clic para subir o arrastre la imagen aquí</p>
                    <p className="text-xs text-muted-foreground mt-1">JPG, PNG hasta 5MB</p>
                </>
            )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button 
            className="w-full md:w-auto px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" 
            type="submit"
            disabled={isSubmitting}
        >
            {isSubmitting ? (
                <span>Enviando...</span>
            ) : (
                <>
                    <span>Enviar Reporte</span>
                    <Icon name="Send" size={18} />
                </>
            )}
        </button>
      </div>

    </form>
  );
};

export default ContactForm;
