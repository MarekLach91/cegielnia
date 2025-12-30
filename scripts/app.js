const targets = document.querySelectorAll('.underline');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible'); // dodaj klasę gdy widoczny
        }
    });
}, {
    threshold: 1 // 10% elementu musi być widoczne
});

// obserwujemy każdy element
targets.forEach(target => observer.observe(target));


const observ = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 1 });

document.querySelectorAll('.flip-in').forEach((el, index) => {
  el.style.animationDelay = `${index * 0.2}s`; // 0s, 0.2s, 0.4s, 0.6s
  observ.observe(el);
});