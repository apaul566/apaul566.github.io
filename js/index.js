console.clear();

console.log("hi");

let x = 0;
let y = 0;

if (x > 2) {
  console.log("It was greater");
} else {
  console.log("it was smaller");
}

function sum(a, b) {
  let answer = a + b;
  return answer;
}

let result = sum(7, 72);
console.log(result);

let result2 = sum(9, 119);
console.log(result2);

let mybutton = document.getElementById("pressme");

document.addEventListener("click", sayhi);

function sayhi() {
  let greeter = document.getElementById("greeting");
  greeter.innerText = "hello!!!";
}
