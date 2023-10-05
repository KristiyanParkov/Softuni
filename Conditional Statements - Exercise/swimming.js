function swimming(input){
    let record = Number(input[0])
    let distance = Number(input[1])
    let speed = Number(input[2])
    let ogtime = speed*distance;
    let delay =Math.floor(distance/15)*12.5
    let finalTime = delay + ogtime;

    if(finalTime>=record){
        console.log(`No, he failed! He was ${(finalTime-record).toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`)
    }
}
swimming(["55555.67","3017","5.03"])