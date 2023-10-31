function christmasGifts(input){
    let index = 0;
    let n = Number(input[index])
    let adults = 0;
    let kids = 0;

    while(n!="Christmas"){
        
        if(n<=16 && n>=0){
            kids++;
        } else if(n>16){
            adults++;
        }
        index++;
        n=(input[index])
    }
    let moneyForToys = kids*5;
    let moneyForSweaters = adults*15;
    console.log("Number of adults: " +adults)
    console.log("Number of kids: " +kids)
    console.log("Money for toys: " +moneyForToys)
    console.log("Money for sweaters: " +moneyForSweaters)
}




