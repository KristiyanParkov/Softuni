function deposit(input){
    let depositSum = Number(input[0])
    let period = Number(input[1])
    let annual = Number(input[2])

    let final = depositSum + period * ((depositSum * annual/100) / 12)

    console.log(final)
}

deposit(["200", "3", "5.7"])
