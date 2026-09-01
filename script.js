console.log("Café aurora - Script carregado");

const cardapio = [
  { nome: "Espresso", descricao: "Café curto e intenso, com crema aveludada.", preco: 7.00 },
  { nome: "Cappuccino", descricao: "Espresso, leite vaporizado e espuma cremosa", preco: 12.00 },
  { nome: "Pão na chapa", descricao: "Pão artesanal na manteiga, quentinho.", preco: 8.00 },
  { nome: "Bolo do dia", descricao: "Fatia generosa feita na nossa cozinha.", preco: 10.00 },
  { nome: "Bolo confeitado", descricao: "Fatia generosa feita na nossa cozinha.", preco: 35.00 },
  
];

function formatarPreco(valor) {
  return `R$ ${Number(valor).toFixed(2).replace(".", ",")}`;
}

/**
 * Criação e preenchimento dos cards de forma dinâmica
 */
const cardapioGrade = document.querySelector(".cardapio__grade");

if (cardapioGrade) {
  cardapio.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("card");

    const h3 = document.createElement("h3");
    h3.classList.add("card__titulo");
    h3.textContent = item.nome;

    const paragrafo = document.createElement("p");
    paragrafo.classList.add("card__descricao");
    paragrafo.textContent = item.descricao;

    const span = document.createElement("span");
    span.classList.add("card__preco");
    span.textContent = formatarPreco(item.preco);

    article.appendChild(h3);
    article.appendChild(paragrafo);
    article.appendChild(span);

    cardapioGrade.appendChild(article);
  });
}

/**
 * Cálculos do Rodapé e Informações
 */
const nomeCafe = "Café Aurora";
const anoFundacao = 2020;
const anoAtual = new Date().getFullYear();
const anosDeCasa = anoAtual - anoFundacao;

const rodape = document.querySelector(".rodape p");
if (rodape) {
  rodape.textContent = `© ${anoAtual} ${nomeCafe} - ${anosDeCasa} anos de história`;
}

/**
 * Manipulação do Botão Hero (Aberto / Fechado)
 */
const cafeAberto = (hora) => hora >= 8 && hora < 19;
const horaAtual = new Date().getHours();
const aberto = cafeAberto(horaAtual);

const botaoHero = document.querySelector(".hero .botao");
if (botaoHero) {
  botaoHero.textContent = aberto ? "Ver cardápio" : "Voltamos às 8h";
  
  //  * Aula 06 eventos.
  const secao = document.querySelector("#cardapio");
  botaoHero.addEventListener("click", (event) => {
    event.preventDefault();
    if (secao) {
      secao.scrollIntoView({ behavior: "smooth" });
    }
  });
}
