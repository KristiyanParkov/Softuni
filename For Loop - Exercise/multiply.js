function multiply(input){
    let n = Number(input[0])

    for(i=1; i<=10; i++){
        console.log(`${i} * ${n} = ${i*n}`)
    }
}
multiply(["5"])