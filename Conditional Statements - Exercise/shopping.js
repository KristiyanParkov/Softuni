function shopping(input){
    let budget = Number(input[0])
    let gpu = Number(input[1])
    let cpu = Number(input[2])
    let ram = Number(input[3])

    let gpuPrice = gpu*250;
    let cpu1Price = gpuPrice*0.35;
    let cpuPrice = cpu1Price*cpu;
    let ram1Price = gpuPrice*0.10;
    let ramPrice = ram1Price*ram;
    let finalPrice = gpuPrice + cpuPrice + ramPrice;

    if(gpu>cpu){
        finalPrice*=0.85;
    }
    if(budget>= finalPrice){
        console.log(`You have ${(budget-finalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(finalPrice-budget).toFixed(2)} leva more!`)
    }
}
shopping(["920.45",

"3",

"1",

"1"])