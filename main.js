const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split('.home_profession1', {
  chars: true })
const { chars: chars2 } = text.split('.home_profession2', {
  chars: true })

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})

const textYear = document.getElementById('footer-year')
currentYear =  new Date().getFullYear();

textYear.textContent = currentYear;

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id,
            top = section.offsetTop - 50,
            height = section.offsetHeight
            link = document.querySelector('.nav_menu a[href*=' + id + ']')
        if(!link) return

        link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
    })
}

// Background change on scroll
function changeBackgroundOnScroll() {
    const sections = [
    { element: document.querySelector('.home'), className: 'home-bg' },
    { element: document.querySelector('.about'), className: 'about-bg' },
    { element: document.querySelector('.projects'), className: 'projects-bg' },
    { element: document.querySelector('.contact'), className: 'contact-bg' }
    ];

    const body = document.body;
          
    window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
            
    // Remove all background classes
    body.classList.remove('home-bg', 'about-bg', 'projects-bg', 'contact-bg');
            
    // Determine which section is in view
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.element) {
        const sectionTop = section.element.offsetTop;
        const sectionHeight = section.element.offsetHeight;
                
        // Check if section is in viewport
        if (scrollY >= sectionTop - windowHeight/2 && scrollY < sectionTop + sectionHeight - windowHeight/2) {
            body.classList.add(section.className);
                  break;
            }
        }
    }
            
    // Default to home background if no section matches
    if (!body.classList.contains('home-bg') && 
        !body.classList.contains('about-bg') && 
        !body.classList.contains('projects-bg') && 
        !body.classList.contains('contact-bg')) {
        body.classList.add('home-bg');
        }
    });
          
    // Set initial background
    body.classList.add('home-bg');
}

// Initialize background change functionality
document.addEventListener('DOMContentLoaded', changeBackgroundOnScroll);

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
});

sr.reveal(`.home_image, .projects_container`)
sr.reveal(`.home_data`, {delay: 900, origin: 'bottom'})
sr.reveal(`.home_info`, {delay: 1200, origin: 'bottom'})
sr.reveal(`.home_cv`, {delay: 1500})
sr.reveal(`.about_data`, {origin: 'left'})
sr.reveal(`.about_image`, {origin: 'right'})

