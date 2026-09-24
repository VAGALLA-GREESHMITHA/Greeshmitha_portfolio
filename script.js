/**
 * PORTFOLIO SCRIPT - GREESHMITHA VAGALLA
 * Handles:
 * 1. Mobile Menu Toggle & Navigation
 * 2. Sticky Header with Scroll Detection
 * 3. Active Nav Link on Scroll (Intersection / Offset)
 * 4. Back to Top Button Visibility & Action
 * 5. Project Details Modal with Data Injection
 * 6. Contact Form Email Composition (Mailto fallback)
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ===================================================================
     1. MOBILE MENU TOGGLE
  =================================================================== */
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav__link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
      navToggle.setAttribute('aria-expanded', 'true');
    });
  }

  if (navClose && navMenu) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Close mobile menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu) {
        navMenu.classList.remove('show-menu');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ===================================================================
     2. STICKY HEADER & SCROLL TO TOP
  =================================================================== */
  const header = document.getElementById('header');
  const scrollTop = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header elevation on scroll
    if (header) {
      if (scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    }

    // Scroll to Top visibility
    if (scrollTop) {
      if (scrollY >= 350) {
        scrollTop.classList.add('show-scroll');
      } else {
        scrollTop.classList.remove('show-scroll');
      }
    }
  });

  /* ===================================================================
     3. ACTIVE SECTION HIGHLIGHTING IN NAVBAR
  =================================================================== */
  const sections = document.querySelectorAll('section[id]');

  const scrollActive = () => {
    const scrollY = window.pageYOffset + 120; // Offset for header clearance

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active-link');
        } else {
          navItem.classList.remove('active-link');
        }
      }
    });
  };

  window.addEventListener('scroll', scrollActive);
  scrollActive(); // Run on initial load

  /* ===================================================================
     4. PROJECT DETAILS MODAL
  =================================================================== */
  const projectDetails = {
    1: {
      title: "Predictive Drug Recommendation System using Machine Learning",
      category: "Machine Learning & Web Development",
      nature: "Academic Project",
      overview: "A healthcare-focused machine learning application designed to bridge patient symptom analysis with intelligent disease prediction and clinical guidance. The system processes structured medical datasets, evaluates candidate predictions with high-precision models, and delivers multi-faceted healthcare suggestions.",
      techStack: ["Python", "Machine Learning", "XGBoost", "Neural Networks", "Django", "MySQL / SQLite", "HTML", "CSS", "JavaScript"],
      contributions: [
        "Collected, cleaned, and normalized patient health parameters and medical datasets.",
        "Engineered features and conducted training experiments using XGBoost classifiers and Neural Networks.",
        "Evaluated classification metrics (precision, recall, F1-score) to prevent false predictions.",
        "Developed full Django web backend linking the trained ML pipelines to interactive web forms.",
        "Integrated MySQL/SQLite storage for past consultation history and safety recommendations."
      ],
      features: [
        "Accurate disease prediction based on multi-symptom input queries",
        "Contextual medicine recommendations based on verified clinical guidelines",
        "Detailed descriptions and severity overviews for identified conditions",
        "Precautionary guidelines and immediate care steps",
        "Tailored diet and nutritional suggestions to accelerate patient recovery",
        "Curated workout & activity guidance adapted to patient limitations"
      ]
    },
    2: {
      title: "Student Academic Profile Management System",
      category: "Java & Database Engineering",
      nature: "Technical Project",
      overview: "A robust, multi-tier web application built to streamline student academic records, registration, and credential authentication. The architecture leverages Java Servlets for backend request handling, JDBC for relational database connectivity, and an interactive front-end.",
      techStack: ["Java", "Java Servlets", "JDBC", "MySQL", "HTML", "CSS", "JavaScript"],
      contributions: [
        "Designed clean normalized 3NF database schemas for students, courses, and authentication tables.",
        "Implemented reliable JDBC transactions with prepared statements for database operations.",
        "Built Java Servlets to handle session lifecycle management, login validation, and access control.",
        "Structured modular DAO (Data Access Object) classes to cleanly separate business logic from data access.",
        "Created intuitive front-end forms with client-side JavaScript validation and modern CSS."
      ],
      features: [
        "Secure student registration with real-time input validation",
        "Robust login/logout authentication with active HTTP session management",
        "Form validation ensuring data accuracy before submission to MySQL",
        "Student profile dashboard with self-service update functionality",
        "Relational MySQL database storage preserving academic records",
        "Role-based UI access separation for admin operations and students"
      ]
    }
  };

  const modal = document.getElementById('project-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');
  const detailButtons = document.querySelectorAll('.project-detail-btn');

  const openModal = (projectId) => {
    const data = projectDetails[projectId];
    if (!data || !modal || !modalBody) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; color: var(--primary); font-weight: 700;">
          ${data.category} • ${data.nature}
        </span>
        <h3 id="modal-title" style="font-family: var(--font-heading); font-size: 1.5rem; margin-top: 0.4rem; color: #fff;">
          ${data.title}
        </h3>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-light); margin-bottom: 0.5rem; letter-spacing: 0.5px;">
          Project Overview
        </h4>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.65;">
          ${data.overview}
        </p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-light); margin-bottom: 0.65rem; letter-spacing: 0.5px;">
          Technologies
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
          ${data.techStack.map(t => `<span style="background: rgba(255,255,255,0.06); color: var(--text-primary); font-size: 0.8rem; padding: 0.25rem 0.6rem; border-radius: 4px; border: 1px solid var(--border-color);">${t}</span>`).join('')}
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-light); margin-bottom: 0.5rem; letter-spacing: 0.5px;">
          My Key Contributions
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem;">
          ${data.contributions.map(c => `<li style="font-size: 0.9rem; color: var(--text-secondary); padding-left: 1.2rem; position: relative;"><span style="position: absolute; left: 0; color: var(--primary);">▸</span>${c}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.75rem;">
        <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-light); margin-bottom: 0.5rem; letter-spacing: 0.5px;">
          Key Features
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
          ${data.features.map(f => `<span style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); color: var(--primary); font-size: 0.8rem; padding: 0.25rem 0.6rem; border-radius: 9999px;">${f}</span>`).join('')}
        </div>
      </div>

      <div style="padding-top: 1.25rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <span style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
          * Code repository links will be activated once published.
        </span>
        <button id="modal-inner-close" class="btn btn--secondary btn--sm">Close</button>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook internal close button
    const innerClose = document.getElementById('modal-inner-close');
    if (innerClose) {
      innerClose.addEventListener('click', closeModal);
    }
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project');
      openModal(id);
    });
  });

  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  /* ===================================================================
     5. CONTACT FORM (MAILTO PRE-COMPOSER)
  =================================================================== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      const emailRecipient = 'greeshmithareddyvagalla@gmail.com';
      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
      const mailtoBody = encodeURIComponent(
        `Hi Greeshmitha,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
      );

      // Launch default email client
      window.location.href = `mailto:${emailRecipient}?subject=${mailtoSubject}&body=${mailtoBody}`;
    });
  }

  /* ===================================================================
     6. THEME TOGGLE (Dark / Light with localStorage persistence)
  =================================================================== */
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  // Load saved theme preference
  const savedTheme = localStorage.getItem('gv-portfolio-theme');
  if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('gv-portfolio-theme', newTheme);
    });
  }
});

