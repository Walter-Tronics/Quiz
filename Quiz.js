/* Quiz scripting starts*/

//Getting the answers of the questions
const answer1 = document.getElementById("option2"),
 answer2 = document.getElementById("option(2)4"),
 answer3 = document.getElementById("option(3)1"),
 answer4 = document.getElementById("option(4)3");

 //Getting the popups buttons
 //next btn select
 document.querySelector('#next_btn').addEventListener('click', next);
//retry btn select
document.querySelector('#retry_btn').addEventListener('click', retry);
//continue btn select
document.querySelector('#cont_btn').addEventListener('click', next);

//The try again funtion
function retry() {
  document.getElementById("pop2").style.display = "none";
  clearInterval(interval);
  //Call the timer function again
  countdown();
}


//Setting temporary mark variables
let firstMark = true,
secondMark = true,
thirdMark = true,
fourthMark = true;

//The next function starts
var myindex = 0;
next();
function next() {
  //Hide any popups present before displaying the next question
  document.getElementById("pop").style.display = "none";
  document.getElementById("pop3").style.display = "none";
  //put the questions in an array
  let arr = document.getElementsByClassName("quest");
  //Loop through the array to hide all questions at first
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.display = "none";
  }
  myindex++;
  //Reset the indexing to the first value if passed number of questions
  if (myindex > arr.length) {
    myindex = 1;
  }
  //Pick questions according to the indexing number to show
  arr[myindex - 1].style.display = "block";
  prog_value = 100;
  clearInterval(interval);
  //Call the timer function
  countdown();
}


//Animating the timer for countdown
var prog_value = 100,
interval;
let timer = document.querySelector(".timerVal");
//The timer function
function countdown() {
  //For every 50miliseconds, reduce timer until Zero;
  interval = setInterval(() => {
    prog_value -= 0.5;
    //When timer ends, check if the right option for the first question hasn't been chosen
    if (prog_value == 0 && !answer1.checked && myindex == 1) {
      pop2.style.display = 'none';
      wrong.play();
      pop3.style.display = 'block';
      //set the mark to false
      firstMark = false;
      //take away from the overall score
      final-=25;
      console.log(firstMark);
    //When timer ends, check if the right option for the first question has been chosen
    }else if(prog_value == 0 && answer1.checked && myindex == 1){pop.style.display = 'block'};
    
    //When timer ends, check if the right option for the second question hasn't been choosen
    if (prog_value == 0 && !answer2.checked && myindex == 2) {
      pop2.style.display = 'none';
      wrong.play();
      pop3.style.display = 'block';
      //Set the mark to false
      secondMark = false;
      //take away from the overall score
      final-=25;
      console.log(secondMark);
    //When timer ends, check if the right option for the second question has been chosen
    }else if(prog_value == 0 && answer2.checked && myindex == 2){pop.style.display = 'block'};
    
    //When timer ends, check if the right option for the third question hasn't been choosen
    if (prog_value == 0 && !answer3.checked && myindex == 3) {
      pop2.style.display = 'none';
      wrong.play();
      pop3.style.display = 'block';
      //Set the mark to false
      thirdMark = false;
      //take away from the overall score
      final-=25;
      console.log(thirdMark);
    //When timer ends, check if the right option for the third question has been choosen
    }else if(prog_value == 0 && answer3.checked && myindex == 3){pop.style.display = 'block'};

    //When timer ends, check if the right option for the fourth question hasn't been chosen
    if (prog_value == 0 && !answer4.checked && myindex == 4) {
      //Set the mark to false
      fourthMark = false;
      //take away from the overall score
      final-=25;
      pop2.style.display = 'none';
      done.play();
      //Show the result page
      pop4.style.display = 'block';
      console.log(fourthMark);
    //When timer ends, check if the right option for the fourth question has been chosen
    }else if(prog_value == 0 && answer4.checked && myindex == 4){pop4.style.display = 'block'};

    //Changing the progress bar position 
    timer.style.width = `${prog_value}%`;
    //Calling the change function every 50miliseconds
    change();
    //Set the final score based on the chosen and not chosen
    final_score.innerText = `${final}%`;
  }, 50);
}

