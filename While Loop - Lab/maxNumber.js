function maxNumber(input){
    let index = 0;
    let max = Number.MIN_SAFE_INTEGER;

    let command = input[index]
    index++;

    while(command!=="Stop"){
        let num = Number(command)

        if(max < num){
            max = num
        }

        command = input[index]
        index++;
    }
    console.log(max)
}