"use strict";
const numbers = [...document.querySelectorAll(".number")];
const targets = numbers.map((x) => parseInt(x.textContent));
let content;
numbers.forEach((x) => {
  x.textContent = 0;
});
setInterval(function () {
  numbers.forEach((x, i) => {
    content = parseInt(x.textContent);
    const increment = Math.ceil(targets[i] / 1000);
    if (content < targets[i] - increment) {
      x.textContent = `${content + increment}+`;
    }

    if (content >= targets[i] - increment && content !== targets[i]) {
      x.textContent = `${content + 1}+`;
    }
  });
}, 1);
