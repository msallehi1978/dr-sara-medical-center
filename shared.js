/* ─────────────────────────────────────────────────────────────
   shared.js  —  injects nav + footer into every page
   ───────────────────────────────────────────────────────────── */

(function () {
  const NAV_LINKS = [
    { label: 'Home',         href: 'index.html',    key: 'home'      },
    { label: 'Services',     href: 'services.html', key: 'services'  },
    { label: 'Our Team',     href: 'doctors.html',  key: 'doctors'   },
    { label: 'Patient Info', href: 'patients.html', key: 'patients'  },
    { label: 'Contact',      href: 'contact.html',  key: 'contact'   },
  ];

  const currentPage = document.body.dataset.page || 'home';

  const desktopLinks = NAV_LINKS.map(({ label, href, key }) => {
    const active = key === currentPage;
    return active
      ? `<a href="${href}" class="nav-link px-3 py-2 rounded text-primary border-b-2 border-primary font-semibold text-sm transition-all duration-200">${label}</a>`
      : `<a href="${href}" class="nav-link px-3 py-2 rounded text-slate-600 hover:text-primary hover:bg-surface-container-low font-medium text-sm transition-all duration-200">${label}</a>`;
  }).join('');

  const mobileLinks = NAV_LINKS.map(({ label, href, key }) => {
    const active = key === currentPage;
    return `<a href="${href}" class="py-3 px-3 rounded ${active ? 'text-primary font-semibold' : 'text-slate-600 font-medium'} text-sm hover:text-primary transition-colors border-b border-slate-50" onclick="closeMobileMenu()">${label}</a>`;
  }).join('');

  /* ── Inject nav ─────────────────────────────────────────── */
  const navHTML = `
<nav id="navbar" class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-shadow duration-300">
  <div class="max-w-[1280px] mx-auto px-6 md:px-8 w-full flex justify-between items-center h-[72px] md:h-20">
    <a href="index.html" class="flex items-center gap-2 group shrink-0">
      <span class="material-symbols-outlined fill-icon text-3xl text-primary group-hover:scale-110 transition-transform">local_hospital</span>
      <div class="flex flex-col leading-none">
        <span class="text-base md:text-lg font-bold tracking-tight text-primary font-display">Dr. Sara Medical Center</span>
        <span class="text-[10px] text-slate-400 font-medium tracking-wide hidden md:block">Dental · Aesthetic · Dermatology · GP</span>
      </div>
    </a>
    <div class="hidden md:flex items-center gap-1">${desktopLinks}</div>
    <div class="flex items-center gap-2 md:gap-3">
      <button id="lang-toggle" aria-label="Switch language"
        class="p-2 rounded text-primary hover:bg-surface-container-low transition-colors flex items-center gap-1 text-sm font-semibold">
        <span class="material-symbols-outlined text-xl">language</span>
        <span class="hidden md:inline" id="lang-label">عربي</span>
      </button>
      <a href="contact.html"
        class="hidden sm:inline-flex items-center gap-2 bg-primary text-on-primary font-semibold text-sm px-5 py-2.5 rounded hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 ambient-shadow">
        <span class="material-symbols-outlined text-base">calendar_month</span>Book Appointment
      </a>
      <button id="menu-toggle" aria-label="Open menu" class="md:hidden p-2 text-primary">
        <span class="material-symbols-outlined text-3xl" id="menu-icon">menu</span>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="md:hidden bg-white border-t border-slate-100">
    <div class="flex flex-col px-6 py-4 gap-1">
      ${mobileLinks}
      <a href="contact.html"
        class="mt-3 flex items-center justify-center gap-2 bg-primary text-on-primary py-3 px-6 rounded text-sm font-semibold"
        onclick="closeMobileMenu()">
        <span class="material-symbols-outlined text-base">calendar_month</span>Book Appointment
      </a>
    </div>
  </div>
</nav>`;

  /* ── Inject footer ─────────────────────────────────────── */
  const footerHTML = `
<footer class="bg-slate-50 border-t border-slate-200">
  <div class="max-w-[1280px] mx-auto px-6 md:px-8 py-14">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
      <div class="sm:col-span-2 lg:col-span-1">
        <div class="flex items-center gap-2 text-primary font-bold text-lg font-display mb-1">
          <span class="material-symbols-outlined fill-icon text-2xl">local_hospital</span>Dr. Sara Medical Center
        </div>
        <p class="text-xs text-slate-400 mb-4">Dental · Aesthetic · Dermatology · GP & Pediatrics</p>
        <p class="text-sm text-slate-500 leading-relaxed mb-5">Providing comprehensive healthcare with a personal touch in the heart of Deira, Dubai.</p>
        <div class="flex gap-3">
          <a href="#" aria-label="Instagram" class="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all duration-200"><span class="material-symbols-outlined text-base">photo_camera</span></a>
          <a href="https://wa.me/971505108646" aria-label="WhatsApp" class="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all duration-200"><span class="material-symbols-outlined text-base">chat</span></a>
          <a href="tel:+971505108646" aria-label="Phone" class="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all duration-200"><span class="material-symbols-outlined text-base">call</span></a>
        </div>
      </div>
      <div>
        <h4 class="font-semibold text-primary mb-4 text-sm uppercase tracking-wide">Our Services</h4>
        <ul class="space-y-2.5 text-sm text-slate-500">
          <li><a href="services.html#dental" class="hover:text-primary transition-colors">🦷 Dental Services</a></li>
          <li><a href="services.html#aesthetic" class="hover:text-primary transition-colors">✨ Aesthetic & Beauty</a></li>
          <li><a href="services.html#dermatology" class="hover:text-primary transition-colors">🩺 Dermatology</a></li>
          <li><a href="services.html#gp" class="hover:text-primary transition-colors">👶 GP & Pediatrics</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-primary mb-4 text-sm uppercase tracking-wide">Working Hours</h4>
        <ul class="space-y-2 text-sm text-slate-500">
          <li class="flex justify-between gap-3"><span>Saturday</span><span class="text-slate-700 font-medium">12:00–21:00</span></li>
          <li class="flex justify-between gap-3"><span>Sunday</span><span class="text-slate-700 font-medium">10:00–18:00</span></li>
          <li class="flex justify-between gap-3"><span>Mon – Wed</span><span class="text-slate-700 font-medium">13:00–21:00</span></li>
          <li class="flex justify-between gap-3"><span>Thursday</span><span class="text-red-500 font-medium">Closed</span></li>
          <li class="flex justify-between gap-3"><span>Friday</span><span class="text-slate-700 font-medium">15:00–21:00</span></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-primary mb-4 text-sm uppercase tracking-wide">Contact</h4>
        <div class="space-y-3 text-sm text-slate-500">
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">location_on</span>
            <span>Al Khabaisi, Abu Baker Al Siddique Road, Deira, Dubai, UAE</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-base shrink-0">call</span>
            <a href="tel:+971505108646" class="hover:text-primary transition-colors">+971 50 510 8646</a>
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-base shrink-0">star</span>
            <span class="text-slate-600 font-medium">4.7 ★ · 139 Reviews</span>
          </div>
        </div>
        <div class="mt-4">
          <button id="footer-en" onclick="setLang('en')" class="text-sm font-semibold text-primary">English</button>
          <span class="text-slate-300 mx-2">|</span>
          <button id="footer-ar" onclick="setLang('ar')" class="text-sm text-slate-400 hover:text-primary transition-colors">العربية</button>
        </div>
      </div>
    </div>
    <div class="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
      <p class="text-sm text-slate-400">© 2025 Dr. Sara Medical Center. All rights reserved · Deira, Dubai, UAE</p>
      <p class="text-xs text-slate-300">Licensed Healthcare Provider · Wheelchair Accessible · Parking Available</p>
    </div>
  </div>
</footer>`;

  /* ── WhatsApp float button ──────────────────────────────── */
  const waHTML = `
<a href="https://wa.me/971505108646?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dr.%20Sara%20Medical%20Center."
   id="wa-float"
   target="_blank" rel="noopener"
   aria-label="Book appointment on WhatsApp"
   title="Chat with us on WhatsApp">
  <span class="wa-ring"></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  <span class="wa-label">Chat with us</span>
</a>`;

  /* ── Mount ──────────────────────────────────────────────── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  document.body.insertAdjacentHTML('beforeend', waHTML);

  /* ── Mobile menu behaviour ──────────────────────────────── */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon   = document.getElementById('menu-icon');

  menuToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuIcon.textContent = open ? 'close' : 'menu';
  });

  window.closeMobileMenu = function () {
    mobileMenu.classList.remove('open');
    menuIcon.textContent = 'menu';
  };

  /* ── Navbar shadow on scroll ────────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(0,96,101,0.08)' : '';
  });

  /* ── Language toggle ────────────────────────────────────── */
  let currentLang = 'en';

  window.setLang = function (lang) {
    currentLang = lang;
    const isAr = lang === 'ar';
    document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    document.getElementById('lang-label').textContent = isAr ? 'English' : 'عربي';
    const en = document.getElementById('footer-en');
    const ar = document.getElementById('footer-ar');
    if (en && ar) {
      en.className = isAr ? 'text-sm text-slate-400 hover:text-primary transition-colors' : 'text-sm font-semibold text-primary';
      ar.className = isAr ? 'text-sm font-semibold text-primary' : 'text-sm text-slate-400 hover:text-primary transition-colors';
    }
  };

  document.getElementById('lang-toggle').addEventListener('click', () => {
    setLang(currentLang === 'en' ? 'ar' : 'en');
  });

  /* ── Scroll-reveal ──────────────────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
