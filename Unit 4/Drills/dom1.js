const blue = document.getElementById("question-1");
blue.style.color = "blue";

const redClass = document.querySelector(".question-2");
redClass.style.color = "red";

const orangeAll = document.querySelectorAll(".question-3");
//query all is an array and they don't have color.
orangeAll[0].style.color = "orange";
orangeAll[1].style.color = "orange";

const qFour = document.getElementById("question-4").parentNode;

qFour.style.background = "purple";
//hw DOM exercise 1

const q5 = document.getElementById("question-5");
q5.style.display = "none";

/* const q6a = document.querySelector("subheading");
q6a.classList.add(.big-text); */

const q6a = document.getElementById("subheading");
q6a.classList.add("big-text");

const q6b = document.getElementById("subheading2");
q6b.classList.remove("big-text");

//select element use propery class with add or remoe class.list.add/remove
//pg 12 on stuff

const q7 = document.getElementById("yourname");
q7.innerText = "Gina";

//intropolation for 8
/* const q8 = document.getElementById("yourname2");
q8.insertAdjacentText("beforeend", "Gina");

//array string in each page first in first

const q9 = Array.from.querySelectorAll(".task");
q9[0].style.color = "orange";
q9[1].style.color = "orange";
q9[2].style.color = "blue"; */

const q8 = document.getElementById("yourname2");
q8.document.getElementById("yourname2").innerHTML = "Welcome + yourname2 +!";

const narray = document.createElement("p");
narray.innerText = "Task1";
document.body.appendChild(narray);
const narray2 = document.createElement("p");
narray2.innerText = "Task2";
document.body.appendChild(narray2);
const narray3 = document.createElement("p");
narray3.innerText = "Task3";
document.body.appendChild(narray3);
