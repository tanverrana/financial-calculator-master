function getInputValue(value) {

    const inputValue = document.getElementById(value);
    const inputValueText = inputValue.value;
    const nameValueAmmount = parseFloat(inputValueText);
    return nameValueAmmount;
}
function calculateTotal() {
    const income = getInputValue("income-input");
    if (income < 0) {
        console.log("please Input Valid Number");
    }
    const food = getInputValue("food-input");
    const rent = getInputValue("rent-input");
    const cloths = getInputValue("cloths-input");
    const totalExpense = food + rent + cloths;
    const balance = income - totalExpense;
    document.getElementById("expenses-balance").innerText = totalExpense;
    document.getElementById("total-balance").innerText = balance;


}
function calculateSaveTotal() {
    const income = getInputValue("income-input");
    const food = getInputValue("food-input");
    const rent = getInputValue("rent-input");
    const cloths = getInputValue("cloths-input");
    const save = getInputValue("save-input");
    const totalExpense = food + rent + cloths;
    const balance = income - totalExpense;
    const saveBalance = income * (save / 100);
    const remainingBalance = balance - saveBalance;
    document.getElementById("saving-balance").innerText = saveBalance;
    document.getElementById("remaining-balance").innerText = remainingBalance;
}

document.getElementById("calculate-button").addEventListener("click", function () {
    calculateTotal();
});
document.getElementById("save-balance").addEventListener("click", function () {
    calculateSaveTotal();
})