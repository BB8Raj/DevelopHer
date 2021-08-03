//stops page from refreshing/clearing on submit
document.getElementById("moneyForm").addEventListener("submit", (event) => {
  event.preventDefault();
});

//Global Variables
let range = document.getElementById("number_input").value;
const show_button = document.getElementById("moolah");
const show_work = document.getElementById("coin_list");
var createAudio = document.getElementById("cha");
var deleteAudio = document.getElementById("delete");

/* function myNewFunction(sel) {
  let coin_returned = sel.options[sel.selectedIndex].text;
  return coin_returned;
} */

//for value
/* function singleSelectChangeValue() {
  //Getting Value
  //var selValue = document.getElementById("singleSelectDD").value;
  var selObj = document.getElementById("coin_input").value;
  var selValue = selObj.options[selObj.selectedIndex].value;
  //Setting Value
  document.getElementById("textFieldValueJS").value = selValue;
  console.log(selObj);
} */

//for text of coin
function singleSelectChangeText() {
  //Getting Value

  var selObj = document.getElementById("coin_input");
  var selValue = selObj.options[selObj.selectedIndex].text;

  //Setting Value
  document.getElementById("textFieldTextJS").value = selValue;
  // console.log(selValue);
}

/* var sel = document.getElementById("coin_input");
var value = sel.options[sel.selectedIndex].value;
var coin_selected = sel.options[sel.selectedIndex].text;
var text = sel.options[sel.selectedIndex].text; */

//Make Money Button Code Start
show_button.addEventListener(`click`, () => {
  var selObj = document.getElementById("coin_input").value;
  //coin_list.append(selObj); used for testing - not needed for final
  // console.log("range " + range); //not working
  //coin_list.append(range);
  /*   const test = document.getElementById("textFieldTextJS").value;
  console.log(`coin is ${test}`);
  coin_list.append(test); */
  console.log("testing input " + number_input.value);
  console.log("testing selObjt " + selObj);
  //all here create a for loop
  for (number_input.value; number_input.value > 0; number_input.value--) {
    //create element of image
    let coinCreation = document.createElement("img");
    //take value of type of coin and add in src of image and class name
    if (selObj === "Penny") {
      coinCreation.src = "penny.jpg";
      coinCreation.className = "penny";
    }

    {
      if (selObj === "Nickel") {
        coinCreation.src = "nickel.jpg";
        coinCreation.className = "nickel";
      }

      if (selObj === "Dime") {
        coinCreation.src = "dime.jpg";
        coinCreation.className = "dime";
      }

      if (selObj === "Quarter") {
        coinCreation.src = "quarter.jpg";
        coinCreation.className = "quarter";
      }
    }
    coin_list.appendChild(coinCreation);
    createAudio.play();
  }
});

//Remove clicked coin
const imgChildRemove = document.getElementById("coin_list");
imgChildRemove.addEventListener("click", (event) => {
  event.target.remove();
  deleteAudio.play();
});

//total is outside of unction. totals vaulue if total value + coin
//for loop add total value inside
//event target remove with -- challenge subtracting price with removal
