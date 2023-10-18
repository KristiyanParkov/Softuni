function minNumber(input){
    let index = 0;
    let min = Number.MAX_SAFE_INTEGER;

    let command = input[index]
    index++;

    while(command!=="Stop"){
        let num = Number(command)

        if(min > num){
            min = num
        }

        command = input[index]
        index++;
    }
    console.log(min)
}