function fishingBoat(input){
    let budget = Number(input[0])
    let season = input[1]
    let fishers = input[2]
    let price = 0;

    if(season==="Spring"){
        price = 3000;
        if(fishers<=6){
            price *= 0.90
        } else if(fishers > 6 && fishers <= 11){
            price *= 0.85
        } else{
            price *= 0.75
        }
    } else if(season === "Summer" || season === "Autumn"){
        price = 4200;
        if(fishers<=6){
            price *= 0.90
        } else if(fishers > 6 && fishers <= 11){
            price *= 0.85
        } else{
            price *= 0.75
        }
    } else if(season === "Winter"){
        price = 2600
        if(fishers<=6){
            price *= 0.90
        } else if(fishers > 6 && fishers <= 11){
            price *= 0.85
        } else{
            price *= 0.75
        }
    }

    if(fishers%2==0 && season !== "Autumn"){
        price *= 0.95;
    }

    if(budget>=price){
        console.log(`Yes! You have ${(budget-price).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(price-budget).toFixed(2)} leva.`)
    }
}