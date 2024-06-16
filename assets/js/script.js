/*const title = document.createElement("h1");
const titleText = document.createTextNode("Progetto Javascript: Counter");
title.appendChild(titleText);
title.classList.add("title");
document.body.appendChild(title);


function addIncreaseButton(counter) {
    let buttonIncrease = document.createElement("button");
    const paragrafo = document.createElement("p");
    const paragrafoText = document.createTextNode("+");
    paragrafo.appendChild(paragrafoText);
    paragrafo.classList.add("operator");
    buttonIncrease.classList.add("increase");
    buttonIncrease.appendChild(paragrafo);
    document.body.appendChild(buttonIncrease);
    buttonIncrease.addEventListener("click", function(){
        counter.textContent = ++counter.textContent;
    });
    return buttonIncrease;
}

function addCounter() {
    let counterValue = 0;
    let counter = document.createElement("p");
    let counterText = document.createTextNode(counterValue);
    counter.appendChild(counterText);
    counter.classList.add("counter");
    document.body.appendChild(counter);
    return counter;
}

function addDecreaseButton(counter) {
    let buttonDecrease = document.createElement("button");
    const paragrafo2 = document.createElement("p");
    const paragrafo2Text = document.createTextNode("-");
    paragrafo2.appendChild(paragrafo2Text);
    buttonDecrease.appendChild(paragrafo2);
    buttonDecrease.classList.add("decrease");
    paragrafo2.classList.add("operator");
    document.body.appendChild(buttonDecrease);
    buttonDecrease.addEventListener("click", function(){
        counter.textContent = --counter.textContent;
    });
    return buttonDecrease;
}

document.addEventListener("DOMContentLoaded", function(){
    let counter = addCounter();
    addIncreaseButton(counter);
    addDecreaseButton(counter);
});*/

// Creazione del titolo
const title = document.createElement("h1");
const titleText = document.createTextNode("Progetto Javascript: Counter");
title.appendChild(titleText);
title.classList.add("title");
document.body.appendChild(title);

// Variabile globale per tenere traccia del conto
let counterValue = 0;

// Funzione per aggiornare il valore del contatore
function updateCounter(value) {
    counterValue += value;
    document.querySelector('.counter').textContent = counterValue;
}

// Funzione per aggiungere il bottone di incremento
function addIncreaseButton() {
    let buttonIncrease = document.createElement("button");
    const paragrafo = document.createElement("p");
    const paragrafoText = document.createTextNode("+");
    paragrafo.appendChild(paragrafoText);
    paragrafo.classList.add("operator");
    buttonIncrease.classList.add("increase");
    buttonIncrease.appendChild(paragrafo);
    document.body.appendChild(buttonIncrease);

    buttonIncrease.addEventListener("click", function(){
        handleButtonClick(1);
    });

    return buttonIncrease;
}

// Funzione per aggiungere il bottone di decremento
function addDecreaseButton() {
    let buttonDecrease = document.createElement("button");
    const paragrafo2 = document.createElement("p");
    const paragrafo2Text = document.createTextNode("-");
    paragrafo2.appendChild(paragrafo2Text);
    buttonDecrease.appendChild(paragrafo2);
    buttonDecrease.classList.add("decrease");
    paragrafo2.classList.add("operator");
    document.body.appendChild(buttonDecrease);

    buttonDecrease.addEventListener("click", function(){
        handleButtonClick(-1);
    });

    return buttonDecrease;
}

// Funzione per gestire il click dei bottoni
function handleButtonClick(value) {
    updateCounter(value);
}

// Funzione per aggiungere il contatore
function addCounter() {
    let counter = document.createElement("p");
    counter.classList.add("counter");
    counter.textContent = counterValue;
    document.body.appendChild(counter);
    return counter;
}

// Quando il documento è caricato, aggiunge il contatore e i bottoni
document.addEventListener("DOMContentLoaded", function(){
    addCounter();
    addIncreaseButton();
    addDecreaseButton();
});


