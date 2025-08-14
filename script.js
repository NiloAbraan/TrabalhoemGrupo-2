const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Você chegou à escola e percebeu que a aula de matemática será sobre um novo método de resolução de problemas. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Estou animado para aprender algo novo!",
                afirmacao: "Você se sente motivado a explorar novas abordagens para resolver problemas."
            },
            {
                texto: "Isso parece complicado!",
                afirmacao: "Você se preocupa se conseguirá entender o novo método."
            }
        ]
    },
    {
        enunciado: "Durante uma aula de ciências, o professor pede que você faça um experimento em grupo. Como você se sente?",
        alternativas: [
            {
                texto: "Adoro trabalhar em grupo e aprender na prática!",
                afirmacao: "Você se sente empolgado para colaborar com seus colegas e descobrir juntos."
            },
            {
                texto: "Prefiro fazer as coisas sozinho.",
                afirmacao: "Você se sente mais confortável trabalhando de forma independente."
