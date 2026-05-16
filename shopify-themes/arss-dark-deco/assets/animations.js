/* ============================================================
   ArSs Dark Deco — Animations & Interactive Effects
   ============================================================ */

'use strict';

/* ─── Custom Cursor ──────────────────────────────────────── */
const cursor = document.getElementById('cursor-glow');

if (cursor) {
  let mouseX = 0, mouseY = 0;
  let curX = 0, curY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    const speed = 0.12;
    curX += (mouseX - curX) * speed;
    curY += (mouseY - curY) * speed;
    cursor.style.left = curX + 'px';
    cursor.style.top  = curY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

/* ─── Header scroll state ────────────────────────────────── */
const header = document.querySelector('.site-header');
if (header) {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 60);
    header.classList.toggle('hide', scrollY > lastScroll && scrollY > 200);
    lastScroll = scrollY;
  }, { passive: true });
}

/* ─── Parallax Hero City Layers ──────────────────────────── */
class ParallaxCity {
  constructor() {
    this.layers = [
      { el: document.querySelector('.hero-city-far'),  speed: 0.15 },
      { el: document.querySelector('.hero-city-mid'),  speed: 0.30 },
      { el: document.querySelector('.hero-city-near'), speed: 0.50 },
      { el: document.querySelector('.hero-fog'),       speed: 0.60 },
    ].filter(l => l.el);

    this.ticking = false;
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
  }

  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        this.layers.forEach(({ el, speed }) => {
          el.style.transform = `translateY(${scrollY * speed}px)`;
        });
        this.ticking = false;
      });
      this.ticking = true;
    }
  }
}

/* ─── Star Field Canvas ──────────────────────────────────── */
class StarField {
  constructor(container) {
    if (!container) return;
    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
    container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.resize();
    this.init();
    this.animate();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width  = this.canvas.offsetWidth  || window.innerWidth;
    this.canvas.height = this.canvas.offsetHeight || window.innerHeight;
    this.init();
  }

  init() {
    const count = Math.floor((this.canvas.width * this.canvas.height) / 6000);
    this.stars = Array.from({ length: count }, () => ({
      x:       Math.random() * this.canvas.width,
      y:       Math.random() * this.canvas.height * 0.6,
      r:       Math.random() * 1.2 + 0.2,
      alpha:   Math.random() * 0.8 + 0.2,
      pulse:   Math.random() * Math.PI * 2,
      speed:   Math.random() * 0.02 + 0.005,
      color:   Math.random() > 0.8 ? '#c9913a' :
               Math.random() > 0.6 ? '#2ab8c0' : '#e8e0d0',
    }));
  }

  animate() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.stars.forEach(s => {
      s.pulse += s.speed;
      const a = s.alpha * (0.6 + 0.4 * Math.sin(s.pulse));

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = a;
      ctx.fill();

      // Occasional glow on bright stars
      if (s.r > 1.0) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 2, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = a * 0.15;
        ctx.fill();
      }
    });

    ctx.globalAlpha = 1;
    requestAnimationFrame(() => this.animate());
  }
}

/* ─── City Skyline SVG Builder ───────────────────────────── */
class CityBuilder {
  constructor() {
    this.buildLayers();
  }

  buildLayers() {
    this.buildLayer('.hero-city-far',  this.farBuildings());
    this.buildLayer('.hero-city-mid',  this.midBuildings());
    this.buildLayer('.hero-city-near', this.nearBuildings());
  }

