function exam(input){
    let students = Number(input[0])
    let index = 1
    let mark = input[index]
    let fail = 0;
    let mid = 0;
    let good = 0;
    let top = 0;
    let sumGrade = 0;

    while(index!==students+1){
        if(mark < 3){
            fail++;
            sumGrade+=Number(input[index])
            index++
            mark = input[index]
        } else if(mark >= 3 && mark < 4){
            mid++;
            sumGrade+=Number(input[index])
            index++
            mark = input[index]
        } else if(mark >=4 && mark <5){
            good++;
            sumGrade+=Number(input[index])
            index++
            mark = input[index]
        } else if(mark >=5){
            top++;
            sumGrade+=Number(input[index])
            index++
            mark = input[index]
        }
    }

    console.log(`Top students: ${(top/students*100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(good/students*100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(mid/students*100).toFixed(2)}%`)
    console.log(`Fail: ${(fail/students*100).toFixed(2)}%`)
    console.log(`Average: ${(sumGrade/students).toFixed(2)}`)
}
