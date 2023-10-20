function coins(input){
    let change = Number(input[0])
    let inCoins = Math.floor(change*100);

    let coinsCounter = 0;

    while(coins>0){

        if(coins >=200){
            inCoins -= 200;
            coinsCounter++;
        }else if(coins>=100){
            inCoins -= 100;
            coinsCounter++;
        }else if(coins>=50){
            inCoins -= 50;
            coinsCounter++;
        }else if(coins>=20){
            inCoins -= 20;
            coinsCounter++;
        }else if(coins>=10){
            inCoins -= 10;
            coinsCounter++;
        }else if(coins>=5){
            inCoins -= 5;
            coinsCounter++;
        }else if(coins>=2){
            inCoins -= 2;
            coinsCounter++;
        }else if(coins>=1){
            inCoins -= 1;
            coinsCounter++;
        }

    }
    console.log(coinsCounter)
}