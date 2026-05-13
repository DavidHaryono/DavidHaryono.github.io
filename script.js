// ─── THEME TOGGLE ───
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved preference
const saved = localStorage.getItem('theme');
if (saved === 'light') {
  body.classList.add('light');
  if (toggleBtn) updateToggleLabel(true);
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isLight = body.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateToggleLabel(isLight);
  });
}

function updateToggleLabel(isLight) {
  if (!toggleBtn) return;
  toggleBtn.querySelector('.icon').textContent = isLight ? '☀️' : '🌙';
  toggleBtn.querySelector('.label').textContent = isLight ? 'Light' : 'Dark';
}

// ─── CURSOR GLOW ───
const glow = document.getElementById('glow');
if (glow) {
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}

// ─── SCROLL REVEAL ───
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
