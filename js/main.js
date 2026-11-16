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

// --- ENVIO DE FEEDBACK VIA WHATSAPP ---
const btnWaFeedback = document.getElementById('btn-wa-feedback');

if (btnWaFeedback) {
    btnWaFeedback.addEventListener('click', () => {
        const nome = document.getElementById('fb-nome').value.trim();
        const mensagem = document.getElementById('fb-mensagem').value.trim();

        if (!mensagem) {
            alert('Por favor, escreve a tua mensagem ou opinião antes de enviar, sem isso não vai ser possível continuar.');
            return;
        }

        const identificacao = nome ? `Nome: ${nome}` : 'Enviado de forma Anónima';
        const textoFormatado = `Olá Álvaro! Tenho um feedback sobre o teu site:%0A%0A*${identificacao}*%0A*Mensagem:* ${encodeURIComponent(mensagem)}`;
        
        // Teu número oficial de WhatsApp
        const numeroWa = '244976339719';
        
        window.open(`https://wa.me/${numeroWa}?text=${textoFormatado}`, '_blank');
    });
}

// --- SISTEMA DE LIGHTBOX ROBUSTO ---
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    // Seleciona todas as imagens das páginas de projeto (seja em media-card ou galerias gerais)
    const galleryImages = document.querySelectorAll('.media-card img, .project-gallery img, img[data-lightbox]');

    galleryImages.forEach(img => {
        img.style.cursor = 'pointer'; // Assegura o cursor de clique
        img.addEventListener('click', (e) => {
            e.preventDefault();
            if (lightbox && lightboxImg) {
                lightbox.classList.add('active');
                lightboxImg.src = img.src;
            }
        });
    });

    // Fechar ao clicar no botão X
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    // Fechar ao clicar no fundo escuro fora da imagem
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }

    
});

