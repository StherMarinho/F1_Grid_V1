//executa mudanças nos selectores de filtro
//atualiza o state e re-renderiza os pilotos conforme o filtro escolhido
import {estado} from '../state/estadoAplicacao.js';
import { ordenarPilotos } from '../utils/ordenacao.js';
import { ativaCardFlip } from './cardFlip.js';
import {renderizaPilotos} from './exibePilotos.js';

export function filtrosPilotos(){
    const filtroEquipe = document.getElementById('filtroEquipe');
    const ordenarPor = document.getElementById('ordenarPor');

    filtroEquipe.addEventListener('change', () => {
        estado.filtroEquipe = filtroEquipe.value;
        aplicarFiltros();
    });

    ordenarPor.addEventListener('change', () => {
        estado.ordenarPor = ordenarPor.value;
        aplicarFiltros();
    });
}

function aplicarFiltros(){
    let pilotosFiltrados = [...estado.pilotos];

    if(estado.filtroEquipe){
        pilotosFiltrados = pilotosFiltrados.filter(piloto => piloto.equipe === estado.filtroEquipe);
    }

    if(estado.ordenarPor){
        pilotosFiltrados = ordenarPilotos(pilotosFiltrados, estado.ordenarPor);
    }

    renderizaPilotos(pilotosFiltrados);

    ativaCardFlip();
}