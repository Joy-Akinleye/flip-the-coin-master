const coin = document.querySelector(".coin-head");
const flipBtn = document.querySelector(".flipbtn");
const resultText = document.querySelector(".result");

function flipCoin() {
    coin.classList.add("spin");

    // SetTimeout is a built-in javascript API
    setTimeout(() => {
        coin.classList.remove("spin");
        const isHeads = Math.random() < 0.5;
        coin.src = isHeads ? "./resources/heads.svg" : "./resources/tails.svg";
        resultText.textContent = isHeads ? "Heads" : "Tails";
    }, 1000); // match animation duration, 1 sec = 1000ms
}

coin.addEventListener("click", flipCoin);
flipBtn.addEventListener("click", flipCoin);