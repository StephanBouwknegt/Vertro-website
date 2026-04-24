/* =============================================================
   VERTRO — Shared JavaScript
   ============================================================= */

// Add js-ready immediately so CSS can safely use opacity:0 for animations
// Without this, Safari and other browsers show blank content
document.documentElement.classList.add('js-ready');

// ── Mobile nav toggle ──
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});


// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));


// ── Calculator ──
let currentRate = 2800; // NOK/night base (Mountain)

function setLocation(btn) {
  document.querySelectorAll('.location-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentRate = parseInt(btn.dataset.rate);
  updateCalc();
}

function updateCalc() {
  const weeks   = parseInt(document.getElementById('weeks-slider').value);
  const beds    = parseInt(document.getElementById('beds-slider').value);
  const nights  = weeks * 7;

  document.getElementById('weeks-val').textContent = weeks;
  document.getElementById('beds-val').textContent  = beds;

  // Occupancy: ~48% average, adjusted slightly for beds
  const occupancy  = 0.46 + (beds - 1) * 0.01;
  // Size premium per bedroom
  const sizeFactor = 0.88 + (beds * 0.06);
  // Gross revenue
  const gross      = Math.round(nights * currentRate * sizeFactor * occupancy / 1000) * 1000;
  // Owner take after 25% commission
  const ownerNet   = Math.round(gross * 0.75 / 1000) * 1000;

  document.getElementById('calc-result').textContent =
    'NOK ' + ownerNet.toLocaleString('no-NO');
}

// Init
updateCalc();


// ── Form submit (placeholder) ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('[type="submit"]');
  btn.textContent = 'Message sent. We will be in touch soon.';
  btn.style.background = 'var(--c-500)';
  btn.disabled = true;
}
</script>
