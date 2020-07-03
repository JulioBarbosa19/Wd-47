// (function() {
//     const cartoes = document.querySelectorAll(".cartao");

//     for (let i = 0; i < cartoes.length; i++) {
//         const cartao = cartoes[i];

//         cartao.on("focusin", function() {
//             cartao.addClass("cartao--focado");

//         })
//         cartao.on("focusout", function() {
//             cartao.removeClass("cartao--focado");
//         })

//         cartao.on("change", function mudaCor(event) {
//             cartao.css('background', event.target.value);
//         })

//         cartao.on("keydown", function deixaClicarComEnter(event) {
//             if (event.target.classList.contains("opcoesDoCartao-opcao") &&
//                 (event.key == 'Enter' || event.key == ' ')) {
//                 event.target.click();
//             }
//         })

//         cartao.on('click', function(event) {
//             const elementoSelecionado = event.target;
//             if (elementoSelecionado.classList.contains("opcoesDoCartao-remove")) {
//                 cartao.addClass("cartao--some");
//                 cartao.on("transitioned", function() {
//                     cartao.remove();
//                 });
//             }
//         });
//     }
// })();