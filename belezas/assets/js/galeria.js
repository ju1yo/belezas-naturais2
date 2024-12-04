let currentIndex = 0;

    // Função para expandir a imagem ao clicar
    function expandImage(imgElement) {
      var modal = document.getElementById("modal");
      var modalImg = document.getElementById("expanded-img");
      var captionText = document.getElementById("caption");

      modal.style.display = "block";
      modalImg.src = imgElement.src;
      captionText.innerHTML = imgElement.alt;
    }

    // Função para fechar o modal
    function closeModal() {
      var modal = document.getElementById("modal");
      modal.style.display = "none";
    }

    // Função para mover o carrossel
    function moveCarousel(direction) {
      const carousel = document.querySelector('.carousel');
      const images = document.querySelectorAll('.carousel-image');
      const totalImages = images.length;

      // Atualiza o índice de imagem atual
      currentIndex += direction;

      // Impede que o índice ultrapasse os limites
      if (currentIndex >= totalImages) {
        currentIndex = 0;
      } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
      }

      // Calcula o deslocamento do carrossel
      const offset = -currentIndex * (images[0].width + 20); // 20px é o gap entre as imagens
      carousel.style.transform = `translateX(${offset}px)`;
    }
  