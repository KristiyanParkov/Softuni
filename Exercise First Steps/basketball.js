function basketball(input){
    let tax = Number(input[0])
    let shoes = tax*0.60;
    let clothes = shoes*0.80;
    let ball = clothes/4;
    let other = ball/5;
    let total = tax + clothes + shoes + ball + other;

    console.log(total)
}