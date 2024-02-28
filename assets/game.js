const dice1  = document.querySelector(".dice1");
const dice2  = document.querySelector(".dice2");
const button = document.querySelector(".btn");

button.onclick = () => {
  dice1.dataset.dice = Math.floor(Math.random() * 6 + 1);
  dice2.dataset.dice = Math.floor(Math.random() * 6 + 1);
};
