function sumDigits(a){
    let numAsString = String(a)

    let sum = 0;

    for(let i=0; i < numAsString.length; i++){
        sum+= Number(numAsString[i])
    }

    console.log(sum);
}