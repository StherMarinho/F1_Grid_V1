//conversa com o JSON Server fazendo o get dos pilotos
//não mexe no DOM
const API_URL = 'http://localhost:3000/pilotos';

export async function buscaPilotos() {
    try {
        const response = await fetch(API_URL);
        if(!response.ok) {
            throw new Error('Erro ao buscar pilotos.');
        }
        return await response.json();
    }
    catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
}