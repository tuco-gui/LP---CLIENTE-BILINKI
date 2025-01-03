// Não há interações adicionais no momento
console.log("Landing Page carregada com sucesso!");

window.addEventListener('scroll', function() {
    var topBar = document.querySelector('.top-bar');
    if (window.scrollY > 50) { // Ajuste este valor conforme necessário
        topBar.style.backgroundColor = 'rgba(26, 26, 26, 0.9)'; // Mais opaco
    } else {
        topBar.style.backgroundColor = 'rgba(26, 26, 26, 0.7)'; // Volta ao normal
    }
});

// Seleciona todos os itens de FAQ
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    const faqItems = document.querySelectorAll('.faq-item');
    console.log('Number of FAQ items found:', faqItems.length);

    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        console.log(`FAQ item ${index + 1} question:`, question.textContent.trim());
        
        question.addEventListener('click', () => {
            console.log(`FAQ item ${index + 1} clicked`);
            
            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('open')) {
                    otherItem.classList.remove('open');
                    console.log('Closed another open item');
                }
            });

            // Abre ou fecha o item atual
            item.classList.toggle('open');
            console.log(`FAQ item ${index + 1} is now ${item.classList.contains('open') ? 'open' : 'closed'}`);
        });
    });
});
