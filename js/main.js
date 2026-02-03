import {buscaPilotos} from './services/pilotoService.js';
import {renderizaPilotos} from './ui/exibePilotos.js';
import {ativaCardFlip} from './ui/cardFlip.js';
import {filtrosPilotos} from './ui/filtros.js';
import {inicializarMusica} from './ui/audio.js';
import {estado} from './state/estadoAplicacao.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const pilotos = await buscaPilotos();

        estado.pilotos = pilotos;

        renderizaPilotos(pilotos);

        ativaCardFlip();
        filtrosPilotos();
        inicializarMusica();

        console.log('Aplicação iniciada com sucesso.');
    } catch (error) {
        console.error('Erro ao iniciar aplicação:', error);
    }
});

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTopo.classList.add("show");
    } else {
        btnTopo.classList.remove("show");
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function atualizarAnoNoTitulo() {
    const anoAtual = new Date().getFullYear();
    const titulo = document.getElementById("tituloPagina");
    titulo.textContent = `F1 GRID -  ${anoAtual}`;
}

atualizarAnoNoTitulo();