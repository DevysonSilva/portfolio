// Seleciona elementos
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");

// Evento clique no hambúrguer
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Animação ao rolar (muda cor do header)
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Efeito digitando no h2
const typingText = document.querySelector(".typing-text");
const phrases = [
  "Desenvolvedor Web",
  "Criação de Sites Profissionais",
  "Sites Rápidos e Responsivos",
  "SEO para Empresas Locais"
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function loopTyping() {
  typingText.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
    }

    if (j == phrases[i].length) {
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  setTimeout(loopTyping, isDeleting ? 80 : 120);
}

loopTyping();

// Animação suave ao aparecer
ScrollReveal().reveal('.sobre-imagem', {
  origin: 'left',
  distance: '60px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.sobre-texto', {
  origin: 'right',
  distance: '60px',
  duration: 1000,
  delay: 400
});

// Serviços - animação
ScrollReveal().reveal('.servicos .card', {
  interval: 200,
  distance: '40px',
  origin: 'bottom',
  duration: 1000
});

// Portfólio - animação
ScrollReveal().reveal('.portfolio-item', {
  interval: 200,
  distance: '60px',
  origin: 'bottom',
  duration: 1000
});

// Depoimentos - animação
ScrollReveal().reveal('.depoimentos .card', {
  interval: 200,
  distance: '50px',
  origin: 'bottom',
  duration: 1000
});

// CTA - animação
ScrollReveal().reveal('.cta', {
  distance: '60px',
  origin: 'bottom',
  duration: 1000,
  delay: 200
});

