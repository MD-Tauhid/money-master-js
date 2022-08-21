function calculateCostAndSet(){
    // const totalIncome = parseFloat(document.getElementById('total-income').value);
    const foodCost = parseFloat(document.getElementById('food').value);
    const rentCost = parseFloat(document.getElementById('rent').value);
    const clothesCost = parseFloat(document.getElementById('clothes').value);
    const totalCost =foodCost + rentCost + clothesCost;

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalCost;
    return totalCost;
}

function availableBalance(totalExpenses){
    const balanceAvailable = document.getElementById('available-balance');
    const totalIncome = parseFloat(document.getElementById('total-income').value);
    const newBalanceAvailable = totalIncome - totalExpenses;

    balanceAvailable.innerText = newBalanceAvailable;
}

function calculateSavingsAndRemaining(){
    const totalIncome = parseFloat(document.getElementById('total-income').value);
    const wantSave = parseFloat(document.getElementById('saving').value);
    const save = totalIncome * (wantSave / 100);

    const balanceAvailable = parseFloat(document.getElementById('available-balance').innerText);
    const remainingBalance = balanceAvailable - save;

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = save;
    const remaining = document.getElementById('remaining-balance');
    remaining.innerText = remainingBalance;

}
// event handler
document.getElementById('calculate').addEventListener('click', function(){
    const totalExpenses = calculateCostAndSet();
    availableBalance(totalExpenses);
})

document.getElementById('btn-saving').addEventListener('click', function(){
    calculateSavingsAndRemaining();
})