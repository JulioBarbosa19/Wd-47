(function() {
    const form = document.querySelector(".formNovoCartao");
    let numeroDoCartao = 0;
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const textarea = form.querySelector(".formNovoCartao-conteudo");
        const isTextAreaVazio = textarea.value.trim().length === 0;

        if (isTextAreaVazio) {
            const msgErro = document.createElement("div");
            msgErro.classList.add("formNovoCartao-msg");
            msgErro.textContent = "Formulario inválido,Digite algo arrombado";

            const btnSubmit = form.children[form.children.length - 1];
            form.addEventListener("animationend", function(event) {
                event.target.remove();
            });
            form.insertBefore(msgErro, btnSubmit);

        } else {
            adicionarCartaoNoMural({ conteudo: textarea.value });
        }
        textarea.value = '';

    });
    form.classList.remove("no-js");
})();