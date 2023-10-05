function lunchBreak(input){
    let name = input[0]
    let film = Number(input[1])
    let timeoff = Number(input[2])
    let eat = timeoff/8;
    let rest = timeoff/4;
    let timeLeft = timeoff - eat - rest;

    if(timeLeft>=film){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft-film)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(film-timeLeft)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",

"48",

"60"])