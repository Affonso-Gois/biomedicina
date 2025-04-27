// abrir whatsapp
function agendar() {
    const url = `https://api.whatsapp.com/send/?phone=%2B5521976447332&text=Ol%C3%A1`;

    // Redireciona para outra pagina sem fechar o site
    window.open(url, '_blank');
}

function cliqueiinsta() {
    const url = 'https://www.instagram.com/janicecosta.biomedica/';
    window.open(url, '_blank');
}

function cliqueinoface() {
    const url = 'https://www.facebook.com/janice.costa.50';
    window.open(url, '_blank');
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slideIndex = (slideIndex + 1) % slides.length; // Avance para o próximo slide
  slides[slideIndex].style.display = "block";
}

setInterval(showSlides, 2000); // Auto-avançar a cada 3 segundos

