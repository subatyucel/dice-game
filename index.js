let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

function rollDice() {
  let random1 = Math.round(Math.random() * 5 + 1);
  let random2 = Math.round(Math.random() * 5 + 1);

  img1.setAttribute("src", `./images/dice${random1}.png`);
  img2.setAttribute("src", `./images/dice${random2}.png`);

  if (random1 > random2) {
    document.querySelector("h1").textContent = "Player 1 Won";
  } else if (random1 === random2) {
    document.querySelector("h1").textContent = "Draw";
  } else {
    document.querySelector("h1").textContent = "Player 2 Won";
  }
}
