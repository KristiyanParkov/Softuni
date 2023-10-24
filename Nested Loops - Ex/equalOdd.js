function equalOdd(input){
    let start = Number(input[0])
    let end = Number(input[1])
    let buff = "";

    for(let i = start; i<= end; i++){
        let numAsString = String(i);
        let sumEven = 0;
        let sumOdd = 0;

        for(let charPosition = 0; charPosition < numAsString.length; charPosition++){
            if(charPosition%2 === 0){
                sumEven += Number(numAsString[charPosition]);
            } else{
                sumOdd += Number(numAsString[charPosition]);
            }             
        }
        if(sumEven === sumOdd){
            buff += numAsString + " "
        }
    }
    console.log(buff)
}
equalOdd(["100000", "100050"])