  buildLayer(selector, svgContent) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.innerHTML = svgContent;
    // Animate buildings in on load
    const paths = el.querySelectorAll('.building');
    paths.forEach((p, i) => {
      p.style.opacity = '0';
      p.style.transform = 'translateY(20px)';
      p.style.transition = `opacity 1.5s ease ${0.1 * i}s, transform 1.5s ease ${0.1 * i}s`;
      setTimeout(() => {
        p.style.opacity = '';
        p.style.transform = '';
      }, 100);
    });
  }

  farBuildings() {
    // Abstract art deco skyline — far, faded
    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400" preserveAspectRatio="none"
         style="width:100%;height:100%;display:block;">
      <defs>
        <linearGradient id="farGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a1025" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#080810" stop-opacity="0.9"/>
        </linearGradient>
        <filter id="glow-far">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <g class="building" fill="url(#farGrad)">
        <!-- Central spire (Art Deco tower) -->
        <polygon points="680,20 700,20 710,50 720,50 730,80 740,80 760,380 620,380 640,80 650,80 660,50 670,50"/>
        <!-- Left cluster -->
        <rect x="200" y="100" width="60" height="280" rx="0"/>
        <rect x="215" y="80"  width="30" height="30"/>
        <rect x="220" y="60"  width="20" height="25"/>
        <rect x="140" y="140" width="55" height="240"/>
        <rect x="152" y="120" width="31" height="25"/>
        <rect x="60"  y="180" width="75" height="200"/>
        <rect x="310" y="120" width="70" height="260"/>
        <rect x="325" y="100" width="40" height="25"/>
        <rect x="400" y="160" width="50" height="220"/>
        <!-- Right cluster -->
        <rect x="1180" y="100" width="60" height="280"/>
        <rect x="1185" y="80"  width="50" height="25"/>
        <rect x="1190" y="60"  width="40" height="25"/>
        <rect x="1250" y="140" width="70" height="240"/>
        <rect x="1260" y="120" width="50" height="25"/>
        <rect x="1330" y="160" width="80" height="220"/>
        <rect x="1100" y="120" width="75" height="260"/>
        <rect x="1115" y="100" width="45" height="25"/>
        <rect x="1020" y="160" width="70" height="220"/>
        <rect x="1035" y="145" width="40" height="20"/>
        <!-- Mid background fill -->
        <rect x="0"    y="200" width="100%" height="200"/>
      </g>
      <!-- Tiny windows -->
      <g fill="rgba(201,145,58,0.15)" class="building">
        ${this.generateWindows(200, 110, 60, 270, 8, 12)}
        ${this.generateWindows(310, 130, 70, 250, 8, 14)}
        ${this.generateWindows(1180, 110, 60, 270, 8, 12)}
        ${this.generateWindows(1250, 150, 70, 230, 8, 12)}
      </g>
    </svg>`;
  }

  midBuildings() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 360" preserveAspectRatio="none"
         style="width:100%;height:100%;display:block;">
      <defs>
        <linearGradient id="midGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0f0a1a" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#050508" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <g class="building" fill="url(#midGrad)">
        <rect x="0"    y="120" width="90"  height="240"/>
        <rect x="0"    y="100" width="60"  height="25"/>
        <rect x="90"   y="80"  width="110" height="280"/>
        <rect x="110"  y="60"  width="70"  height="25"/>
        <rect x="120"  y="40"  width="50"  height="25"/>
        <rect x="130"  y="20"  width="30"  height="25"/>
        <rect x="200"  y="100" width="80"  height="260"/>
        <rect x="215"  y="80"  width="50"  height="25"/>
        <rect x="280"  y="60"  width="100" height="300"/>
        <rect x="300"  y="40"  width="60"  height="25"/>
        <rect x="310"  y="20"  width="40"  height="25"/>
        <!-- Art deco stepped pyramid left -->
        <polygon points="390,360 390,80 410,80 410,100 430,100 430,120 450,120 450,140 470,140 470,360"/>
        <rect x="480"  y="140" width="70"  height="220"/>
        <rect x="490"  y="120" width="50"  height="25"/>
        <rect x="550"  y="100" width="60"  height="260"/>
        <rect x="560"  y="80"  width="40"  height="25"/>
        <rect x="560"  y="180" width="90"  height="180"/>
        <rect x="650"  y="100" width="80"  height="260"/>
        <rect x="660"  y="80"  width="60"  height="25"/>
        <rect x="670"  y="60"  width="40"  height="25"/>
        <!-- Central tower mid -->
        <rect x="730"  y="40"  width="100" height="320"/>
        <rect x="745"  y="20"  width="70"  height="25"/>
        <rect x="755"  y="0"   width="50"  height="25"/>
        <rect x="830"  y="80"  width="90"  height="280"/>
        <rect x="840"  y="60"  width="70"  height="25"/>
        <!-- Art deco stepped pyramid right -->
        <polygon points="970,360 970,140 990,140 990,120 1010,120 1010,100 1030,100 1030,80 1050,80 1050,360"/>
        <rect x="920"  y="120" width="60"  height="240"/>
        <rect x="930"  y="100" width="40"  height="25"/>
        <rect x="1060" y="100" width="80"  height="260"/>
        <rect x="1070" y="80"  width="60"  height="25"/>
        <rect x="1140" y="120" width="70"  height="240"/>
        <rect x="1150" y="100" width="50"  height="25"/>
        <rect x="1210" y="80"  width="100" height="280"/>
        <rect x="1225" y="60"  width="70"  height="25"/>
        <rect x="1235" y="40"  width="50"  height="25"/>
        <rect x="1310" y="110" width="80"  height="250"/>
        <rect x="1390" y="130" width="50"  height="230"/>
        <rect x="0"    y="280" width="100%" height="80"/>
      </g>
      <!-- Windows mid buildings -->
      <g fill="rgba(201,145,58,0.25)" class="building">
        ${this.generateWindows(90,  90, 110, 270, 6, 15)}
        ${this.generateWindows(280, 70, 100, 290, 5, 16)}
        ${this.generateWindows(730, 50, 100, 310, 6, 18)}
        ${this.generateWindows(1210, 90, 100, 270, 6, 15)}
      </g>
      <!-- Neon/light accents on some windows -->
      <g fill="rgba(42,184,192,0.3)" class="building">
        ${this.generateWindows(550, 110, 60, 250, 4, 10)}
        ${this.generateWindows(1060, 110, 80, 250, 4, 10)}
      </g>
    </svg>`;
  }

  nearBuildings() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" preserveAspectRatio="none"
         style="width:100%;height:100%;display:block;">
      <defs>
        <linearGradient id="nearGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#080810"/>
          <stop offset="100%" stop-color="#020204"/>
        </linearGradient>
      </defs>
      <g class="building" fill="url(#nearGrad)">
        <rect x="0"    y="0"   width="160" height="300"/>
        <rect x="160"  y="60"  width="200" height="240"/>
        <rect x="165"  y="40"  width="190" height="25"/>
        <rect x="175"  y="20"  width="170" height="25"/>
        <!-- Art deco cornice detail -->
        <rect x="360"  y="80"  width="220" height="220"/>
        <rect x="360"  y="60"  width="220" height="24"/>
        <rect x="370"  y="36"  width="200" height="28"/>
        <rect x="380"  y="12"  width="180" height="28"/>
        <rect x="390"  y="0"   width="160" height="16"/>
        <rect x="580"  y="100" width="160" height="200"/>
        <rect x="585"  y="80"  width="150" height="24"/>
        <rect x="740"  y="60"  width="200" height="240"/>
        <rect x="745"  y="40"  width="190" height="24"/>
        <rect x="755"  y="20"  width="170" height="24"/>
        <rect x="765"  y="0"   width="150" height="24"/>
        <rect x="940"  y="80"  width="180" height="220"/>
        <rect x="945"  y="60"  width="170" height="24"/>
        <!-- Stepped deco right -->
        <polygon points="1120,300 1120,40 1140,40 1140,60 1160,60 1160,80 1180,80 1180,100 1300,100 1300,300"/>
        <rect x="1300" y="40"  width="140" height="260"/>
        <rect x="1305" y="20"  width="130" height="24"/>
        <rect x="1310" y="0"   width="120" height="24"/>
        <rect x="0"    y="200" width="100%" height="100"/>
      </g>
      <!-- Bright windows near buildings — more visible -->
      <g fill="rgba(201,145,58,0.4)">
        ${this.generateWindows(0,   10, 160, 290, 8, 16)}
        ${this.generateWindows(160, 70, 200, 230, 9, 13)}
        ${this.generateWindows(360, 90, 220, 210, 10, 12)}
        ${this.generateWindows(740, 70, 200, 230, 9, 13)}
        ${this.generateWindows(1300, 50, 140, 250, 7, 14)}
      </g>
      <!-- Crimson windows -->
      <g fill="rgba(192,16,42,0.3)">
        ${this.generateWindows(580, 110, 160, 190, 7, 10)}
        ${this.generateWindows(1120, 110, 160, 190, 7, 10)}
      </g>
    </svg>`;
  }

  generateWindows(bx, by, bw, bh, cols, rows) {
    const rects = [];
    const cw = 4, ch = 3, gx = (bw - cols*cw) / (cols+1), gy = (bh - rows*ch) / (rows+1);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() > 0.35) {
          const x = bx + gx*(c+1) + cw*c;
          const y = by + gy*(r+1) + ch*r;
          rects.push(`<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${cw}" height="${ch}"/>`);
        }
      }
    }
    return rects.join('');
  }
}

