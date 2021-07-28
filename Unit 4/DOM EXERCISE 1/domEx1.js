//0 set up main button function
function main() {
  //1
  const growMe = document.getElementById("grow-me");
  growMe.classList.add("big");

  //2
  const shrinkMe = document.getElementById("shrink-me");
  shrinkMe.classList.remove("big");

  //3
  const displayList = document.querySelectorAll("li");
  console.log(displayList);

  //4 Set the href of the link to "https://www.example.com" and update the text to say
  //"somewhere" instead of "nowhere".

  /* NOTES: use queryselector with class for link rather than get by ID*/

  //document.getElementById("myAnchor").href = "http://www.cnn.com/";
  document.querySelector(".link").href = "https://www.example.com";
  document.querySelector(".link").text = "somewhere";

  //5
  const hideMe = document.getElementById("hide-me");
  hideMe.style.display = "none";

  //6
  const showMe = document.getElementById("show-me");
  showMe.style.display = "block";

  //7a
  var input = document.getElementById("name").value;
  console.log(input);

  //7b
  const welcome = document.querySelector("h1");
  welcome.textContent += input += "!";
}
