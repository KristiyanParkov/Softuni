function toyShop(input){
    let tripPrice = Number(input[0])
    let puzzles = Number(input[1])
    let dolls = Number(input[2])
    let bears = Number(input[3])
    let minions = Number(input[4])
    let trucks = Number(input[5])

    let puzzlePrice = puzzles*2.60;
    let dollPrice = dolls*3;
    let bearPrice = bears*4.10;
    let minionPrice = minions*8.20;
    let truckPrice = trucks*2;

    let toyCount = puzzles + dolls + bears + minions + trucks;
    let toyPrice = puzzlePrice + dollPrice + bearPrice + minionPrice + truckPrice;

    if(toyCount>=50){
        toyPrice*=0.75;
    }
    toyPrice*=0.90;

    if(toyPrice>=tripPrice){
        console.log(`Yes! ${(toyPrice-tripPrice).toFixed(2)} lv left.`)
    } else{
        console.log(`Not enough money! ${(tripPrice-toyPrice).toFixed(2)} lv needed.`)
    }
}
toyShop(["320", "8", "2", "5", "5", "1"])