/* ─── 3D Product Card Tilt ───────────────────────────────── */
class CardTilt {
  constructor() {
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mousemove', (e) => this.onMove(e, card));
      card.addEventListener('mouseleave', (e) => this.onLeave(card));
    });
  }

  onMove(e, card) {
    const rect  = card.getBoundingClientRect();
    const cx    = rect.left + rect.width  / 2;
    const cy    = rect.top  + rect.height / 2;
    const dx    = (e.clientX - cx) / (rect.width  / 2);
    const dy    = (e.clientY - cy) / (rect.height / 2);
    const rotX  = -dy * 6;
    const rotY  =  dx * 6;
    const light = `radial-gradient(circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px,
                   rgba(201,145,58,0.12) 0%, transparent 60%)`;

    card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    card.style.backgroundImage = light;
  }

  onLeave(card) {
    card.style.transform = '';
    card.style.backgroundImage = '';
  }
}

/* ─── Scroll Reveal ──────────────────────────────────────── */
class ScrollReveal {
  constructor() {
    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children')
            .forEach(el => this.io.observe(el));
  }
}

/* ─── Neon Text Shimmer ──────────────────────────────────── */
function initNeonEffects() {
  document.querySelectorAll('[data-neon]').forEach(el => {
    el.classList.add('neon-text');
  });
}

