const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao sair da escola, você se depara com um novo aplicativo que promete ajudar estudantes a organizar seus estudos e tirar dúvidas. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é incrível!",
                afirmacao: "Você está animado para usar a tecnologia a seu favor e melhorar seu desempenho escolar."
            },
            {
                texto: "Isso parece complicado!",
                afirmacao: "Você se preocupa se conseguirá entender como usar o aplicativo corretamente."
            }
        ]
    },
    {
        enunciado: "Com a introdução desse aplicativo, seu professor de tecnologia decide fazer uma aula sobre como utilizá-lo para otimizar os estudos. Ao final da aula, ele pede que você escreva um resumo sobre suas funcionalidades. O que você faz?",
        alternativas: [
            {
                texto: "Utilizo o aplicativo para buscar informações e entender melhor suas funcionalidades.",
                afirmacao: "Você conseguiu aproveitar a tecnologia para facilitar seu aprendizado."
            },
            {
                texto: "Escrevo o resumo com base nas anotações que fiz durante a aula e em conversas com colegas.",
                afirmacao: "Você se sente mais confortável utilizando seus próprios métodos de estudo."
            }
        ]
    },
    {
        enunciado: "Após a entrega do resumo, o professor promove um debate sobre como a tecnologia pode impactar a educação. Como você se posiciona?",
        alternativas: [
            {
                texto: "Acredito que a tecnologia pode tornar o aprendizado mais acessível e dinâmico.",
                afirmacao: "Você vê a tecnologia como uma aliada na educação, capaz de abrir novas oportunidades de aprendizado."
            },
            {
                texto: "Me preocupo com a dependência excessiva da tecnologia e a importância de métodos tradicionais.",
                afirmacao: "Sua preocupação com o equilíbrio entre tecnologia e métodos tradicionais motiva discussões sobre o uso consciente da tecnologia."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisa criar um cartaz digital que represente suas ideias sobre o uso da tecnologia na educação. O que você faz?",
        alternativas: [
            {
                texto: "Crio um cartaz utilizando um software de design gráfico.",
                afirmacao: "Você percebe que muitas pessoas ainda têm dificuldades com ferramentas digitais e decide oferecer ajuda a quem precisa."
            },
            {
                texto: "Utilizo um gerador de imagens online para criar algo rápido e prático.",
                afirmacao: "Você valoriza a agilidade que a tecnologia proporciona e quer ensinar outros a usarem essas ferramentas."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto em grupo de história para entregar na próxima semana, mas o grupo está um pouco atrasado. Um colega decidiu usar o aplicativo para fazer todo o trabalho. O que você faz?",
        alternativas: [
            {
                texto: "Acho que usar o aplicativo é uma boa ideia, mesmo que o trabalho fique parecido com o de outras pessoas.",
                afirmacao: "Você se sente tentado a depender da tecnologia para facilitar as tarefas."
            },
            {
                texto: "O aplicativo é útil, mas é importante que cada um contribua com suas ideias e revise o trabalho.",
                afirmacao: "Você acredita que a colaboração e a originalidade são essenciais para um bom projeto."
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
