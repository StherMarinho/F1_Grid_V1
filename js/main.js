import {buscaPilotos} from './services/pilotoService.js';
import {renderizaPilotos} from './ui/exibePilotos.js';
import {ativaCardFlip} from './ui/cardFlip.js';
import {filtrosPilotos} from './ui/filtros.js';
import {inicializarMusica} from './ui/audio.js';
import {estado} from './state/estadoAplicacao.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 1️⃣ Busca os pilotos da API
        const pilotos = await buscaPilotos();

        // 2️⃣ Salva no estado global
        estado.pilotos = pilotos;

        // 3️⃣ Renderiza na tela
        renderizaPilotos(pilotos);

        // 4️⃣ Ativa comportamentos da UI
        ativaCardFlip();
        filtrosPilotos();
        inicializarMusica();

        console.log('Aplicação iniciada com sucesso.');
    } catch (error) {
        console.error('Erro ao iniciar aplicação:', error);
    }
});