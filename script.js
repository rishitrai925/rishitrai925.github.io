document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.visible-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetHref = this.getAttribute('href');
            if (targetHref.startsWith('#')) {
                const targetId = targetHref.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if(targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else {
                window.location.href = targetHref;
            }
        });
    });

    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

});
