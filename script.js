function setActive(el) {
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  el.classList.add('active');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
