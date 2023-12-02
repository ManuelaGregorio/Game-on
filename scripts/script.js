const carousel = document.querySelector(".carousel");
let translateX = 0;

function nextSlide() {
    translateX -= 320; 
    if (translateX < -960) {
        translateX = 0;
    }
    carousel.style.transform = `translateX(${translateX}px)`;
}

setInterval(nextSlide, 3000);

// Jogo troca palavras-------------------------------------------------------------------------------------------------------------------------------------------------

function TrocaPalavra () {
    Digitada = document.getElementById("palavra").value 


    document.getElementById("palavra1").innerHTML = Digitada
    document.getElementById("palavra2").innerHTML = Digitada
    document.getElementById("palavra3").innerHTML = Digitada
    document.getElementById("palavra4").innerHTML = Digitada
    document.getElementById("palavra5").innerHTML = Digitada
}

// Jogo dos acertos---------------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const valoresCartas = ['Estrelas', 'Lua', 'Sol', 'Galáxia', 'Universo', 'Terra', 'Energia', 'Cometas', 'Estrelas', 'Lua', 'Sol', 'Galáxia', 'Universo', 'Terra', 'Energia', 'Cometas'];

    const jogoMemoria = document.querySelector('.memory-game');
    const mensagemVitoria = document.getElementById('mensagem-vitoria');
    const btnReiniciar = document.getElementById('btn-reiniciar');
    let cartasViradas = [];
    let cartasCombinadas = [];

    valoresCartas.sort(() => Math.random() - 0.5);

    valoresCartas.forEach(valor => {
        const carta = document.createElement('div');
        carta.classList.add('card');
        carta.dataset.valor = valor;
        carta.innerHTML = '<span class="escondido">' + valor + '</span>';
        carta.addEventListener('click', virarCarta);
        jogoMemoria.appendChild(carta);
    });

    function virarCarta() {
        if (cartasViradas.length < 2 && !this.classList.contains('matched') && !this.classList.contains('virada')) {
            this.classList.add('virada');
            cartasViradas.push(this);

            if (cartasViradas.length === 2) {
                setTimeout(verificarCombinacao, 500);
            }
        }
    }

    function verificarCombinacao() {
        const [carta1, carta2] = cartasViradas;
        const valor1 = carta1.dataset.valor;
        const valor2 = carta2.dataset.valor;

        if (valor1 === valor2) {
            carta1.classList.add('matched');
            carta2.classList.add('matched');
            cartasCombinadas.push(carta1, carta2);
        } else {
            carta1.classList.remove('virada');
            carta2.classList.remove('virada');
        }

        cartasViradas = [];

        if (cartasCombinadas.length === valoresCartas.length) {
            exibirMensagemVitoria();
        }
    }

    function exibirMensagemVitoria() {
        mensagemVitoria.classList.remove('hidden');
    }
});



function startGame(gameName) {
    
    window.location.href = gameName + '.html';
}

