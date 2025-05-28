/* O que precisa fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

OBJETIVO 1 - quando clicar no botão do personagem na lista, devemos marcar o botão como selecionado e mostrar o personagem correspondente
PASSO 1 - Pegar os botoes no js pra poder verificar quando o usuario clicar em cima de um deles. 
PASSO 2 - Adicionar a classe 'selecionado' no botão que o usuário clicar
PASSO 3 - verificar se ja existe um botão selecionado, se sim, remover a seleção dele.

OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem correspondente.

PASSO 1 - Pegar o elemento do personagem que vamos mostrar ou esconder as informações no JS.
PASSO 2 - adicionar a classe 'selecionado' no personagem que o usuário clicar.
passo 3 - verificar se já existe um personagem selecionado, se sim, remover a seleção dele.*/

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarPersonagem();
    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
  });
});
function desselecionarPersonagem() {
	const personagemSelecionado = document.querySelector(".personagem.selecionado");
	personagemSelecionado.classList.remove("selecionado");
}
function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}

    