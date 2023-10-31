function sumAndProduct(input){
    let n = Number(input[0])
    isTrue = false;   

    for(let a = 1; a<9; a++){

        for(let b = 9; b>a; b--){
            if(isTrue){
                break;
            }
            for(let c = 0; c<9; c++){
                if(isTrue){
                    break;
                }
                for(let d = 9; d>c; d--){
                    if(isTrue){
                        break;
                    }
                    if(a+b+c+d === a*b*c*d && n%10 === 5){
                        console.log(`${a}${b}${c}${d}`)
                        isTrue = true;
                        break;
                    } else if((a*b*c*d)/(a+b+c+d) === 3 && n%3 === 0){
                        console.log(`${d}${c}${b}${a}`)
                        isTrue = true;
                        break;
                    }
                }
            }
        }
    }
    if(isTrue === false){
        console.log("Nothing found")
    }
}
sumAndProduct(["123"])