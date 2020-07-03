// (function() {
//     const btns = document.querySelectorAll('.opcoesDoCartao-remove');
//     for (let i = 0; i < btns.length; i++) {
//         btns[i].addEventListener('click', function() {
//             const cartao = this.parentNode.parentNode; // this funciona e o btns[i] pois ambos são os elementos que stão sendo acessados.
//             cartao.classList.add('cartao--some');
//             cartao.addEventListener("transitionend", function() {
//                 cartao.remove();
//             });
//         });
//     }

// })();