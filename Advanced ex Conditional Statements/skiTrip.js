function skiTrip(input){
    let days = Number(input[0])
    let room = input[1]
    let rating = input[2]
    let nights = days-1;
    let price = 0;

    if(nights<10){
        if(room==="room for one person"){
            price = nights*18.00;
        } else if(room === "apartment"){
            price = nights*25.00*0.70;
        } else if(room === "president apartment"){
            price = nights*35.00*0.90;
        }
    } else if(nights >=10 && nights <=15){
        if(room==="room for one person"){
            price = nights*18.00;
        } else if(room === "apartment"){
            price = nights*25.00*0.65;
        } else if(room === "president apartment"){
            price = nights*35.00*0.85;
        }
    } else if(nights > 15){
        if(room==="room for one person"){
            price = nights*18.00;
        } else if(room === "apartment"){
            price = nights*25.00*0.50;
        } else if(room === "president apartment"){
            price = nights*35.00*0.80;
        }
    }

    if(rating === "positive"){
        price = price*1.25;
    } else if(rating === "negative"){
        price = price*0.90;
    }

    console.log(price.toFixed(2));
}
