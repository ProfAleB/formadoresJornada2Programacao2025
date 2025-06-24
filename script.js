function inserirNome () {
    let nomeUsuario = prompt("Qual o seu nome");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;

}

function mudaCor(){
    let elemento = document.getElementById("#nome-usuario");
    elemento.style.color = "blue"
}
inserirNome ();
mudaCor();