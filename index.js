const inputName = document.querySelector("#nameIncome");
const inputAmount = document.querySelector("#amountIncome");
const ul = document.querySelector("#income-container");
let inputAmounts = 0;
const inputSum = document.querySelector("#input-sum");
let expenseAmounts = 0;
const expenseSum = document.querySelector("#expense-sum");

const img = document.querySelector(".logo");

function updateBalanceSum() {
  const inputSum = Number(document.querySelector("#input-sum").innerText);
  const expenseSum = Number(document.querySelector("#expense-sum").innerText);
  const amountDifference = document.querySelector(".header-heading");
  const differenceSum = inputSum - expenseSum;
  if (differenceSum > 0) {
    amountDifference.innerText = `Możesz jeszcze wydać ${differenceSum} złotych`;
  } else if (differenceSum < 0) {
    amountDifference.innerText = `Bilans jest ujemny. Jesteś na minusie ${Math.abs(
      differenceSum
    )} złotych`;
  } else {
    amountDifference.innerText = "Bilans wynosi 0 złotych";
  }
}

inputAmount.addEventListener("change", (event) => {
  if (event.target.value <= 0) {
    alert("Podaj kwotę większą od 0");
    event.target.value = "";
  }
});

const btnAdd = document.querySelector(".btnAddIncome");

btnAdd.addEventListener("click", () => {
  const li = document.createElement("li");
  if (!inputName.value || Number(inputAmount.value) <= 0) {
    alert("Dwa pola powinny być uzupełnione");
    return;
  }
  inputAmounts = inputAmounts + Number(inputAmount.value);
  inputSum.innerText = inputAmounts;

  const span = document.createElement("span");
  const spanAmount = document.createElement("span");
  spanAmount.textContent = inputAmount.value;
  spanAmount.classList.add("amount");
  spanAmount.setAttribute("contenteditable", true);
  const spanValue = document.createElement("span");
  spanValue.textContent = inputName.value;
  spanValue.setAttribute("contenteditable", true);

  span.appendChild(spanValue);
  span.appendChild(spanAmount);

  const btnEditIncome = document.createElement("button");
  btnEditIncome.textContent = "Edytuj";
  const btnDeleteIncome = document.createElement("button");
  btnDeleteIncome.textContent = "Usuń";

  li.appendChild(span);
  li.appendChild(btnEditIncome);
  li.appendChild(btnDeleteIncome);

  span.addEventListener("input", (event) => {
    setIncomeAmount = (inputAmount, event);
  });

  btnDeleteIncome.addEventListener("click", () => {
    inputAmounts = inputAmounts - Number(spanAmount.innerText);
    inputSum.innerText = inputAmounts;
    li.remove();
    updateBalanceSum();
  });

  ul.appendChild(li);
  updateBalanceSum();
});

const expenseName = document.querySelector("#nameExpenses");
const expenseAmount = document.querySelector("#amountExpenses");
const expenseUl = document.querySelector("#expense-container");

expenseAmount.addEventListener("change", (event) => {
  if (event.target.value <= 0) {
    alert("Podaj kwotę większą od 0");
    event.target.value = "";
  }
});

const btnAddExpense = document.querySelector(".btnAddExpense");

btnAddExpense.addEventListener("click", () => {
  const li = document.createElement("li");
  if (!expenseAmount.value || Number(expenseName.value) <= 0) {
    alert("Dwa pola powinny być uzupełnione");
    return;
  }
  expenseAmounts = expenseAmounts + Number(expenseAmount.value);
  expenseSum.innerText = expenseAmounts;

  const span = document.createElement("span");
  const spanExpenseAmount = document.createElement("span");
  spanExpenseAmount.textContent = expenseAmount.value;
  spanExpenseAmount.classList.add("amount");
  spanExpenseAmount.setAttribute("contenteditable", true);
  const spanExpenseValue = document.createElement("span");
  spanExpenseValue.textContent = expenseName.value;
  spanExpenseValue.setAttribute("contenteditable", true);

  span.appendChild(spanExpenseValue);
  span.appendChild(spanExpenseAmount);

  const btnEditExpense = document.createElement("button");
  btnEditExpense.textContent = "Edytuj";
  const btnDeleteExpense = document.createElement("button");
  btnDeleteExpense.textContent = "Usuń";

  li.appendChild(span);
  li.appendChild(btnEditExpense);
  li.appendChild(btnDeleteExpense);

  btnDeleteExpense.addEventListener("click", () => {
    expenseAmounts = expenseAmounts - Number(spanExpenseAmount.innerText);
    expenseSum.innerText = expenseAmounts;
    li.remove();
    updateBalanceSum();
  });

  expenseUl.appendChild(li);
  updateBalanceSum();
});
