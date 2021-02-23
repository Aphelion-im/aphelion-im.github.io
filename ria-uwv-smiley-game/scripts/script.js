"use strict";

window.addEventListener("load", () => {

  const main = document.querySelector("main");
  const scoreOutput = document.querySelector(".score");
  const output = document.querySelector(".output");
  let score = 0;
  let timer = 1000;



  // HTML template: <img class="smiley" src="images/smiley.png" alt="Smiley">

  function createSmiley(posX, width) {
    const smiley = document.createElement("img");
    smiley.setAttribute("class", "smiley");
    smiley.setAttribute("src", "images/smiley.png");
    smiley.setAttribute("alt", "Smiley");
    smiley.style.left = `${posX}px`;
    smiley.style.width = `${width}px`;
    smiley.addEventListener("click", updateScore);
    smiley.addEventListener("animationend", destroySmiley);
    main.appendChild(smiley);
  };


// Crate a smiley every X (milli) seconds
  setInterval(() => {
    const randomPosX = Math.floor(Math.random() * 1280);
    const randomWidth = Math.floor((Math.random() * 200) + 100);
    createSmiley(randomPosX, randomWidth)

  }, timer);


  function updateScore() {

    checkScore();
    const laugh = new Audio("sounds/funny-laugh-sound-effect.mp3");
    laugh.currentTime = 0;
    laugh.play();
    this.remove();
  }


  function checkScore() {
    score++;
    scoreOutput.textContent = "Score: " + score;

    switch (score) {

      case 1:
        output.textContent = "Jeetje wat goed Ria!";
        break;
      case 2:
        output.textContent = "Top zeg, alweer 2";
        break;
      case 3:
        output.textContent = "Smileys op een monitor kun je niet klikken";
        break;
      case 5:
        output.textContent = "Alweer 5 smileys. Wat goed hé!";
        break;
      case 10:
        output.textContent = "Je bent een topper!";
        break;
      case 12:
        output.textContent = "Op deze smileys kun je wél klikken!";
        break;
      case 20:
        output.textContent = "Beetje te makkelijk zo hé?!";
        break;

      default:
        output.textContent = "";
    };
  };


  function destroySmiley() {
    console.log("Destroyed!");
    this.remove();
  };












}); // End load event listener