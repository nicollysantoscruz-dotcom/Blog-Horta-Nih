const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        console.log("Botão clicado!");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent = parseInt(texto.textContent) + 1;
            curtiu = true;
            botao.style.backgroundColor = "#FFA000"; // Destaque ao curtir
        } else {
            texto.textContent = parseInt(texto.textContent) - 1;
            curtiu = false;
            botao.style.backgroundColor = "#FFC107";
        }
    }
});
