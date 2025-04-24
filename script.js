document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 160) {
                current = section.getAttribute('id');
            }
        });

        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('href') === `#${current}`) {
                button.classList.add('active');
            }
        });
    });
});
