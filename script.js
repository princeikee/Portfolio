// Initialize animations
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-back'
});

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card-hover').forEach(card => {
    observer.observe(card);
});

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

console.log("Portfolio loaded successfully.");