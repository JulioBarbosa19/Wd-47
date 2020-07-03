//escopo global

var btn = document.querySelector("#btnMudaLayout"); //pegando o btn
const mural = document.querySelector('.mural');

function mudaLayout() {
    mural.classList.toggle('mural--linha');
}

function mudaTexto() {
    if (btn.textContent === 'Blocos') {
        btn.textContent = 'Linhas';
    } else {
        btn.textContent = 'Blocos';
    }
}

//btn.onclick = mudaTexto; // atribuiu a chamada da função

btn.addEventListener('click', mudaLayout);
btn.addEventListener('click', mudaTexto);


btn.classList.remove('no-js');