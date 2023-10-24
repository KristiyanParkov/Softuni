function primeNonPrime(input){
    let index = 0;
    let SumPrime = 0;
    let SumNonPrime = 0;

    let command = input[index]
    index++;

    while(command!=="stop"){
        let num = Number(command)

        if(num<0){
            console.log("Number is negative.")
            command = input[index]
            index++;
            continue;
        }

        if(num == 1){
            SumPrime += num
            command = input[index]
            index++;
            continue;
        }
        let isPrime = true;

        for(let i =2 ; i < num; i++){
            if(num%i === 0){
                isPrime=false;
                break;
            }
        }

        if(isPrime){
            SumPrime += num
        } else{
            SumNonPrime += num
        }

        command = input[index]
        index++

    }

    console.log("Sum of all prime numbers is: " + SumPrime)
    console.log("Sum of all non prime numbers is: " + SumNonPrime)
}
primeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])