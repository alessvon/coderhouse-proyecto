// Navbar: agrega sombra al hacer scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 15, 26, 0.97)';
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
  } else {
    navbar.style.background = 'rgba(15, 15, 26, 0.85)';
    navbar.style.boxShadow = 'none';
  }
});

// Cierra el menú móvil al hacer click en un link
document.querySelectorAll('#navMenu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const collapse = document.getElementById('navMenu');
    const bsCollapse = bootstrap.Collapse.getInstance(collapse);
    if (bsCollapse) bsCollapse.hide();
  });
});

// Mensaje al enviar formulario
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>¡Mensaje enviado!';
    btn.classList.add('btn-success');
    btn.classList.remove('btn-accent');
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = '<i class="bi bi-send me-2"></i>Enviar mensaje';
      btn.classList.remove('btn-success');
      btn.classList.add('btn-accent');
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}
