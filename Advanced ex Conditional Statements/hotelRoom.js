function hotelRoom(input){
    let month = input[0]
    let days = input[1]
    let appPrice = 0;
    let studPrice = 0;

    if(month === "May" || month === "October"){
        if(days > 7 && days <= 14){
            studPrice = days*50*0.95;
            appPrice = days*65;
        } else if (days > 14){
            studPrice = days*50*0.70;
            appPrice = days*65*0.90;
        } else {
            studPrice = days*50;
            appPrice = days*65;
        }
    } else if(month === "June" || month === "September"){
        if(days > 14){
            studPrice = days*75.20*0.80;
            appPrice = days*68.70*0.90;
        } else{
            studPrice = days*75.20;
            appPrice = days*68.70
        }
    } else if(month === "July" || month === "August"){
        if(days>14){
            studPrice = days*76;
            appPrice = days*77*0.90;
        } else{
            studPrice = days*76;
            appPrice = days*77
        }
    }
    console.log(`Apartment: ${(appPrice).toFixed(2)} lv.`)
    console.log(`Studio: ${(studPrice).toFixed(2)} lv.`)
}
