const inputName = document.querySelector("#nameIncome");
const inputAmount = document.querySelector("#amountIncome");
const ul = document.querySelector("#income-container");
let inputAmounts = 0;
const inputSum = document.querySelector("#input-sum");
let expenseAmounts = 0;
const expenseSum = document.querySelector("#expense-sum");
const btnAdd = document.querySelector(".btnAddIncome");
const expenseName = document.querySelector("#nameExpenses");
const expenseAmount = document.querySelector("#amountExpenses");
const expenseUl = document.querySelector("#expense-container");
const btnAddExpense = document.querySelector(".btnAddExpense");

const img = document.querySelector(".logo");

function updateBalanceSum() {
  const inputSum = Number(document.querySelector("#input-sum").innerText);
  const expenseSum = Number(document.querySelector("#expense-sum").innerText);
  const amountDifference = document.querySelector(".header-heading");

  const differenceSum = parseFloat(inputSum - expenseSum).toFixed(2);

  if (differenceSum > 0) {
    amountDifference.innerText = `Możesz jeszcze wydać ${differenceSum} złotych`;
    img.src = "./assets/money.jpg";
  } else if (differenceSum < 0) {
    amountDifference.innerText = `Bilans jest ujemny. Jesteś na minusie ${Math.abs(
      differenceSum
    )} złotych`;
    img.src = "./assets/empty wallet.png";
  } else {
    amountDifference.innerText = "Bilans wynosi 0 złotych";
    img.src = "./assets/money.jpg";
  }
}

inputAmount.addEventListener("change", (event) => {
  if (event.target.value <= 0) {
    alert("Podaj kwotę większą od 0");
    event.target.value = "";
  }
});

btnAdd.addEventListener("click", () => {
  const li = document.createElement("li");
  if (!inputName.value || Number(inputAmount.value) <= 0) {
    alert("Dwa pola powinny być uzupełnione");
    return;
  }
  let inputAmountEdited = inputAmount.value;

  const span = document.createElement("span");
  const spanAmount = document.createElement("span");
  spanAmount.textContent = parseFloat(inputAmount.value).toFixed(2);
  spanAmount.classList.add("amount");

  const spaceBetweenInputs = document.createElement("span");
  spaceBetweenInputs.classList.add("space");

  const spanValue = document.createElement("span");
  spanValue.textContent = inputName.value;

  span.appendChild(spanValue);
  span.appendChild(spaceBetweenInputs);
  span.appendChild(spanAmount);

  const btnEditIncome = document.createElement("button");
  btnEditIncome.textContent = "Edytuj";
  btnEditIncome.classList.add("editButton");
  const saveButton = document.createElement("button");
  saveButton.textContent = "Zapisz";
  saveButton.classList.add("hidden");

  btnEditIncome.addEventListener("click", () => {
    spanAmount.setAttribute("contenteditable", true);
    spanValue.setAttribute("contenteditable", true);

    btnEditIncome.classList.add("hidden");
    saveButton.classList.add("visible");
    saveButton.className = "editButton";
  });

  saveButton.addEventListener("click", () => {
    spanAmount.setAttribute("contenteditable", false);
    spanValue.setAttribute("contenteditable", false);
    btnEditIncome.classList.remove("hidden");
    saveButton.classList.remove("visible");
    saveButton.className = "hidden";

    const editedAmount = Number(spanAmount.textContent);
    const previousAmount = Number(inputAmountEdited);
    inputAmountEdited = editedAmount;

    inputAmounts = inputAmounts + editedAmount;
    inputAmounts = inputAmounts - previousAmount;
    inputSum.innerText = inputAmounts;

    updateBalanceSum();
  });

  const btnDeleteIncome = document.createElement("button");
  btnDeleteIncome.textContent = "Usuń";
  btnDeleteIncome.classList.add("deleteButton");

  li.appendChild(span);
  li.appendChild(btnEditIncome);
  li.appendChild(saveButton);
  li.appendChild(btnDeleteIncome);

  btnDeleteIncome.addEventListener("click", () => {
    console.log(inputAmounts);
    console.log(Number(spanAmount.innerText));
    inputAmounts = inputAmounts - Number(spanAmount.innerText);
    console.log(inputAmounts);
    inputSum.innerText = inputAmounts;
    li.remove();
    updateBalanceSum();
  });

  inputAmounts = inputAmounts + Number(Number(inputAmount.value).toFixed(2));
  inputSum.innerText = inputAmounts;

  inputName.value = "";
  inputAmount.value = "";

  ul.appendChild(li);
  updateBalanceSum();
});

