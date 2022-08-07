const counter = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');

const decrementFu = function () {
counter.decrement();
counterValue.textContent = counter.value
};
const clickOnDecrementBtn = decrementBtn.addEventListener("click", decrementFu);

const incrementFu = function () {
counter.increment();
counterValue.textContent = counter.value;
};
const clickOnIncrementBtn = incrementBtn.addEventListener("click", incrementFu);