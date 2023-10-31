function goldMine(input){

    let n = Number(input[0])

    let locations = 1;
    let index = 1;
    let command = Number(input[index])
    let expected = 0;
    let days = 0;
    let cycles = 1;
    let sum = 0;
    let avg = 0;

    while(locations<=n){
        expected += command;
        index++;
        command = Number(input[index])
        days += command;
        index++;
        command = Number(input[index])

        while(cycles<=days){
            sum+=command;
            index++;
            command=Number(input[index])
            cycles++;
        }

        avg = sum/days
        if(avg<expected){
            console.log(`You need ${(expected-avg).toFixed(2)} gold.`)
        } else {
            console.log(`Good job! Average gold per day: ${avg.toFixed(2)}.`)
        }
        sum=0;
        expected=0;
        cycles=1;
        days=0;
        locations++;
    }


}

