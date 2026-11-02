// --- 1. GARANTIR QUE O CÓDIGO SÓ EXECUTA APÓS O CARREGAMENTO DO HTML ---
document.addEventListener('DOMContentLoaded', () => {

    // --- 2. SCROLL SUAVE PARA OS LINKS DA NAVEGAÇÃO ---
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Desliza a página até ao elemento alvo com desconto da altura do menu fixo (70px)
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. EFEITO DE SOMBRA NO HEADER AO FAZER SCROLL ---
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });

    // --- 4. CONFIRMAÇÃO NO CONSOLE ---
    console.log(' Hover Company | Portfólio de Álvaro Zola Ntalulu carregado com sucesso!');
});

// Seleção dos elementos do menu
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Abrir ou fechar o menu ao clicar no botão hambúrguer
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar o menu automaticamente ao clicar em qualquer ligação
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});