/* ─── Page Transition ────────────────────────────────────── */
function initPageTransitions() {
  const overlay = document.getElementById('page-overlay');
  if (!overlay) return;

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript') ||
        href.startsWith('mailto') || href.startsWith('tel') ||
        link.target === '_blank') return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.add('active');
      setTimeout(() => { window.location.href = href; }, 400);
    });
  });

  // Fade in on load
  window.addEventListener('pageshow', () => {
    overlay.classList.remove('active');
  });
}

/* ─── Art Deco Geometric Animation on Hero ───────────────── */
class DecoGeometry {
  constructor(canvas) {
    if (!canvas) return;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.shapes = [];
    this.resize();
    this.initShapes();
    this.animate();
    window.addEventListener('resize', () => { this.resize(); this.initShapes(); });
  }

  resize() {
    this.canvas.width  = this.canvas.offsetWidth  || window.innerWidth;
    this.canvas.height = this.canvas.offsetHeight || window.innerHeight;
  }

  initShapes() {
    this.shapes = [];
    const { width: w, height: h } = this.canvas;

    // Floating diamonds
    for (let i = 0; i < 8; i++) {
      this.shapes.push({
        type: 'diamond',
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 6 + 2,
        alpha: Math.random() * 0.3 + 0.05,
        color: Math.random() > 0.5 ? '#c9913a' : '#2ab8c0',
        speed: { x: (Math.random()-0.5)*0.2, y: (Math.random()-0.5)*0.2 },
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Concentric deco circles (Art Deco "sun" motif)
    this.shapes.push({
      type: 'decoCircle',
      x: w * 0.15,
      y: h * 0.2,
      radii: [20, 35, 50, 70],
      alpha: 0.06,
      color: '#c9913a',
      rotation: 0,
    });

    this.shapes.push({
      type: 'decoCircle',
      x: w * 0.85,
      y: h * 0.3,
      radii: [15, 28, 42, 58],
      alpha: 0.05,
      color: '#2ab8c0',
      rotation: Math.PI / 4,
    });

    // Corner geometric line patterns
    this.shapes.push({ type: 'cornerPattern', corner: 'tl', alpha: 0.08 });
    this.shapes.push({ type: 'cornerPattern', corner: 'tr', alpha: 0.08 });
  }

  animate() {
    const ctx = this.ctx;
    const { width: w, height: h } = this.canvas;
    ctx.clearRect(0, 0, w, h);

    this.shapes.forEach(s => {
      ctx.save();
      ctx.globalAlpha = s.alpha || 0.1;

      switch (s.type) {
        case 'diamond':
          s.pulse += 0.02;
          s.x += s.speed.x;
          s.y += s.speed.y;
          if (s.x < 0 || s.x > w) s.speed.x *= -1;
          if (s.y < 0 || s.y > h) s.speed.y *= -1;
          const a = s.alpha * (0.6 + 0.4 * Math.sin(s.pulse));
          ctx.globalAlpha = a;
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y - s.size);
          ctx.lineTo(s.x + s.size, s.y);
          ctx.lineTo(s.x, s.y + s.size);
          ctx.lineTo(s.x - s.size, s.y);
          ctx.closePath();
          ctx.fill();
          break;

        case 'decoCircle':
          s.rotation += 0.002;
          ctx.translate(s.x, s.y);
          ctx.rotate(s.rotation);
          ctx.strokeStyle = s.color;
          s.radii.forEach((r, i) => {
            ctx.lineWidth = i === 0 ? 2 : 1;
            ctx.globalAlpha = s.alpha * (1 - i * 0.15);
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.stroke();
          });
          // Fan lines
          ctx.globalAlpha = s.alpha * 0.5;
          for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(a) * s.radii[3], Math.sin(a) * s.radii[3]);
            ctx.strokeStyle = s.color;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
          break;

        case 'cornerPattern':
          const size = 80;
          const pad  = 40;
          ctx.strokeStyle = '#c9913a';
          ctx.lineWidth = 1;
          const isRight  = s.corner === 'tr' || s.corner === 'br';
          const isBottom = s.corner === 'bl' || s.corner === 'br';
          const ox = isRight  ? w - pad : pad;
          const oy = isBottom ? h - pad : pad;
          const sx = isRight  ? -1 : 1;
          const sy = isBottom ? -1 : 1;

          // L-shape bracket
          ctx.beginPath();
          ctx.moveTo(ox + sx * size, oy);
          ctx.lineTo(ox, oy);
          ctx.lineTo(ox, oy + sy * size);
          ctx.stroke();

          // Inner bracket
          ctx.globalAlpha = s.alpha * 0.5;
          ctx.beginPath();
          ctx.moveTo(ox + sx * (size-12), oy + sy*12);
          ctx.lineTo(ox + sx*12, oy + sy*12);
          ctx.lineTo(ox + sx*12, oy + sy*(size-12));
          ctx.stroke();
          break;
      }

      ctx.restore();
    });

    requestAnimationFrame(() => this.animate());
  }
}

/* ─── Mobile Menu ────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu   = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
}

/* ─── Image lazy loading with fade ──────────────────────── */
function initLazyImages() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.onload = () => img.classList.add('loaded');
        }
        io.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  document.querySelectorAll('img[data-src]').forEach(img => io.observe(img));
}

/* ─── Cart Drawer ────────────────────────────────────────── */
function initCartDrawer() {
  const openBtns  = document.querySelectorAll('[data-cart-open]');
  const closeBtn  = document.querySelector('[data-cart-close]');
  const drawer    = document.querySelector('.cart-drawer');
  const overlay   = document.getElementById('page-overlay');
  if (!drawer) return;

  const open  = () => { drawer.classList.add('open'); if (overlay) overlay.style.opacity = '0.4'; };
  const close = () => { drawer.classList.remove('open'); if (overlay) overlay.style.opacity = '0'; };

  openBtns.forEach(btn => btn.addEventListener('click', open));
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay)  overlay.addEventListener('click', close);
}

/* ─── Initialize Everything ──────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  new StarField(document.querySelector('.hero-stars'));
  new CityBuilder();
  new ParallaxCity();
  new DecoGeometry(document.getElementById('deco-canvas'));
  new CardTilt();
  new ScrollReveal();
  initNeonEffects();
  initPageTransitions();
  initMobileMenu();
  initLazyImages();
  initCartDrawer();

  // Page entrance animation
  document.body.classList.add('loaded');
});
