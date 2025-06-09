const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual tipo de livro você prefere para relaxar após um dia cansativo?",
        alternativas: [
            {
                texto: "Uma ficção leve e envolvente que me transporte para outra realidade!",
                afirmacao: "Busco escapismo e imersão em mundos imaginários."
 
            },
            {
                texto: "Um livro de não ficção sobre um hobby ou interesse para aprender algo novo!",
                afirmacao: "Prefiro aproveitar o tempo para adquirir conhecimento e expandir meus horizontes."
            }
        ]
    },
    {
        enunciado: "Ao ler, você se sente mais atraído por:?",
        alternativas: [
            {
                texto: "Histórias que exploram profundamente a psicologia dos personagens e suas motivações..",
                afirmacao: "Valorizo a profundidade psicológica e o desenvolvimento dos personagens."
            },
            {
                texto: "Narrativas com um ritmo acelerado e cheias de reviravoltas na trama",
                afirmacao: "Gosto de enredos dinâmicos e cheios de surpresas que mantêm minha atenção."
            }
        ]
    },
    {
        enunciado: "Qual o seu ambiente de leitura ideal?",
        alternativas: [
            {
                texto: "Um canto aconchegante e silencioso, sem distrações.",
                afirmacao: "Priorizo a tranquilidade e a concentração para uma leitura imersiva."
            },
            {
                texto: "Um local público movimentado, como um café ou parque, onde posso observar as pessoas.",
                afirmacao: "Aprecio a energia do ambiente e a possibilidade de observar ao meu redor enquanto leio."
            }
        ]
    },
    {
        enunciado: "Quando você termina um livro marcante, qual a sua primeira reação?",
        alternativas: [
            {
                texto: "Sinto uma profunda reflexão sobre os temas abordados e como eles se relacionam com minha vida.",
                afirmacao: "O término me leva a uma autoanálise e conexão pessoal com a obra."
            },
            {
                texto: "Tenho uma urgência imediata de discutir o livro com alguém ou procurar mais informações sobre ele.",
                afirmacao: "Sinto a necessidade de compartilhar a experiência e aprofundar meu entendimento do livro."
            }
        ]
    },
    {
        enunciado: "Qual o papel que os livros desempenham em sua vida, de forma mais significativa?",
        alternativas: [
            {
                texto: "São uma fonte inesgotável de conhecimento e aprendizado contínuo",
                afirmacao: "Vejo os livros como ferramentas essenciais para o aprendizado e o crescimento intelectual."
            },
            {
                texto: "São um refúgio e uma forma de escapar da rotina, proporcionando entretenimento.",
                afirmacao: " Os livros são meu porto seguro e fonte de lazer para descontrair."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();