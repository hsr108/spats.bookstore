const flipCards = document.querySelectorAll(".upper-block img");

function flippingCard() {
    this.classList.toggle("is-flipped");
}

flipCards.forEach(card => {
    card.addEventListener("click", flippingCard);
});