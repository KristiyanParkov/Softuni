function areaofFigures(input){
    let shape = input[0];
    let result = 0;
    if(shape === "square"){
        let a = Number(input[1])
        result = a*a;
    } else if (shape === "rectangle"){
        let a = Number(input[1])
        let b = Number(input[2])
        result = a*b;
    } else if (shape === "circle"){
        let r = Number(input[1])
        result = Math.PI * Math.pow(r, 2)
    } else if (shape === "triangle"){
        let a = Number(input[1])
        let b = Number(input[2])
        result = a*b/2;
    }
    console.log(result.toFixed(3));
}