function pastryShop(input){
    let sweet = input[0]
    let count = Number(input[1])
    let day = Number(input[2])
    let price = 0;

    if(day <= 15){
        if(sweet==="Cake"){
            price = count*24;
           if(price<201 && price>99){
            price*=0.85;
           } 
           if(price>200){
            price*=0.75;
           }
           price*=0.90;
        } else if(sweet==="Souffle"){
             price = count*6.66;
           if(price<201 && price>99){
            price*=0.85;
           } 
           if(price>200){
            price*=0.75;
           }
           price*=0.90;

        } else if(sweet==="Baklava"){
             price = count*12.60;
           if(price<201 && price>99){
            price*=0.85;
           } 
           if(price>200){
            price*=0.75;
           }
           price*=0.90;
        }
    } else if(day <=22 && day >15){
        if(sweet==="Cake"){
             price = count*28.70;
            if(price<201 && price>99){
             price*=0.85;
            } 
            if(price>200){
             price*=0.75;
            }
            
         } else if(sweet==="Souffle"){
              price = count*9.80;
            if(price<201 && price>99){
             price*=0.85;
            } 
            if(price>200){
             price*=0.75;
            }
            ;
 
         } else if(sweet==="Baklava"){
              price = count*16.98;
            if(price<201 && price>99){
             price*=0.85;
            } 
            if(price>200){
             price*=0.75;
            }
            
         }

    } else if(day > 22){
        if(sweet==="Cake"){
            price = count*28.70
        } else if(sweet==="Souffle"){
            price=count*9.80;
        } else if(sweet === "Baklava"){
            price=count*16.98;
        }
    }

    console.log((price).toFixed(2))
}



