//Date and Time Script
var dt = new Date();
document.getElementById("date").innerHTML =
  ("0" + (dt.getMonth() + 1)).slice(-2) +
  "." +
  ("0" + dt.getDate()).slice(-2) +
  "." +
  dt.getFullYear();

//Toggle Dark Mode
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//Update Budget Function
let weeklyIncome = 0; //initialize weekly budget at $0
const updateBudgetButton = document.querySelector("#update_budget_button"); //weekly budget button
const incomeInput = document.querySelector("#income_input"); //weekly budget input field

updateBudgetButton.onclick = updateBudget; //when update budget button is clicked run updateBudget function

function updateBudget(event) {
  event.preventDefault();
  weeklyIncome = incomeInput.value; //setting weeklyIncome variable to the new weekly budget value
  updateBalance(); //call updateBalance function
}

//Total Expense Function
const totalExpenses = document.querySelector("#total_expenses"); //total expense amount displayed on page

function updateExpenseTotal() {
  expenseTotal = 0; //total expense starts at 0
  for (let i = 0; i < expenses.length; i++) {
    //loop through the length of the expenses
    expenseTotal = expenseTotal + expenses[i]; //setting expenseTotal variable to the new expense total by adding any new expense to the previous expense total
  }
  totalExpenses.innerText = "$" + expenseTotal; //add new expense total to the page
  updateBalance(); //call updateBalance function
}

//Remaining Balance Function
let balance = 0; //initialize remaining balance at $0
let expenseTotal = 0; //initialize total expense at $0
const remainingBalance = document.querySelector("#remaining_balance"); //remaining balance displayed on page

function updateBalance() {
  balance = weeklyIncome - expenseTotal; //setting balance variable to value after expenses are subtracted from the weekly budget
  balance = Math.round(balance * 100) / 100;
  remainingBalance.innerText = "$" + balance; //display new remaining balance (when updateBudget runs/user selects update budget button)
  if (balance <= 0) {
    showAlert();
  }
}

//Drop Down for Expense Category
var selObj = document.getElementById("category_input");

//This is for the Pop Up Alert Function
function showAlert() {
  Swal.fire({
    title: "Over Budget!!!",
    imageUrl: "monkey-oh.gif",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Animated Monkey looking shocked',
  });
  var createSound = document.getElementById("mario");
  createSound.play();
}

//Add Expense and Expense List Function
const expenses = []; //array where expenses will be stored if using {} makes object of array but breaks total
const nameInput = document.querySelector("#name_input"); //expense name input field
const amountInput = document.querySelector("#amount_input"); //expense amount input field
const expenseList = document.querySelector("#expense_list"); //expense list displayed on page
const addExpensiveButton = document.querySelector("#add_expense_button"); //add expense button

addExpensiveButton.onclick = addExpense; //when add expense button is clicked run addExpense function

//Emtpy Array - Tell data to push to here too?
const categoryArray = [{}];
const priceArray = [
  { name: "Donuts", amount: 14, category: "Food" },
  { name: "Sushi", amount: 78, category: "Food" },
];

//testing arrays with data
/* const categoryArray = [{ name: "Peanuts", amount: 13, category: "Food" }];
const priceArray = [
  { name: "Donuts", amount: 14, category: "Food" },
  { name: "Sushi", amount: 78, category: "Food" },
]; */

console.log("sample array");
console.log(categoryArray);
console.log(`price array sample`);
console.log(priceArray);

