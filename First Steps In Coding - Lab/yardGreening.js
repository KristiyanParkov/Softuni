function yardGreening(input){
    let fullPrice = Number(input[0]*7.61)
    let discount = Number(fullPrice*0.18)
    let newPrice = Number(fullPrice-discount)
    console.log(`The final price is: ${newPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening([550])