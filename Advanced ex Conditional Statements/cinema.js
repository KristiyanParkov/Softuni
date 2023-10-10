function cinema(input){
    let type = input[0]
    let row = Number(input[1])
    let column = Number(input[2])
    let income = 0;

    if(type === "Premiere"){
        income = row * column * 12.0;
    } else if(type === "Normal"){
        income = row * column * 7.50;
    } else if ( type === "Discount"){
        income = row * column * 5.00;
    }
    console.log(`${income} leva`)
}