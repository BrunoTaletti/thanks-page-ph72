document.addEventListener('DOMContentLoaded', function() {
    // Adiciona uma animação suave ao carregar a página
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);

    // Adiciona um efeito de hover mais suave no botão do WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-button');
    whatsappButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    whatsappButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}); 