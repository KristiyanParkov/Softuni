function histogram(input) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let numCount = Number(input[0])

    for (let index = 1; index <= numCount; index++) {
        let currentNumber = Number(input[index])

        if (currentNumber < 200) {
            p1++;
        } else if (currentNumber <= 399) {
            p2++;
        } else if (currentNumber <= 599) {
            p3++;
        } else if (currentNumber <= 799) {
            p4++;
        } else {
            p5++;
        }
    }

    console.log(`${(p1 / numCount * 100).toFixed(2)}%`)
    console.log(`${(p2 / numCount * 100).toFixed(2)}%`)
    console.log(`${(p3 / numCount * 100).toFixed(2)}%`)
    console.log(`${(p4 / numCount * 100).toFixed(2)}%`)
    console.log(`${(p5 / numCount * 100).toFixed(2)}%`)

}