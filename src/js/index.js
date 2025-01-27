const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

cartoes.forEach(cartao => {
  cartao.addEventListener("click", function(){
  const cartaVirada = cartao.querySelector(".carta-virada")
  cartao.classList.toggle("virar");
  cartaVirada.classList.toggle("mostra-fundo-carta");
  const descricao = cartao.querySelector(".descricao");
  descricao.classList.toggle("esconder");
  });
});

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartao();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartao();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartao() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
