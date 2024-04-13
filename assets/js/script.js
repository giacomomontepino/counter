const title = document.createElement("h1");
const titleText = document.createTextNode("Progetto Javascript: Counter");
title.appendChild(titleText);
title.classList.add("title");
document.body.appendChild(title);

let buttonIncrease = document.createElement("button");
const paragrafo = document.createElement("p");
const paragrafoText = document.createTextNode("+");
paragrafo.appendChild(paragrafoText);
paragrafo.classList.add("operator");
buttonIncrease.classList.add("increase");
buttonIncrease.appendChild(paragrafo);
document.body.appendChild(buttonIncrease);

let counterValue = 0;
let counter = document.createElement("p");
let counterText = document.createTextNode(counterValue);
counter.appendChild(counterText);
counter.classList.add("counter");
document.body.appendChild(counter);

let buttonDecrease = document.createElement("button");
const paragrafo2 = document.createElement("p");
const paragrafo2Text = document.createTextNode("-");
paragrafo2.appendChild(paragrafo2Text);
buttonDecrease.appendChild(paragrafo2);
buttonDecrease.classList.add("decrease");
paragrafo2.classList.add("operator");
document.body.appendChild(buttonDecrease);

buttonIncrease.addEventListener("click", function(){
    counterValue++;
    counter.textContent = counterValue;
});
buttonDecrease.addEventListener("click", function(){
    counterValue--;
    counter.textContent = counterValue;
})
