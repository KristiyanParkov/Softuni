function forLoopDemo(input) {
 
    let lilisAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
 
    let toysCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let evenCount = 1;
 
    for (let currentBday = 1; currentBday <= lilisAge; currentBday++) {
 
        if (currentBday % 2 === 0) {
            savedMoney += 10*evenCount;
            stolenMoney++;
            evenCount++;
        } else {
            toysCounter++;
        }
    }
    let totalMoneyFromToys = toysCounter * toyPrice;
    let totalSavedMoney = totalMoneyFromToys + savedMoney - stolenMoney;
 
    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
 
}
forLoopDemo(["10",
    "170.00",
    "6"])