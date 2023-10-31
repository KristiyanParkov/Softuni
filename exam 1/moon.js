function moon(input){
    speed = Number(input[0])
    letres = Number(input[1])

    time = Math.ceil(768800/speed);
    alltime = time+3;
    fuel = letres*768800/100

    console.log(alltime)
    console.log(fuel)
}


