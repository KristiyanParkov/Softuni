function exam(input){
    let hoursExam = Number(input[0])
    let minutesExam = Number(input[1])
    let hoursArrive = Number(input[2])
    let minutesArrive = Number(input[3])

    let timeExam = hoursExam * 60 + minutesExam;
    let timeArrive = hoursArrive * 60 + minutesArrive;

    let time = Math.abs(timeExam-timeArrive);
    let h = Math.floor(time/60)
    let min = time % 60
    if(timeArrive < timeExam && (timeExam - timeArrive > 30)){
        console.log("Early");
        
        
        if(h>0){
            if (min<10){
                console.log(`${h}:0${min} hours before the start`)
            } else{
                console.log(`${h}:${min} hours before the start`)
            }
        } else {
            console.log(`${min} minutes before the start`)
        }
    } else if (timeArrive <= timeExam){
        console.log("On time")
        let min = time % 60;
        if (min > 0){
            console.log(`${min} minutes before the start`)
        }
    } else {
        console.log("Late")
        if (h>0){
            if (min<10){
                console.log(`${h}:0${min} hours after the start`)
            } else{
                console.log(`${h}:${min} hours after the start`)
            }
        } else {
            console.log(`${min} minutes after the start`)
        }
    }
}