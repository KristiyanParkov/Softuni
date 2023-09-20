function repainting(input){
    let nylon = Number(input[0])
    let paint = Number(input[1])
    let thinner = Number(input[2])
    let neededHours = Number(input[3])

    let nylonSum = (nylon+2) * 1.5;
    let paintSum = (paint * 1.1) * 14.50;
    let thinnerSum = thinner*5;

    let materials = nylonSum + paintSum + thinnerSum + 0.4;
    let labour = (materials*0.3)*neededHours;
    let total = labour + materials;

    console.log(total)
}