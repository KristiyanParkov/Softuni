function bestPlayer(input){
    let bestPlayer = input[0]
    let bestGoals = Number(input[1])

    let index = 2;
    let name = input[index]
    let goals = input[index];
    
    let command = input[index]

    while(command!=="END"){
        name = input[index]
        index++;
        goals = Number(input[index])
        if(goals>bestGoals){
            bestGoals=goals;
            bestPlayer=name;
        } if(goals >=10){
            break
        }
        index++
        command = input[index]
    }

    console.log(`${bestPlayer} is the best player!`)
    if(bestGoals>2){
    console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`)
    } else{
        console.log(`He has scored ${bestGoals} goals.`)
    }
} bestPlayer(["Zidane",
"1",
"Felipe",
"2",
"Johnson",
"4",
"END"])