expenseAmount.addEventListener("change", (event) => {
  if (event.target.value <= 0) {
    alert("Podaj kwotę większą od 0");
    event.target.value = "";
  }
});

btnAddExpense.addEventListener("click", () => {
  const li = document.createElement("li");
  if (!expenseName.value || Number(expenseAmount.value) <= 0) {
    alert("Dwa pola powinny być uzupełnione");
    return;
  }

  let expenseAmountEdited = expenseAmount.value;

  const span = document.createElement("span");
  const spanExpenseAmount = document.createElement("span");
  spanExpenseAmount.textContent = parseFloat(expenseAmount.value).toFixed(2);
  spanExpenseAmount.classList.add("amount");

  const spaceBetweenInputsExp = document.createElement("span");
  spaceBetweenInputsExp.classList.add("space");

  const spanExpenseValue = document.createElement("span");
  spanExpenseValue.textContent = expenseName.value;

  span.appendChild(spanExpenseValue);
  span.appendChild(spaceBetweenInputsExp);
  span.appendChild(spanExpenseAmount);

  const btnEditExpense = document.createElement("button");
  btnEditExpense.textContent = "Edytuj";
  btnEditExpense.classList.add("editButtonExp");
  const saveButtonExp = document.createElement("button");
  saveButtonExp.textContent = "Zapisz";
  saveButtonExp.classList.add("hidden");

  btnEditExpense.addEventListener("click", () => {
    spanExpenseAmount.setAttribute("contenteditable", true);
    spanExpenseValue.setAttribute("contenteditable", true);

    btnEditExpense.classList.add("hidden");
    saveButtonExp.classList.add("visible");
    saveButtonExp.className = "editButtonExp";
  });

  saveButtonExp.addEventListener("click", () => {
    spanExpenseAmount.setAttribute("contenteditable", false);
    spanExpenseValue.setAttribute("contenteditable", false);
    btnEditExpense.classList.remove("hidden");
    saveButtonExp.classList.remove("visible");
    saveButtonExp.className = "hidden";

    const editedExpense = Number(spanExpenseAmount.textContent);
    const previousExpense = Number(expenseAmountEdited);
    expenseAmountEdited = editedExpense;

    expenseAmounts = expenseAmounts + editedExpense;
    expenseAmounts = expenseAmounts - previousExpense;
    expenseSum.innerText = expenseAmounts;

    updateBalanceSum();
  });

  const btnDeleteExpense = document.createElement("button");
  btnDeleteExpense.textContent = "Usuń";
  btnDeleteExpense.classList.add("deleteButtonExp");

  li.appendChild(span);
  li.appendChild(btnEditExpense);
  li.appendChild(saveButtonExp);
  li.appendChild(btnDeleteExpense);

  btnDeleteExpense.addEventListener("click", () => {
    expenseAmounts =
      expenseAmounts - Number(Number(spanExpenseAmount.innerText).toFixed(2));
    expenseSum.innerText = expenseAmounts;
    li.remove();
    updateBalanceSum();
  });

  expenseAmounts =
    expenseAmounts + Number(Number(expenseAmount.value).toFixed(2));
  expenseSum.innerText = expenseAmounts;

  expenseName.value = "";
  expenseAmount.value = "";

  expenseUl.appendChild(li);
  updateBalanceSum();
});
