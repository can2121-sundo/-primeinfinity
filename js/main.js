/* ============================================
   PrimeInfinity 2D Luxury Website
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNavbarScroll();
  initIntersectionObserver();
  initSmoothScroll();
  initNewsletterForm();
  initContactForm();
  initBackToTop();
  initActiveNavLink();
  initRegistrationForm();
  initHeroSlider();
  initShowcaseSlider();
});

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

function initIntersectionObserver() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay;
          if (delay) entry.target.style.animationDelay = `${delay}s`;
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  animatedElements.forEach((el) => observer.observe(el));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const t = window.translations && window.translations[currentLang] ? window.translations[currentLang] : {};
    if (input && input.value.trim()) {
      alert(t.alert_subscribe_thanks || 'Merci pour votre inscription ! Nous vous contacterons bientôt.');
      input.value = '';
    } else {
      alert(t.alert_subscribe_error || 'Veuillez entrer une adresse email valide.');
    }
  });
}

function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#nom')?.value.trim() || '';
    const email = form.querySelector('#email')?.value.trim() || '';
    const subject = form.querySelector('#sujet')?.value.trim() || 'Contact PrimeInfinity';
    const message = form.querySelector('#message')?.value.trim() || '';

    const t = window.translations && window.translations[currentLang] ? window.translations[currentLang] : {};
    if (!name || !email || !message) {
      alert(t.alert_form_required || 'Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    const mailtoUrl = `mailto:contact@primeinfinity.fr?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoUrl;
  });
}

function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  const handleScroll = () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ---------- Registration Multi-Step Form ---------- */
function initRegistrationForm() {
  const form = document.getElementById('registration-form');
  if (!form) return;

  let currentStep = 1;
  const totalSteps = 4;
  const progressFill = document.getElementById('reg-progress-fill');

  function updateProgress() {
    if (progressFill) {
      progressFill.style.width = ((currentStep / totalSteps) * 100) + '%';
    }
    document.querySelectorAll('.reg-step-dot').forEach((dot, index) => {
      const stepNum = index + 1;
      dot.classList.remove('active', 'completed');
      if (stepNum === currentStep) dot.classList.add('active');
      else if (stepNum < currentStep) dot.classList.add('completed');
    });
  }

  function showStep(step) {
    form.querySelectorAll('.reg-step').forEach(s => s.classList.remove('active'));
    const target = form.querySelector('.reg-step[data-step="' + step + '"]');
    if (target) target.classList.add('active');
    currentStep = step;
    updateProgress();
  }

  function validateCurrentStep() {
    const currentStepEl = form.querySelector('.reg-step.active');
    if (!currentStepEl) return true;
    const inputs = currentStepEl.querySelectorAll('input[required]');
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = '#ff4444';
      } else {
        input.style.borderColor = '';
      }
    });
    return valid;
  }

  form.addEventListener('click', (e) => {
    if (e.target.classList.contains('reg-next')) {
      if (validateCurrentStep() && currentStep < totalSteps) {
        showStep(currentStep + 1);
      }
    }
    if (e.target.classList.contains('reg-back') && currentStep > 1) {
      showStep(currentStep - 1);
    }
    if (e.target.classList.contains('reg-finish')) {
      if (validateCurrentStep()) {
        showStep(5);
      }
    }
  });

  form.addEventListener('input', (e) => {
    if (e.target.tagName === 'INPUT') {
      e.target.style.borderColor = '';
    }
  });

  const cardInput = document.getElementById('reg-card-number');
  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\s/g, '').replace(/[^0-9]/g, '');
      const parts = val.match(/.{1,4}/g);
      e.target.value = parts ? parts.join(' ') : val;
    });
  }

  const expiryInput = document.getElementById('reg-card-expiry');
  if (expiryInput) {
    expiryInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/[^0-9]/g, '');
      if (val.length >= 2) val = val.slice(0, 2) + '/' + val.slice(2, 4);
      e.target.value = val;
    });
  }
}

/* ---------- Hero Slider ---------- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots span');
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');
  if (!slides.length) return;

  let current = 0;
  const total = slides.length;
  let autoPlay;

  function show(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    current = index;
  }

  function next() {
    show((current + 1) % total);
  }

  function prev() {
    show((current - 1 + total) % total);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAuto(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAuto(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { show(i); resetAuto(); });
  });

  function startAuto() {
    autoPlay = setInterval(next, 5000);
  }

  function resetAuto() {
    clearInterval(autoPlay);
    startAuto();
  }

  startAuto();
}

/* ---------- Showcase Mini Slider ---------- */
function initShowcaseSlider() {
  const section = document.getElementById('showcase');
  if (!section) return;

  const slides = section.querySelectorAll('.showcase-slide');
  const dots = section.querySelectorAll('.showcase-dots span');
  const prevBtn = section.querySelector('.showcase-prev');
  const nextBtn = section.querySelector('.showcase-next');
  if (!slides.length) return;

  let current = 0;
  const total = slides.length;

  function show(index) {
    if (index === current && slides[index].classList.contains('active')) return;
    slides.forEach((s, i) => {
      if (i === index) s.classList.add('active');
      else s.classList.remove('active');
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    current = index;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => show((current + 1) % total));
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => show((current - 1 + total) % total));
  }
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => show(i));
  });
}
