
let counter1 = 1;
let counter2 = 1;
let score1 = 5;
let score2 = 5;
let background = 20;
document.addEventListener("keyup", (event) => {

  if (event.keyCode === 39 || event.keyCode === 83) {
    background -= 5;
    const bgtable = document.getElementById("field");
    bgtable.style.backgroundPositionX = `${background}%`;
  }

  if (event.keyCode === 81 || event.keyCode === 37) {
    background += 5;
    const bgtable = document.getElementById("field");
    bgtable.style.backgroundPositionX = `${background}%`;
  }

  if (event.keyCode === 39) {
    const next = document.getElementById(`1-case-${(counter1 + 1).toString()}`);
    const current = document.getElementById(`1-case-${(counter1).toString()}`);

    current.classList.remove("active");
    counter1 += 1;

    if (next === null) {
      const first = document.getElementById(`1-case-1`);
      first.classList.add("active");
      counter1 = 1;
      score1 -= 1;
      const audio = new Audio('sound.mp3');
      audio.play();

      const scorep1 = document.getElementById("scorep1");
      scorep1.innerHTML = `Laps: ${score1}`;
    } else {
      next.classList.add("active");
    }
    if (score1 === 0) {
      const winning1 = document.getElementById("win");
      winning1.innerHTML = `Bernie has won!`;
      const field = document.getElementById(`field`);
      field.classList.add("hide");


    }
  }

  if (event.keyCode === 37) {
    const next = document.getElementById(`1-case-${(counter1 - 1).toString()}`);
    const current = document.getElementById(`1-case-${(counter1).toString()}`);

    next.classList.add("active");
    current.classList.remove("active");
    counter1 -= 1;
  }
  if (event.keyCode === 83) {
    const next = document.getElementById(`2-case-${(counter2 + 1).toString()}`);
    const current = document.getElementById(`2-case-${(counter2).toString()}`);

    current.classList.remove("active");
    counter2 += 1;

    if (next === null) {
      const first = document.getElementById(`2-case-1`);
      first.classList.add("active");
      counter2 = 1;
      score2 -= 1;
      const audio = new Audio('sound.mp3');
      audio.play();

      const scorep2 = document.getElementById("scorep2");
      scorep2.innerHTML = `Laps: ${score2}`;
    } else {
      next.classList.add("active");
    }

    if (score2 === 0) {
      const winning2 = document.getElementById("win");
      winning2.innerHTML = `Bernie has won!`;
      const field = document.getElementById(`field`);
      field.classList.add("hide");
    }
  }
  if (event.keyCode === 81) {
    const next = document.getElementById(`2-case-${(counter2 - 1).toString()}`);
    const current = document.getElementById(`2-case-${(counter2).toString()}`);

    next.classList.add("active");
    current.classList.remove("active");
    counter2 -= 1;
  }
});
