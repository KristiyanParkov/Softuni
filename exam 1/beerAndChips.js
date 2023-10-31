function beerAndChips(input){

    let name = input[0]
    let budget = Number(input[1])
    let beers =  Number(input[2])
    let chips = Number(input[3])

    let beerPrice = beers*1.20;
    let chipsPrice = beerPrice*0.45;
    let finalChips = Math.ceil(chips*chipsPrice)
    let sum = finalChips + beerPrice;

    if(sum<=budget){
        console.log(`${name} bought a snack and has ${(budget-sum).toFixed(2)} leva left.`)
    } else{
        console.log(`${name} needs ${(sum-budget).toFixed(2)} more leva!`)
    }
}

