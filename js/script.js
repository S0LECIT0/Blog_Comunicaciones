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
        // Enfocar el primer elemento del menú cuando se abre por teclado
        const firstLink = navMenu.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    };

    navToggle.addEventListener('click', () => {
      toggleMenu();
    });

    // Cerrar al pulsar un enlace de navegación
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          toggleMenu(false);
          navToggle.focus();
        }
      });
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (navMenu.classList.contains('is-open')) {
          toggleMenu(false);
          navToggle.focus();
        }
        closePdfModal();
      }
    });

    // Cerrar al hacer clic fuera del menú en pantallas móviles
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
        const headerHeight = header ? header.offsetHeight : 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Actualizar el foco por accesibilidad
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  // =========================================================================
  // 3. INDICADOR ACTIVO EN LA NAVEGACIÓN (SCROLLSPY)
  // =========================================================================
  const sections = document.querySelectorAll('section[id], header[id]');

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
  // 4. FILTRADO DINÁMICO DE LA GALERÍA DE EVIDENCIAS
  // =========================================================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const evidenceCards = document.querySelectorAll('.evidence-card');

  if (filterButtons.length > 0 && evidenceCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        // Remover clase activa de todos
        filterButtons.forEach((b) => b.classList.remove('is-active'));
        this.classList.add('is-active');

        const filterValue = this.getAttribute('data-filter');

        evidenceCards.forEach((card) => {
          const cardAuthor = card.getAttribute('data-author');
          const cardCategory = card.getAttribute('data-category');

          if (
            filterValue === 'all' ||
            cardAuthor === filterValue ||
            cardCategory === filterValue
          ) {
            card.style.display = 'flex';
            card.style.opacity = '1';
          } else {
            card.style.display = 'none';
            card.style.opacity = '0';
          }
        });
      });
    });
  }

  // =========================================================================
  // 5. MODAL ACCESIBLE DE VISTA PREVIA DE PDF
  // =========================================================================
  const modalBackdrop = document.getElementById('pdf-modal');
  const modalTitle = document.getElementById('pdf-modal-title');
  const modalIframe = document.getElementById('pdf-modal-iframe');
  const modalCloseBtn = document.getElementById('pdf-modal-close');
  const modalDownloadBtn = document.getElementById('pdf-modal-download');
  let lastActiveElement = null;

  const openPdfModal = (pdfUrl, title) => {
    if (!modalBackdrop || !modalIframe) return;

    lastActiveElement = document.activeElement;
    if (modalTitle) modalTitle.textContent = title || 'Visualizador de Documento PDF';
    if (modalDownloadBtn) modalDownloadBtn.setAttribute('href', pdfUrl);

    // Cargar PDF en el iframe
    modalIframe.setAttribute('src', pdfUrl);

    modalBackdrop.classList.add('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo

    if (modalCloseBtn) modalCloseBtn.focus();
  };

  const closePdfModal = () => {
    if (!modalBackdrop) return;

    modalBackdrop.classList.remove('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (modalIframe) modalIframe.setAttribute('src', 'about:blank');

    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  // Delegar eventos para botones con data-pdf
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-pdf]');
    if (trigger) {
      e.preventDefault();
      const pdfPath = trigger.getAttribute('data-pdf');
      const pdfTitle = trigger.getAttribute('data-title') || 'Evidencia Académica SENA';
      openPdfModal(pdfPath, pdfTitle);
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closePdfModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closePdfModal();
      }
    });
  }

  // =========================================================================
  // 6. DETECCIÓN DE ENLACES EXTERNOS SEGUROS
  // =========================================================================
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach((link) => {
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  console.log('Blog Académico SENA ADSO - Módulos JS cargados correctamente.');
});
