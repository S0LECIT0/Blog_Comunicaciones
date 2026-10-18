/**
 * BLOG ACADÉMICO: LA COMUNICACIÓN ES CLAVE
 * Tecnólogo en Análisis y Desarrollo de Software (ADSO) - SENA
 * Funcionalidades interactivas y de accesibilidad
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. NAVEGACIÓN MÓVIL ACCESIBLE
  // =========================================================================
  const navToggle = document.getElementById('navbar-toggle');
  const navMenu = document.getElementById('navbar-menu');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (navToggle && navMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : navToggle.getAttribute('aria-expanded') !== 'true';
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navMenu.classList.toggle('is-open', isOpen);

      if (isOpen) {
        const firstLink = navMenu.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    };

    navToggle.addEventListener('click', () => {
      toggleMenu();
    });

    // Cerrar al hacer clic en un enlace
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          toggleMenu(false);
          navToggle.focus();
        }
      });
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });

    // Cerrar al hacer clic fuera del menú
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('is-open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });
  }

  // =========================================================================
  // 2. DESPLAZAMIENTO SUAVE CON COMPENSACIÓN DE ENCABEZADO
  // =========================================================================
  const internalAnchors = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  const header = document.querySelector('.site-header');

  internalAnchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 64;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  // =========================================================================
  // 3. INDICADOR ACTIVO EN LA NAVEGACIÓN (SCROLLSPY)
  // =========================================================================
  const sections = document.querySelectorAll('section[id], header[id], footer[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('is-active');
              link.setAttribute('aria-current', 'page');
            } else {
              link.classList.remove('is-active');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }

  // =========================================================================
  // 4. SEGURIDAD EN ENLACES EXTERNOS
  // =========================================================================
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach((link) => {
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  console.log('Blog Académico SENA ADSO - Módulos cargados.');
});
