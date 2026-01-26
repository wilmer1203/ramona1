import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/homepage', label: 'Inicio', icon: 'Home' },
    { path: '/about-us', label: 'Nosotros', icon: 'Users' },
    { path: '/projects', label: 'Proyectos', icon: 'Briefcase' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  return (
    <>
      <header className={`header-glass transition-all duration-300 ${isScrolled ? 'shadow-glass-lg' : 'shadow-glass'}`}>
        <div className="header-container">
          <div className="header-content">
            <Link to="/homepage" className="header-logo">
              <div className="header-logo-icon">
                <Icon name="Building2" size={24} color="#ffffff" />
              </div>
              <span className="header-logo-text hidden sm:block">CONVINEA</span>
            </Link>

            <nav className="header-nav">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`header-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
                >
                  {item?.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-accent-foreground)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(250, 204, 21, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Atención al Ciudadano
              </Link>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="mobile-menu-button"
              aria-label="Abrir menú"
            >
              <Icon name="Menu" size={24} color="var(--color-foreground)" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </>
  );
};

export default Header;