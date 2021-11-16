
/* Quiz scripting starts*/
var answer1 = document.getElementById('option2');
var answer2 = document.getElementById('option(2)4');
var answer3 = document.getElementById('option(3)1')
var answer4 = document.getElementById('option(4)3');
function retry(){
  document.getElementById("pop2").style.display="none";
}
var myindex=0;
next();
function next(){
  document.getElementById("pop").style.display="none";
  let arr=document.getElementsByClassName("quest");
  for (let i=0; i<arr.length;i++){
    arr[i].style.display="none";
  }
  myindex++;
  if(myindex>arr.length){myindex=1}
  arr[myindex-1].style.display="block";
}
var correct = document.querySelector('#correct');
var wrong = document.querySelector('#wrong');
var done = document.querySelector('#done');
var pop=document.getElementById("pop");
var pop2=document.getElementById("pop2");
var pop3=document.getElementById("pop3");

function check1(){
  if (answer1.checked) {
    correct.play();
    pop.style.display="block";
  }else{
    wrong.play();
    pop2.style.display="block";
  }
}
function check2(){
  if (answer2.checked) {
    correct.play();
    pop.style.display="block";
  }else{
    wrong.play();
    pop2.style.display="block";
  }
}
function check3(){
  if (answer3.checked) {
    correct.play();
    pop.style.display="block";
  }else{
    wrong.play();
    pop2.style.display="block";
  }
}
function check4(){
  if (answer4.checked) {
    done.play();
    pop3.style.display="block";
  }else{
    wrong.play();
    pop2.style.display="block";
  }
}