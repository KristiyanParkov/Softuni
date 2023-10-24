function specialNumber(input){
    let n = Number(input[0])
    let digitOfOnes = 0;
    let digitOfTens = 0;
    let digitOfHundreds = 0;
    let digitOfThousands = 0;
    let buff = "";
    for (i = 1111; i <= 9999; i++)
    {
        digitOfThousands = (i - (i % 1000))/1000;
        digitOfHundreds = (i%1000 - i%100)/100;
        digitOfTens = ((i%100) - (i%10))/10;
        digitOfOnes = i % 10;
        if (n % digitOfOnes == 0 && n % digitOfTens == 0 && n % digitOfHundreds == 0 && n % digitOfThousands == 0)
        {
            buff += i + " ";
            
        }
    }
    console.log(buff);
}
specialNumber(["3"])