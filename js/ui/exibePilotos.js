// cria o card dos pilotos
export function renderizaPilotos(pilotos) {
    const gridPilotos = document.getElementById('gridPilotos');

    gridPilotos.innerHTML = '';

    pilotos.forEach(piloto => {
        const card = document.createElement('div');
        card.className = 'col-12 col-sm-6 col-md-3';

        card.innerHTML = `
        <div class="card card-piloto bg-dark border border-dark">
            <div class="card-inner">

                <div class="card-frente">
                    <img src="${piloto.imagem}" alt="${piloto.nome}" class="imagem-piloto"/>
                </div>

                <div class="card-verso">

                    <h5 class="nome-piloto">${piloto.nome}</h5>

                    <ul class="info-piloto">
                        <li><strong>Número:</strong> #${piloto.numero}</li>
                        <li><strong>Equipe:</strong> ${piloto.equipe}</li>
                        <li><strong>Títulos:</strong> ${piloto.titulos}</li>
                        <li><strong>Vitórias:</strong> ${piloto.vitorias}</li>
                        <li><strong>Idade:</strong> ${piloto.idade}</li>
                        <li class="d-flex align-items-center gap-2">
                            <strong>Nacionalidade:</strong>
                            <img src="${piloto.nacionalidade}" alt="Bandeira" class="bandeira rounded-circle" style="width:24px; height:24px; object-fit:cover;"/>
                        </li>
                    </ul>

                </div>
            </div>
        </div>`;

        gridPilotos.appendChild(card);
    });
}
