function santasHoliday(input){
    let days = Number(input[0])
    let roomType = input[1]
    let rating = input[2]
    let nights = days - 1;
    let price = 0;

    if(nights<10){
        if(roomType === "room for one person"){
            price = nights*18.00;
        } else if(roomType==="apartment"){
            price = nights*25.00*0.70;
        } else if(roomType==="president apartment"){
            price = nights*35.00*0.90;
        }
    } if(nights >= 10 && nights <= 15){
        if(roomType === "room for one person"){
            price = nights*18.00;
        } else if(roomType==="apartment"){
            price = nights*25.00*0.65;
        } else if(roomType==="president apartment"){
            price = nights*35.00*0.85;
        }
    } if(nights > 15){
        if(roomType === "room for one person"){
            price = nights*18.00;
        } else if(roomType==="apartment"){
            price = nights*25.00*0.50;
        } else if(roomType==="president apartment"){
            price = nights*35.00*0.80;
        }
    }

    if(rating==="positive"){
        price = price * 1.25;
    } else if(rating==="negative"){
        price = price * 0.90;
    }

    console.log(price.toFixed(2))
}

