function bonusScore(input){
    let points = Number(input[0])
    let bonusPoints = 0.0;
    if(points>1000){
        bonusPoints = points*0.10;
    } else if (points>100){
        bonusPoints = points*0.20;
    } else {
        bonusPoints = 5;
    }
    
    if(points%2==0){
        bonusPoints+=1;
    }
    if(points%10 === 5){
        bonusPoints+=2;
    }
    console.log(bonusPoints)
    console.log(points += bonusPoints)
}