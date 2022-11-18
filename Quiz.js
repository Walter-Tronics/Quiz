/* Quiz scripting starts*/
var answer1 = document.getElementById("option2");
var answer2 = document.getElementById("option(2)4");
var answer3 = document.getElementById("option(3)1");
var answer4 = document.getElementById("option(4)3");
function retry() {
  document.getElementById("pop2").style.display = "none";
  clearInterval(interval);
  countdown();
}

var myindex = 0;
next();
function next() {
  document.getElementById("pop").style.display = "none";
  document.getElementById("pop3").style.display = "none"
  let arr = document.getElementsByClassName("quest");
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.display = "none";
  }
  myindex++;
  if (myindex > arr.length) {
    myindex = 1;
  }
  arr[myindex - 1].style.display = "block";
  prog_value = 100;
  clearInterval(interval);
  countdown();
}

//Animating the timer for countdown
var prog_value = 100,
  interval;
let timer = document.querySelector(".timerVal");
function countdown() {
  interval = setInterval(() => {
    prog_value -= 0.5;
    if (prog_value == 0 && !answer1.checked && myindex == 1) {
      pop2.style.display = 'none';
      wrong.play();
      pop3.style.display = 'block';
    }
    if (prog_value == 0 && !answer2.checked && myindex == 2) {
      pop2.style.display = 'none';
      wrong.play();
      pop3.style.display = 'block';
    }
    if (prog_value == 0 && !answer3.checked && myindex == 3) {
      pop2.style.display = 'none';
      wrong.play();
      pop3.style.display = 'block';
    }
    if (prog_value == 0 && !answer4.checked && myindex == 4) {
      pop2.style.display = 'none';
      done.play();
      pop4.style.display = 'block';
    }
    timer.style.width = `${prog_value}%`;
  }, 50);
}

var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");
var done = document.querySelector("#done");
var pop = document.getElementById("pop");
var pop2 = document.getElementById("pop2");
var pop3 = document.getElementById("pop3");
var pop4 = document.getElementById("pop4");

//Clicking on box marks the radio input tag
let optBox = document.querySelectorAll(".opt");
//looping through the boxes
for (let i of optBox) {
  //add an eventlistener to each of the boxes
  i.addEventListener("click", () => {
    i.querySelector("input").checked = true;
  });
}

//Checking for the correct answer functions
document.getElementById("check1").addEventListener("click", () => {
  if (answer1.checked) {
    clearInterval(interval);
    correct.play();
    pop.style.display = "block";
  } else {
    wrong.play();
    pop2.style.display = "block";
  }
});

document.getElementById("check2").addEventListener("click", () => {
  if (answer2.checked) {
    clearInterval(interval);
    correct.play();
    pop.style.display = "block";
  } else {
    wrong.play();
    pop2.style.display = "block";
  }
});

document.getElementById("check3").addEventListener("click", () => {
  if (answer3.checked) {
    clearInterval(interval);
    correct.play();
    pop.style.display = "block";
  } else {
    wrong.play();
    pop2.style.display = "block";
  }
});

document.getElementById("check4").addEventListener("click", () => {
  if (answer4.checked) {
    clearInterval(interval);
    done.play();
    pop4.style.display = "block";
  } else {
    wrong.play();
    pop2.style.display = "block";
  }
});

//Configuration of the result data
let result_1 = document.querySelector('#result_1');
let result_2 = document.querySelector('#result_2');
let result_3 = document.querySelector('#result_3');
let result_4 = document.querySelector('#result_4');
let final_score = document.querySelector('#final_score');

/*
if (answer1.checked) {
  result_1.classList.add("w3-red");
  result_1.innerText = 'Fail';
}else{
  result_1.classList.remove("w3-red");
  result_1.classList.add("w3-blue")}
if (!answer2.checked) {
  result_2.classList.add("w3-red");
  result_2.innerText = 'Fail';
}else{
  result_2.classList.replace("w3-red","w3-blue")
  result_2.classList.add("w3-blue")}
if (!answer3.checked) {
  result_3.classList.add("w3-red");
  result_3.innerText = 'Fail';
}else{
  result_3.classList.replace("w3-red","w3-blue")
  result_3.classList.add("w3-blue")}
if (!answer4.checked) {
  result_4.classList.add("w3-red");
  result_4.innerText = 'Fail';
}else{
  result_4.classList.remove("w3-red")
  result_4.classList.add("w3-blue")}
*/