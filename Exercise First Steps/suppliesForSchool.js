function supplies(input){
    let pens = Number(input[0])
    let markers = Number(input[1])
    let liters = Number(input[2])
    let discount = Number(input[3])

    let pensSum = pens*5.80
    let markersSum = markers*7.20
    let litersSum = liters*1.20

    let sum = pensSum + markersSum + litersSum
    let final = sum - (discount/100*sum)

    console.log(final)
}

supplies(["2", "3", "4", "25"])
