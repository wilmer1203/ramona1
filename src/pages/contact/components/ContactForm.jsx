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

  const inputClasses = "w-full rounded-xl border border-white/10 bg-white/5 text-white h-14 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-slate-500 hover:bg-white/10";
  const labelClasses = "text-slate-300 text-sm font-bold uppercase tracking-wider mb-2 block ml-1";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 shadow-2xl relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      {/* Personal Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
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

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
         {/* Request Type */}
        <label className="flex flex-col flex-1">
          <span className={labelClasses}>Tipo de Solicitud *</span>
          <div className="relative">
            <select
                value={formData.requestType}
                onChange={(e) => handleChange('requestType', e.target.value)}
                className={`${inputClasses} appearance-none pr-10 text-white [&>option]:text-slate-900 bg-white/5`}
            >
                {requestTypes.map(type => (
                <option key={type.value} value={type.value}>
                    {type.label}
                </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
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
      <label className="flex flex-col flex-1 relative z-10">
        <span className={labelClasses}>Punto de Referencia *</span>
        <div className="relative">
            <input 
                className={`${inputClasses} pl-12`}
                placeholder="Ej. Frente al Centro Comercial..." 
                type="text"
                value={formData.referencePoint}
                onChange={(e) => handleChange('referencePoint', e.target.value)}
                required
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-slate-400">
                <Icon name="MapPin" size={20} />
            </div>
        </div>
      </label>

      {/* Description */}
      <label className="flex flex-col flex-1 relative z-10">
        <span className={labelClasses}>Descripción de la Falla</span>
        <textarea 
            className="w-full rounded-xl border border-white/10 bg-white/5 text-white p-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-slate-500 resize-none min-h-[120px]" 
            placeholder="Describa brevemente el problema (hueco, alcantarilla dañada, falta de señalización...)" 
            rows="4"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            required
        ></textarea>
      </label>

      {/* File Upload */}
      <div className="relative z-10">
        <span className={labelClasses}>Evidencia Fotográfica</span>
        <div 
            className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all cursor-pointer relative overflow-hidden group
                ${previewUrl ? 'border-accent bg-accent/5' : 'border-white/10 hover:border-white/20 hover:bg-white/5'}
            `}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            
            {previewUrl ? (
                <div className="relative z-20 w-full">
                     <img src={previewUrl} alt="Preview" className="max-h-64 rounded-xl mx-auto shadow-lg mb-4 object-cover" />
                     <button 
                        type="button" 
                        onClick={(e) => {e.preventDefault(); e.stopPropagation(); clearImage()}}
                        className="px-4 py-2 bg-red-500/80 hover:bg-red-600 text-white text-sm font-bold rounded-lg backdrop-blur-sm transition-colors"
                     >
                        Quitar Imagen
                     </button>
                </div>
            ) : (
                <>
                    <div className="bg-slate-800 p-4 rounded-full mb-4 text-accent group-hover:scale-110 transition-transform duration-300 shadow-xl border border-white/5">
                        <Icon name="UploadCloud" size={32} />
                    </div>
                    <p className="text-lg font-bold text-white mb-2">Haga clic o arrastre la imagen aquí</p>
                    <p className="text-sm text-slate-400">JPG, PNG hasta 5MB</p>
                </>
            )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6 relative z-10">
        <button 
            className="w-full h-14 bg-gradient-to-r from-accent to-yellow-400 hover:from-yellow-400 hover:to-accent text-slate-900 font-black text-lg rounded-xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]" 
            type="submit"
            disabled={isSubmitting}
        >
            {isSubmitting ? (
                <span>Enviando Reporte...</span>
            ) : (
                <>
                    <span>Enviar Reporte</span>
                    <Icon name="Send" size={20} />
                </>
            )}
        </button>
      </div>

    </form>
  );
};

export default ContactForm;
