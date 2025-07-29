function inserirNome () {
    let nomeUsuario = prompt("Qual o seu nome");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;

}



inserirNome ();

let linguagens = ["JavaScript", "Python", "PHP"];

const item = document.querySelector("#lista");

item.textContent = `${linguagens[0]}, ${linguagens[1]} e ${linguagens[2]}`;

let aluno ={
    nome: "Gabriel",
    idade: 13,
    anoLetivo: "2° Série",
    materiasFavoritas: ["Geografia", "Programação", "Arte"]
}