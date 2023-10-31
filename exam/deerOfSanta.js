function deerOfSanta(input){
    let days = Number(input[0])
    let food = Number(input[1])
    let deer1 = Number(input[2])
    let deer2 = Number(input[3])
    let deer3 = Number(input[4])

    let eat1 = days * deer1;
    let eat2 = days * deer2;
    let eat3 = days * deer3;
    let total = eat1 + eat2 + eat3;

    if(total <= food){
        console.log(`${Math.floor(food-total)} kilos of food left.`)
    } else{
        console.log(`${Math.ceil(total-food)} more kilos of food are needed.`)
    }
}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])


