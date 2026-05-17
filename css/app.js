// ── Loader ──
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hide'), 1500);
  });
}

// ── Toast ──
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('fadeout');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}

// ── Logout Confirm ──
function initLogout(redirectUrl = '../index.html') {
  const modal = document.getElementById('logout-modal');
  if (!modal) return;
  document.querySelectorAll('.logout-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.preventDefault(); modal.classList.add('show'); });
  });
  document.getElementById('logout-cancel').addEventListener('click', () => modal.classList.remove('show'));
  document.getElementById('logout-confirm').addEventListener('click', () => { window.location.href = redirectUrl; });
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('show'); });
}

// ── Mobile Nav Toggle ──
function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const ul = document.querySelector('nav ul');
  if (!toggle || !ul) return;
  toggle.addEventListener('click', () => ul.classList.toggle('open'));
}

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavToggle();
});
