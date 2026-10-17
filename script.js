console.log("Bem-vindo ao painel!");
console.log("Curso: Desenvolvimento Web");
console.log("Vamos estudar JavaScript!");

console.log(10 + 5);

const nomeAluno = "Franz";
const curso = "Desenvolvimento Web";
let tarefasConcluidas = 2;

console.log(nomeAluno);
console.log(curso);
console.log(tarefasConcluidas);

tarefasConcluidas = 3;
console.log(tarefasConcluidas);

var exemploAntigo = "Declaração utilizada em códigos antigos";

console.log(exemploAntigo);

const titulo = "Painel de Estudos";
const quantidade = 4;
const ativo = true;
const observacao = null;

console.log(titulo);
console.log(quantidade);
console.log(ativo);
console.log(observacao);


const horasEstudadas = 4;
const horasPlanejadas = 6;

console.log(horasEstudadas + horasPlanejadas);
console.log(horasPlanejadas - horasEstudadas);
console.log(horasEstudadas * 2);
console.log(horasPlanejadas / 2);

const metaAtingida = horasEstudadas >= horasPlanejadas;
console.log(metaAtingida);

const mensagem = `O aluno ${nomeAluno} estuda ${curso} e concluiu ${tarefasConcluidas} tarefas.`;

console.log(mensagem);


if (horasEstudadas >= horasPlanejadas) {
    console.log("Meta de estudos atingida!");
} else {
    console.log("Você precisa estudar mais!");
}


const horasRestantes = (horasPlanejadas - horasEstudadas);
console.log(horasRestantes);

if (horasRestantes > 0) {
    console.log("Meta ainda não atingida!");
}
else{
    console.log("Parabéns meta concluida com sucesso");
}