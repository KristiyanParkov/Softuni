function vacation(input){
    let pages = Number(input[0])
    let pPH = Number(input[1])
    let days = Number(input[2])

    let neededTime = pages / pPH;
    let hoursPerDay = neededTime / days;

    console.log(hoursPerDay)
}

