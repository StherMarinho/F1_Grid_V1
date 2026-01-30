//efeito de virar o card dos pilotos, lida com o click
export function ativaCardFlip() {
    document.querySelectorAll('.card-piloto').forEach(card => {
        card.addEventListener('click' , () => {
            card.classList.toggle('flipped');
        });
    });
}