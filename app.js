document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.preview').forEach(link => link.addEventListener('click', () => {
  const panel = document.querySelector(link.getAttribute('href'));
  if (panel) panel.open = true;
}));
