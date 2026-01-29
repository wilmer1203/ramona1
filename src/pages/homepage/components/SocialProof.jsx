import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Residente de Barcelona",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dfbfb501-1763296570605.png",
    imageAlt: "Professional headshot of Hispanic woman with long dark hair wearing blue blouse smiling warmly at camera",
    quote: "La renovación de la Avenida Principal ha transformado completamente nuestra comunidad. Ahora tenemos vías seguras y bien iluminadas.",
    rating: 5,
    project: "Renovación Vial Barcelona"
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    role: "Director Hospital Regional",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13cd27287-1763294352375.png",
    imageAlt: "Professional headshot of Hispanic man with short black hair wearing white medical coat and stethoscope",
    quote: "La ampliación del hospital nos permitió duplicar nuestra capacidad de atención. COVIMUS cumplió todos los plazos establecidos.",
    rating: 5,
    project: "Ampliación Hospital Regional"
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Directora Escuela Técnica",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19689645b-1763293794554.png",
    imageAlt: "Professional headshot of Hispanic woman with glasses and brown hair in professional attire smiling confidently",
    quote: "Las nuevas instalaciones educativas han mejorado significativamente la experiencia de aprendizaje de nuestros estudiantes.",
    rating: 5,
    project: "Modernización Educativa"
  }];


  const mediaRecognition = [
  { outlet: "El Nacional", logo: "Newspaper" },
  { outlet: "Últimas Noticias", logo: "FileText" },
  { outlet: "Panorama", logo: "BookOpen" },
  { outlet: "El Universal", logo: "Globe" }];


  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Tu Infraestructura, Tu Voz</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonios reales de ciudadanos beneficiados por nuestros proyectos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials?.map((testimonial, index) =>
          <motion.div
            key={testimonial?.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            className="bg-card rounded-2xl p-6 shadow-lg border border-border">

              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                  src={testimonial?.image}
                  alt={testimonial?.imageAlt}
                  className="w-full h-full object-cover" />

                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground truncate">{testimonial?.name}</h4>
                  <p className="text-sm text-muted-foreground truncate">{testimonial?.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial?.rating)]?.map((_, i) =>
              <Icon key={i} name="Star" size={16} color="var(--color-accent)" className="fill-current" />
              )}
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                "{testimonial?.quote}"
              </p>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="Briefcase" size={16} color="var(--color-primary)" />
                  <span className="text-xs text-muted-foreground">{testimonial?.project}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center">

          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-8">
            Reconocimiento en Medios Nacionales
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {mediaRecognition?.map((media, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity">

                <Icon name={media?.logo} size={24} color="var(--color-muted-foreground)" />
                <span className="text-sm font-medium text-muted-foreground">{media?.outlet}</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

};

export default SocialProof;