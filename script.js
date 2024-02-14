 // Função para determinar a estação com base na data atual
  function determinarEstacao() {
    const dataAtual = new Date(document.getElementById("date").value);
    const dia = dataAtual.getDay()
    const mes = dataAtual.getMonth() + 1; // Os meses são indexados de 0 a 11
    const fullDay = dataAtual.getFullYear()
    console.log(fullDay);
    if (mes >= 1 && mes <= 3) {
      return "Verão";
    } else if (mes >= 4 && mes <= 6) {
      return "Outono";
    } else if (mes >= 7 && mes <= 9) {
      return "Inverno";
    } else {
      return "Primavera";
    }
  }

  // Função para atualizar o texto e a imagem com base na estação
  function atualizarEstacao() {
    const estacao = determinarEstacao();
    const textoEstacao = document.getElementById('season-text');
    const imagemEstacao = document.getElementById('season-image');

    textoEstacao.textContent = `Estamos na estação do ${estacao}`;

    switch (estacao) {
      case "Verão":
        imagemEstacao.src = "summer.png";
        break;
      case "Outono":
        imagemEstacao.src = "autumn.jpg";
        break;
      case "Inverno":
        imagemEstacao.src = "winter.jpg";
        break;
      case "Primavera":
        imagemEstacao.src = "spring.jpg";
        break;
      default:
        break;
    }
  }

  // Chamando a função para atualizar a estação ao carregar a página
