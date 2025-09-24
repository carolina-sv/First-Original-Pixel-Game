particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 800, // Número de partículas
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // Cor das partículas (estrelas brancas)
    },
    "shape": {
      "type": "circle" // Partículas circulares
    },
    "opacity": {
      "value": 0.8, // Opacidade das partículas
      "random": false
    },
    "size": {
      "value": 2, // Tamanho das partículas
      "random": true
    },
    "line_linked": {
      "enable": false // Desativa linhas entre as partículas
    },
    "move": {
      "enable": true,
      "speed": 1.5, // A velocidade foi ajustada para uma movimentação mais suave
      "direction": "none", // Partículas se movem em todas as direções
      "random": true, // As partículas se movem aleatoriamente
      "straight": false, // As partículas se movem de forma aleatória, não em linha reta
      "out_mode": "out", // As partículas saem da tela quando chegam na borda
      "attract": {
        "enable": true, // Ativa um efeito de atração que faz as partículas se moverem como se estivessem em torno de um centro
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false // Desativa o efeito de interação com o mouse
      },
      "onclick": {
        "enable": false // Desativa o efeito de interação ao clicar
      },
      "resize": true
    }
  },
  "retina_detect": true
});

// Seleciona todos os botões
const buttons = document.querySelectorAll('.btn');

// Adiciona o evento de clique a todos os botões
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Toca o som de clique sempre que qualquer botão for clicado
    clickSound.currentTime = 0;  // Reinicia o som para garantir que toque do começo
    clickSound.play();
  });
});

// Mostrar a tabela de personagens ao clicar no botão
showTableBtn.addEventListener('click', () => {
  // Mostra a tabela de personagens
  characterTable.style.display = 'block';

  // Esconde o botão de "Mostrar Personagens"
  showTableBtn.style.display = 'none';
});

// Seleção de personagem
selectButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove a seleção de todos os botões
    selectButtons.forEach(b => {
      b.classList.remove('selected');
      b.textContent = 'Selecionar';
    });

    // Marca o botão atual como selecionado
    btn.classList.add('selected');
    btn.textContent = 'Selecionado';

    // Mostra o botão de "Avançar"
    advanceBtn.style.display = 'inline-block';
  });
});

// Avançar para o jogo
advanceBtn.addEventListener('click', () => {
  playSoundAndRedirect('game.html');
});

// Voltar para a página inicial
backBtn.addEventListener('click', () => {
  playSoundAndRedirect('index.html');
});

function playSoundAndRedirect(url) {
  clickSound.currentTime = 0;
  clickSound.play();
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}
