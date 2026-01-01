// 1. Efecto de Scroll Reveal (Aparición suave de módulos)
const revealElements = () => {
    const reveals = document.querySelectorAll('.bento-item');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
};

window.addEventListener("scroll", revealElements);

// 2. Slider Automático de Noticias
const initNewsSlider = () => {
    const slides = document.querySelectorAll('.news-slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;

    // Inicializar la primera slide
    slides[0].classList.add('active');

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000); // Cambia cada 5 segundos
};
// --- Slider Automático de Noticias y Fondos ---
const initNewsSliderWithBackground = () => {
    const newsFeedSection = document.getElementById('news');
    const slides = document.querySelectorAll('.news-slide');
    if (slides.length === 0 || !newsFeedSection) return;
    
    let currentSlide = 0;

    // Función para actualizar el slide y el fondo
    const updateNewsDisplay = () => {
        // Ocultar slide actual
        slides.forEach(slide => slide.classList.remove('active'));

        // Mostrar siguiente slide
        slides[currentSlide].classList.add('active');

        // Cambiar el fondo de la sección principal
        const newBackground = slides[currentSlide].getAttribute('data-background');
        newsFeedSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('${newBackground}')`;
        
        currentSlide = (currentSlide + 1) % slides.length;
    };

    // Inicializar el primer slide y fondo
    updateNewsDisplay();

    // Cambiar cada X segundos
    setInterval(updateNewsDisplay, 7000); // Cambia cada 7 segundos
};

// Asegúrate de llamar a esta nueva función al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    revealElements();
    initNewsSliderWithBackground(); // <-- Llamar a la nueva función
    
    document.querySelectorAll('.bento-item').forEach(item => {
        item.classList.add('reveal');
    });
});

// 3. Control del Menú Móvil (Cerrar al hacer click en un link)
const navLinks = document.querySelectorAll('.nav-links a');
const menuCheckbox = document.getElementById('menu-toggle');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuCheckbox.checked = false;
    });
});

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    revealElements(); // Check inicial por si hay elementos visibles
    initNewsSlider();
    
    // Agregar clase reveal a los items para la animación
    document.querySelectorAll('.bento-item').forEach(item => {
        item.classList.add('reveal');
    });
});
// Función para cambiar el estilo del menú al hacer scroll
const handleNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Escuchar el evento de scroll
window.addEventListener('scroll', handleNavbarScroll);

// Ejecutar una vez al cargar por si la página inicia con scroll
document.addEventListener('DOMContentLoaded', () => {
    handleNavbarScroll();
});