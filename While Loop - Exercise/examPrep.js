function examPrep(input){
    let badMarks = Number(input[0])
    let index = 1;
    let command = input[index]
    let counter = 0;
    let gradeSum = 0;
    let badGradeCount = 0;
    let lastProblem = "";

    while(badMarks>badGradeCount){

        if(command <=4){
            badGradeCount++;
            counter++
            gradeSum += Number(command);
            index++;
            command = input[index]
            continue;
        } else if(command>4) {
            counter++
            gradeSum += Number(command);
            index++;
            command = input[index]
            continue;
        }

        if(command === "Enough"){
            console.log("Average score: " + (gradeSum/counter).toFixed(2))
            console.log("Number of problems: " + counter)
            console.log("Last problem: " + lastProblem)
            break;
        }
        lastProblem = command;
        index++;
        command = input[index]
    }
    if(badGradeCount>=badMarks){
        console.log(`You need a break, ${badGradeCount} poor grades.`)
    }

}
