'use strict'

const sons = {
    'A': 'boom.wav',
    'S': 'Clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

const exibir = (sons) => {
    Object.keys(sons).forEach(criarDiv)
}

exibir(sons);

const tocarSom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play();
}

const adicionarEfeito= (letra)=>[
document.getElementById(letra).classList.add(1, 'active')
]

const removerEfeito=(letra)=>{
    const div = document.getElementById(letra);
    const removeActive = ()=>div.classList.remove('active')
    div.addEventListener('transitionend', removeActive)
}

const ativarDiv = (event) => {
    console.log(event)
const letra = event.type == 'click'? event.target.id : event.key.toUpperCase();
    const letraPermitida = sons.hasOwnProperty(letra)
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
}

document.getElementById('container').addEventListener('click', ativarDiv);

window.addEventListener('keydown', ativarDiv)
