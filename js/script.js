//Function For Invput Value
function getInputValue(value) {

    const inputValue = document.getElementById(value);
    const inputValueText = inputValue.value;
    const nameValueAmmount = parseFloat(inputValueText);
    return nameValueAmmount;
}
//Function For calculate Value
function calculateTotal() {
    const income = getInputValue("income-input");
    const food = getInputValue("food-input");
    const rent = getInputValue("rent-input");
    const cloths = getInputValue("cloths-input");
    const failError = document.getElementById('notify-fail');
    const incomeError = document.getElementById('balance-fail');
    //Error Handleing Part
    if (income < 0) {
        //alert("please enter a positive number");
        failError.style.display = "block";
        alert("Please Enter a positive number in your Food field.")
    }
    else if (food < 0) {
        failError.style.display = "block";
        alert("Please Enter a positive number in your Food field.")
    }
    else if (rent < 0) {
        failError.style.display = "block";
        alert("Please Enter a positive number in your Rent field.")
    }
    else if (cloths < 0) {
        failError.style.display = "block";
        alert("Please Enter a positive number in your Cloths field.")
    }
    else {
        const totalExpense = food + rent + cloths;
        const balance = income - totalExpense;
        //Error Handle through income and Expenses
        if (totalExpense > income) {
            incomeError.style.display = "block";

        }
        else {
            document.getElementById("expenses-balance").innerText = totalExpense;
            document.getElementById("total-balance").innerText = balance;
        }
    }


}
//Calculate Save Total
function calculateSaveTotal() {
    const income = getInputValue("income-input");
    const food = getInputValue("food-input");
    const rent = getInputValue("rent-input");
    const cloths = getInputValue("cloths-input");
    const save = getInputValue("save-input");
    //Error Handle negative value & compare Main balance and saving balance.
    if (save < 0) {
        const saveError = document.getElementById('save-error');
        saveError.style.display = "block";
    }
    else {
        const totalExpense = food + rent + cloths;
        const balance = income - totalExpense;
        const saveBalance = income * (save / 100);
        const remainingBalance = balance - saveBalance;
        if (saveBalance > balance) {
            const failError = document.getElementById('save-fail');
            failError.style.display = "block";
        }
        else {
            document.getElementById("saving-balance").innerText = saveBalance;
            document.getElementById("remaining-balance").innerText = remainingBalance;
        }
    }


}
//Even listner add calculate button

document.getElementById("calculate-button").addEventListener("click", function () {
    calculateTotal();
});
//Even listner add Save button
document.getElementById("save-balance").addEventListener("click", function () {
    calculateSaveTotal();
})