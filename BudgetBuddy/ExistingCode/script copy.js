// console.log("Hello");

//selectors
let updateBudgetButton = document.querySelector('#update_budget_button');
let addExpensiveButton = document.querySelector('#add_expense_button');
let monthlyBudget = document.querySelector('#monthly_budget');
let incomeInput = document.querySelector('#income_input');
let remainingBalance = document.querySelector('#remaining_balance');
let amountInput = document.querySelector('#amount_input');
let nameInput = document.querySelector('#name_input');
let expenseList = document.querySelector('#expense_list');
let totalExpenses = document.querySelector('#total_expenses');


//events
updateBudgetButton.onclick = updateBudget;
addExpensiveButton.onclick = addExpense;


//variables
let monthlyIncome = 0;
let expenses = [];
let expenseTotal = 0;
let balance = 0;


//functions
function updateBudget(event) {
    event.preventDefault();
    monthlyIncome = incomeInput.value;
    monthlyBudget.innerText = '$' + monthlyIncome;
    updateBalance();    
}


//test your updateBudget function
function updateBalance() {
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = '$' + balance;
    if(balance < 0) {
        remainingBalance.classList.remove('green');
        remainingBalance.classList.add('red');
    } else {
        remainingBalance.classList.remove('red');
        remainingBalance.classList.add('green');
    }
}

//test your updateBalance functions
function addExpense(event) {
    event.preventDefault();
    let expense = {
        name: nameInput.value,
        amount: amountInput.value
    };
    let newExpense = document.createElement('p');
    newExpense.innerText = expense.name + ': $' + expense.amount;
    expenseList.appendChild(newExpense);
    let expenseAmount = parseInt(amountInput.value);
    amountInput.value = '';
    nameInput.value = '';
    expenses.push(expenseAmount);
    updateExpenseTotal();
}

//test your addExpense function
    function updateExpenseTotal() {
        expenseTotal = 0;
        for (let i = 0; i < expenses.length; i++){
            expenseTotal = expenseTotal + expenses [i];
        }
        totalExpenses.innerText = '$' + expenseTotal;
        updateBalance();
    }