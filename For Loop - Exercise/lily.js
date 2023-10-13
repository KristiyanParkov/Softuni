function lily(input){
    let age = Number(input[0])
    let washing = Number(input[1])
    let toyPrice = Number(input[2])
    let toycount = 0;
    let money = 0;
    let evenCount = 0;
    let toyMoney = 0;

    for(i = 1; i<=age; i++){
        if(i%2==1){
            toycount++;
        } else {
            evenCount++;
            money += 10*evenCount
            money = money-1;
        }
    }
    toyMoney= toycount*toyPrice;
    money += toyMoney;

    if(money > washing){
        console.log(`Yes! ${(money-washing).toFixed(2)}`)
    } else {
        console.log(`No! ${(washing-money).toFixed(2)}`)
    }
}
lily(["10",

"170.00",

"6"])