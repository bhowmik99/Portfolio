(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  const zoomables = document.querySelectorAll('.figure img');
  if (zoomables.length) {
    const box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = '<button type="button" aria-label="Close image">×</button><img alt="Expanded research figure">';
    document.body.appendChild(box);
    const large = box.querySelector('img');
    const close = () => box.classList.remove('open');
    zoomables.forEach(img => img.addEventListener('click', () => {
      large.src = img.src;
      large.alt = img.alt;
      box.classList.add('open');
    }));
    box.querySelector('button').addEventListener('click', close);
    box.addEventListener('click', e => { if (e.target === box) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }
})();
