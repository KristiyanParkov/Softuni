function foodDelivery(input){
    let chickenMenu = Number(input[0])
    let fishMenu = Number(input[1])
    let veggieMenu = Number(input[2])

    let chickenPrice = chickenMenu * 10.35;
    let fishPrice = fishMenu * 12.40;
    let veggiePrice = veggieMenu * 8.15;
    let deliveryPrice = 2.50;

    let totalMenu = chickenPrice + fishPrice + veggiePrice;
    let dessert = totalMenu * 0.20;
    let total = totalMenu + dessert + deliveryPrice;

    console.log(total)

}