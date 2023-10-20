function walking(input){

    let targetSteps = 10000;
    let stepSum = 0;
    let index = 0;
    let row = input[index];

    while(row!="Going home"){
        let steps = Number(row);
        stepSum += steps;

        if(stepSum >= targetSteps){
            console.log("Goal reached! Good job!");
            console.log(`${stepSum - targetSteps} steps over the goal!`);
            break;
        }
        index++
        row = input[index];
    }

    if(row === "Going home"){
        let stepsToHome = Number(input[index+1])
        stepSum +=stepsToHome;

        if(stepSum >= targetSteps){
            console.log("Goal reached! Good job!");
            console.log(`${stepSum - targetSteps} steps over the goal!`);
            
        } else{
            console.log(`${targetSteps - stepSum} more steps to reach goal.`)
        }
    } 
}