function godzilla(input){
    let budget = Number(input[0])
    let extras = Number(input[1])
    let clothesPrice = Number(input[2])
    let decor = budget*0.10;
    let totalClothes = extras*clothesPrice;
    
    
    if(extras>=150){
        totalClothes*=0.90;
    }
    let total = budget - (decor+totalClothes);
    let filmPrice = decor+totalClothes;
    if(budget>=filmPrice){
        console.log("Action!")
        console.log(`Wingard starts filming with ${total.toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(filmPrice-budget).toFixed(2)} leva more.`)
    }
    
}
godzilla(["9587.88",

"222",

"55.68"])