function addExpense(event) {
  event.preventDefault();
  let expense = {
    //keep track of new expense name and expense amount
    name: nameInput.value,
    amount: amountInput.value,
    category: selObj.value,
  };
  console.log(`expense object print`);
  console.log(expense);

  categoryArray.push(expense); //pushes object expenses to categoryArray.
  console.log("dynamic categoryArray");
  console.log(categoryArray);
  var selectedCat = document.getElementById("category_input").value;

  //Icons next to data under Expense List
  let iconCreation = document.createElement("img");
  //take value of type of category and add in src of image and class name
  if (selectedCat === "Food") {
    iconCreation.src = "burger.png";
    iconCreation.className = "miniIcons";
  }

  {
    if (selectedCat === "Entertainment") {
      iconCreation.src = "cinema.png";
      iconCreation.className = "miniIcons";
    }

    if (selectedCat === "Clothes") {
      iconCreation.src = "clothing.png";
      iconCreation.className = "miniIcons";
    }

    if (selectedCat === "Bills") {
      iconCreation.src = "document.png";
      iconCreation.className = "miniIcons";
    }

    if (selectedCat === "Misc") {
      iconCreation.src = "misc.png";
      iconCreation.className = "miniIcons";
    }
  }

  //Icons and Data under Expense List 
  let newExpense = document.createElement("p"); // create unordered list - used to be create p tag element for new expense name and expense amount
  newExpense.classList.add("smallImage");
  newExpense.innerText =
    expense.category + " - " + expense.name + ": $" + expense.amount; //combine expense category, new expense name and expense amount
  expenseList.appendChild(newExpense); //add new expense category, expense and expense amount to expense list
  //newExpense.appendChild(iconCreation); //adds icon after newExpense
  expenseList.insertBefore(iconCreation, newExpense); //inserts image before created p element
  let expenseAmount = parseFloat(amountInput.value); //function parses a string argument and returns an integer
  expenseAmount = Math.round(expenseAmount * 100) / 100;
  amountInput.value = "";
  nameInput.value = "";
  selObj.value = "";
  /* catInput.value = ""; */

  expenses.push(expenseAmount); //add integer expense amount to declared expense [] array
  console.log(`original expense array`);
  console.log(expenses);
  updateExpenseTotal(); //call updateExpenseTotal function

  //Filters entered objects to display on those with Food as the category under image
  const foodFilterByCategory = (budgetArray) => {
    const fastFood = budgetArray.filter(
      (element) => element.category === "Food"
    );
    return fastFood;
  };
  console.log(`Fast Food options:`);
  console.log(foodFilterByCategory(categoryArray));

  //Filters entered objects to display on those with Entertainment as the category under image
  const entFilterByCategory = (budgetArray) => {
    const fastFun = budgetArray.filter(
      (element) => element.category === "Entertainment"
    );
    return fastFun;
  };
  console.log(`Entertainment options:`);
  console.log(entFilterByCategory(categoryArray));

  //Filters entered objects to display on those with Clothes as the category under image
  const fashsionFilterByCategory = (budgetArray) => {
    const fastFashion = budgetArray.filter(
      (element) => element.category === "Clothes"
    );
    return fastFashion;
  };
  console.log(`Fashion options:`);
  console.log(fashsionFilterByCategory(categoryArray));

  //Filters entered objects to display on those with Bills as the category under image
  const billsFilterByCategory = (budgetArray) => {
    const fastDebt = budgetArray.filter(
      (element) => element.category === "Bills"
    );
    return fastDebt;
  };
  console.log(`Bill options:`);
  console.log(billsFilterByCategory(categoryArray));

  //Filters entered objects to display on those with Misc as the category under image
  const miscFilterByCategory = (budgetArray) => {
    const oddsAndEnds = budgetArray.filter(
      (element) => element.category === "Misc"
    );
    return oddsAndEnds;
  };
  console.log(`Odds and Ends:`);
  console.log(miscFilterByCategory(categoryArray));

  //Food interger and uses reduce to return total of amount in Category array under image
  var mappedAmount = foodFilterByCategory(categoryArray).map(function (x) {
    const decimalNum = parseFloat(x.amount, 10);
    return Math.round(decimalNum * 100) / 100;
  });
  console.log(`parsed int filtered amt results`);
  console.log(mappedAmount);

  var amtFoodTotalExpenses = mappedAmount.reduce(function (prev, cur) {
    return prev + cur;
  }, 0);
  console.log(`reduce round 2`);
  console.log(amtFoodTotalExpenses);
  document.getElementById("food_expense").innerHTML =
    "$" + amtFoodTotalExpenses;

  //Entertainment interger and reduce to return total of amount in Category array under image
  var entMappedAmount = entFilterByCategory(categoryArray).map(function (x) {
    const decimalNum = parseFloat(x.amount, 10);
    return Math.round(decimalNum * 100) / 100;
  });
  console.log(`parsed int filtered amt results`);
  console.log(entMappedAmount);

  var amtEntTotalExpenses = entMappedAmount.reduce(function (prev, cur) {
    return prev + cur;
  }, 0);
  console.log(`reduce round 2`);
  console.log(amtEntTotalExpenses);
  document.getElementById("entertainment_expense").innerHTML =
    "$" + amtEntTotalExpenses;

  //Clothes interger and reduce to return total of amount in Category array under image
  var fashsionMappedAmount = fashsionFilterByCategory(categoryArray).map(
    function (x) {
      const decimalNum = parseFloat(x.amount, 10);
      return Math.round(decimalNum * 100) / 100;
    }
  );
  console.log(`parsed int filtered amt results`);
  console.log(fashsionMappedAmount);

  var amtFashionTotalExpenses = fashsionMappedAmount.reduce(function (
    prev,
    cur
  ) {
    return prev + cur;
  },
  0);
  console.log(`Reduce Fashion`);
  console.log(amtFashionTotalExpenses);
  document.getElementById("clothes_expense").innerHTML =
    "$" + amtFashionTotalExpenses;

  //Bills interger and reduce total of amount in Category array under image
  var debtMappedAmount = billsFilterByCategory(categoryArray).map(function (x) {
    const decimalNum = parseFloat(x.amount, 10);
    return Math.round(decimalNum * 100) / 100;
  });
  console.log(`parsed int filtered amt results`);
  console.log(debtMappedAmount);

  var amtdebtTotalExpenses = debtMappedAmount.reduce(function (prev, cur) {
    return prev + cur;
  }, 0);
  console.log(`Reduce Bills`);
  console.log(amtdebtTotalExpenses);
  document.getElementById("bill_expense").innerHTML =
    "$" + amtdebtTotalExpenses;

  //Misc. interger and reduce total of amount in Category array under image
  var miscMappedAmount = miscFilterByCategory(categoryArray).map(function (x) {
    const decimalNum = parseFloat(x.amount, 10);
    return Math.round(decimalNum * 100) / 100;
  });
  console.log(`parsed int filtered amt results`);
  console.log(miscMappedAmount);

  var amtMiscTotalExpenses = miscMappedAmount.reduce(function (prev, cur) {
    return prev + cur;
  }, 0);
  console.log(`Reduce Misc items`);
  console.log(amtMiscTotalExpenses);
  document.getElementById("misc_expense").innerHTML =
    "$" + amtMiscTotalExpenses;
}
