function inserirNome () {
    let nomeUsuario = prompt("Qual o seu nome");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;

}



inserirNome ();

let linguagens = ["JavaScript", "Python", "PHP"];

const item = document.querySelector("#lista");

item.textContent = linguagens[0];
item.textContent = linguagens[1];
item.textContent = linguagens[2];
