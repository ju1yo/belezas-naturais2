// Selecionando todas as imagens
const images = document.querySelectorAll('.image');

// Iterando por cada imagem
images.forEach(image => {
    // Criando a camada de sobreposição (overlay) e o texto da curiosidade para cada imagem
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const curiosityText = document.createElement('span');
    curiosityText.classList.add('curiosity-text');
    overlay.appendChild(curiosityText);

    // Adicionando a camada de sobreposição ao elemento da imagem
    image.parentElement.appendChild(overlay);

    // Obtendo a curiosidade personalizada através do atributo 'data-curiosity'
    const curiosity = image.getAttribute('data-curiosity');

    // Inicializando o estado da camada de sobreposição
    overlay.style.opacity = '0'; // Começa invisível
    overlay.style.transition = 'opacity 0.3s ease'; // Transição suave para a opacidade

    // Evento de mouse sobre a imagem
    image.addEventListener('mouseenter', () => {
        overlay.style.display = 'flex'; // Exibe a sobreposição
        setTimeout(() => {
            overlay.style.opacity = '1'; // Transição suave de opacidade para 1 (visível)
        }, 10); // Pequeno atraso para garantir a exibição
        curiosityText.textContent = curiosity; // Exibe a curiosidade
    });

    // Evento de mouse fora da imagem
    image.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0'; // Faz a sobreposição desaparecer suavemente
        // Após a transição, escondemos o display após a opacidade desaparecer
        setTimeout(() => {
            overlay.style.display = 'none'; // Esconde a sobreposição após a transição de opacidade
        }, 300); // Espera a transição de opacidade (300 ms)
    });
});
