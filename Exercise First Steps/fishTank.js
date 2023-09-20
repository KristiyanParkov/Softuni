function fishTank(input){
    let lenght = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percent = Number(input[3])

    let tank = lenght * width * height;
    let cmLiters = tank/1000;

    let total = cmLiters * (1-(percent)/100)

    console.log(total)
}