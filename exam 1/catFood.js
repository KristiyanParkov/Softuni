function catFood(input){
    let n = Number(input[0])
    let index = 1
    let grams = Number(input[index])
    let group1 = 0
    let group2 = 0;
    let group3 = 0;
    let sum = 0;

    while(index<=n){
        if(grams >= 100 && grams < 200){
            group1++;
            sum+=grams;
        } else if(grams >= 200 && grams < 300){
            group2++;
            sum+=grams;
        } else if(grams >= 300 && grams <400){
            group3++;
            sum+=grams
        }
        index++;
        grams = Number(input[index])
    }

    let price = sum/1000*12.45
    console.log(`Group 1: ${group1} cats.`)
    console.log(`Group 2: ${group2} cats.`)
    console.log(`Group 3: ${group3} cats.`)
    console.log(`Price for food per day: ${(price).toFixed(2)} lv.`)

} 