//Creating variables for the audio files and popups
var correct = new Audio('/correct.mp3');
var wrong = new Audio('/wrong.mp3');
var done = new Audio('/done.mp3');
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
var result_1 = document.querySelector('#result_1');
var result_2 = document.querySelector('#result_2');
var result_3 = document.querySelector('#result_3');
var result_4 = document.querySelector('#result_4');
var final_score = document.querySelector('#final_score');

//Setting the final score
var final = 100;


function change(){
  if (firstMark == false) {
    result_1.classList.replace("w3-text-blue","w3-text-red");
    result_1.classList.replace("fa-check-circle","fa-times-circle");
    //result_1.innerText = 'Fail';
  }/*else{
    result_1.classList.remove("w3-red");
    result_1.classList.add("w3-blue")}*/
  if (secondMark == false) {
    result_2.classList.replace("w3-text-blue","w3-text-red");
    result_2.classList.replace("fa-check-circle","fa-times-circle");
      //result_2.innerText = 'Fail';
  }/*else{
      result_2.classList.replace("w3-red","w3-blue")
      result_2.classList.add("w3-blue")}*/
  if (thirdMark == false) {
    result_3.classList.replace("w3-text-blue","w3-text-red");
    result_3.classList.replace("fa-check-circle","fa-times-circle");
    //result_3.innerText = 'Fail';
  }/*else{
    result_3.classList.replace("w3-red","w3-blue")
    result_3.classList.add("w3-blue")}*/
  if (fourthMark == false) {
    result_4.classList.replace("w3-text-blue","w3-text-red");
    result_4.classList.replace("fa-check-circle","fa-times-circle");
    //result_4.innerText = 'Fail';
  }/*else{
    result_4.classList.remove("w3-red")
    result_4.classList.add("w3-blue")}
  */
}

//Restarting the game
let restart = document.querySelector('.restart');
restart.addEventListener('click', ()=>{
  location.reload();
});

//Theming

//Defining the theme object
const themes = {
  Dark: {
    text: 'Light',
    bg: 'rgba(0, 0, 0, .281)',
    color: 'white',
    resBg: '#282c34',
    resColor: 'white'
  },
  Light: {
    text: 'Dark',
    bg: 'white',
    color: 'black',
    resBg: '#aec4b8',
    resColor: '#282c34'
  },
  initStyle: 'translateX(-100%)',
  style: 'translateX(-40%)'
}

//Getting the HTML element for tweaking
const theme = document.querySelector('.theme'),
quiz_box = document.querySelector('#quiz-box'),
resBtn = document.querySelector('.restart'),
res_box = document.querySelector('.subpop4');

theme.addEventListener('click', ()=>{
  if (theme.innerText == 'Dark') {
    theme.style.transform = themes.initStyle;

    setTimeout( ()=>{
      theme.innerText = themes.Dark.text;
      theme.classList.add('light');
      theme.style.transform = themes.style;
      document.querySelector('body').classList.add('darkbody');
      quiz_box.style.background = themes.Dark.bg;
      quiz_box.style.color = themes.Dark.color;
      res_box.style.background = themes.Dark.bg;
      resBtn.style.background = themes.Dark.resBg;
      resBtn.style.color = themes.Dark.resColor;
    },1000);
    // document.querySelector('body'). 
  }else{
    theme.style.transform = themes.initStyle;

    setTimeout( ()=>{
      theme.innerText = themes.Light.text;
      theme.classList.remove('light');
      theme.style.transform = themes.style;
      document.querySelector('body').classList.remove('darkbody');
      quiz_box.style.background = themes.Light.bg;
      quiz_box.style.color = themes.Light.color;
      res_box.style.background = themes.Light.bg;
      resBtn.style.background = themes.Light.resBg;
      resBtn.style.color = themes.Light.resColor
    },1000);
  }
});
//pop4