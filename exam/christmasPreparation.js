function christmasPreparation(input){
    let paper = Number(input[0])
    let leather = Number(input[1])
    let glue = Number(input[2])
    let discout = Number(input[3])

    let paperPrice = paper * 5.80;
    let leatherPrice = leather * 7.20;
    let gluePrice = glue * 1.20;
    let total = paperPrice + leatherPrice + gluePrice;
    let final = total - (total * discout / 100);
    console.log(final.toFixed(3));
}
christmasPreparation(["7", "8", "0.5", "45"])