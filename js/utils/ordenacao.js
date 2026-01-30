export function ordenarPilotos(pilotos, criterio) { //pilotos é um array talvez pelo id, criterio é oq será selecionado
    const copia = [...pilotos]; //copiar o array para n modificar o original
    switch (criterio) {
        case 'titulos':
            return copia.sort((a,b) => b.titulos - a.titulos);
        case 'vitorias':
            return copia.sort((a,b) => b.vitorias - a.vitorias);
        case 'idade':
            return copia.sort((a,b) => a.idade - b.idade);
        default:
            return copia; 
    }
}
