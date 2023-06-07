let jogador = null;
let jogadorSelecionado = document.getElementById("jogador-selecionado");
let vencedorSelecionado = document.getElementById("vencedor-selecionado");
let mensagem = document.getElementById("mensagem");
let quadrados = document.getElementsByClassName("quadrado");
let finalizado = false;
let cont = 0;

mudarJogador("X");

function escolherQuadrado(id) {
  let quadrado = document.getElementById(id);
  cont++;

  console.log(cont);
  console.log(quadrado.textContent);
  if (quadrado.textContent != "-") {
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color = "#000";

  if (jogador === "X") {
    jogador = "O";
  } else {
    jogador = "X";
  }
  mudarJogador(jogador);
  checarVencedor();
}

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
  let quadrado1 = document.getElementById(1);
  let quadrado2 = document.getElementById(2);
  let quadrado3 = document.getElementById(3);
  let quadrado4 = document.getElementById(4);
  let quadrado5 = document.getElementById(5);
  let quadrado6 = document.getElementById(6);
  let quadrado7 = document.getElementById(7);
  let quadrado8 = document.getElementById(8);
  let quadrado9 = document.getElementById(9);

  // vencendo na horizontal
  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    jogoFinalizado();
    return;
  }
  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    jogoFinalizado();
    return;
  }
  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    jogoFinalizado();
    return;
  }
  // vencendo na vertical
  if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    jogoFinalizado();
    return;
  }
  if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    jogoFinalizado();
    return;
  }
  if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    jogoFinalizado();
    return;
  }
  // vencendo na diagonal
  if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    jogoFinalizado();
    return;
  }
  if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
    jogoFinalizado();
    return;
  }

  if (cont == quadrados.length) {
    finalizado = true;
    vencedorSelecionado.innerHTML = "Nenhum!";
    mensagem.innerHTML = "Empate!";
    jogoFinalizado();
  }
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.textContent;
  vencedorSelecionado.innerHTML = vencedor;
  mensagem.innerHTML = "Parabéns!";
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.backgroundColor = "#0f0";
  quadrado2.style.backgroundColor = "#0f0";
  quadrado3.style.backgroundColor = "#0f0";
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
  let igual = false;

  if (
    quadrado1.textContent != "-" &&
    quadrado1.textContent === quadrado2.textContent &&
    quadrado2.textContent === quadrado3.textContent
  ) {
    igual = true;
    finalizado = true;
  }

  return igual;
}

function jogoFinalizado() {
  if (finalizado === true) {
    for (let i = 0; i < quadrados.length; i++) {
      quadrados[i].onclick = "";
    }
  } else {
    return;
  }
  console.log("Jogo finalizado!");
}

function reiniciar() {
  cont = 0;
  vencedor = null;
  finalizado = false;
  vencedorSelecionado.innerHTML = "";

  for (let i = 0; i < quadrados.length; i++) {
    quadrados[i].innerHTML = "-";
    quadrados[i].style.backgroundColor = "#eee";
    quadrados[i].style.color = "#eee";
    mensagem.innerHTML = "";
    quadrados[i].onclick = () => {
      escolherQuadrado(i + 1);
    };
  }

  mudarJogador("X");
}
