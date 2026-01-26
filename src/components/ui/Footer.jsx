import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'CONVINEA',
      links: [
        { label: 'Inicio', path: '/homepage' },
        { label: 'Nosotros', path: '/about-us' },
        { label: 'Proyectos', path: '/projects' },
        { label: 'Transparencia', path: '/transparency' },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { label: 'Atención al Ciudadano', path: '/contact' },
        { label: 'Solicitar Servicio', path: '/services' },
        { label: 'Reportar Problema', path: '/report' },
        { label: 'Seguimiento de Proyectos', path: '/tracking' },
      ],
    },
    {
      title: 'Información',
      links: [
        { label: 'Marco Legal', path: '/legal' },
        { label: 'Decreto N° 93', path: '/decree' },
        { label: 'Presupuesto', path: '/budget' },
        { label: 'Licitaciones', path: '/bids' },
      ],
    },
    {
      title: 'Contacto',
      items: [
        { icon: 'MapPin', text: 'Anzoátegui, Venezuela' },
        { icon: 'Phone', text: '+58 (281) 555-0100' },
        { icon: 'Mail', text: 'info@convinea.gob.ve' },
        { icon: 'Clock', text: 'Lun - Vie: 8:00 AM - 4:00 PM' },
      ],
    },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          {footerSections?.map((section, index) => (
            <div key={index}>
              <h3 className="footer-section-title">{section?.title}</h3>
              {section?.links ? (
                <ul className="space-y-2">
                  {section?.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link?.path} className="footer-link">
                        {link?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-3">
                  {section?.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3 text-muted-foreground">
                      <Icon name={item?.icon} size={18} className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item?.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="header-logo-icon w-8 h-8">
                <Icon name="Building2" size={16} color="#ffffff" />
              </div>
              <span className="font-semibold text-foreground">CONVINEA</span>
            </div>

            <p>
              © {currentYear} Corporación Venezolana de Infraestructura del Estado Anzoátegui. Todos los derechos reservados.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;