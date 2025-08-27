AOS.init();

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', () => menu.classList.toggle('active'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('active')));

    // smooth scroll ajustado
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            const offset = target.getBoundingClientRect().top + window.scrollY - 70;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        });
    });

    // Resaltar sección activa
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a, #mobile-menu a");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                const id = entry.target.getAttribute("id");
                const activeLink = document.querySelector(`a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }, { threshold: 0.6 });
    sections.forEach(sec => observer.observe(sec));
});

// --- Menú hamburguesa ---
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
