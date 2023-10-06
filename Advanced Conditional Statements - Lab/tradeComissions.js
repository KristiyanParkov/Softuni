function tradeComissions(input){
    let city = input[0]
    let quantity = Number(input[1])

    if(city === "Sofia"){
        if(quantity >= 0 && quantity <= 500){
            console.log((quantity*0.05).toFixed(2))
        } else if(quantity > 500 && quantity <= 1000){
            console.log((quantity*0.07).toFixed(2))
        } else if(quantity > 1000 && quantity <= 10000){
            console.log((quantity*0.08).toFixed(2))
        } else if(quantity > 10000){
            console.log((quantity*0.12).toFixed(2))
        } else{
            console.log("error")
        }
    } else if(city === "Varna"){
        if(quantity >= 0 && quantity <= 500){
            console.log((quantity*0.045).toFixed(2))
        } else if(quantity > 500 && quantity <= 1000){
            console.log((quantity*0.075).toFixed(2))
        } else if(quantity > 1000 && quantity <= 10000){
            console.log((quantity*0.10).toFixed(2))
        } else if(quantity > 10000){
            console.log((quantity*0.13).toFixed(2))
        } else{
            console.log("error")
        }
    } else if(city === "Plovdiv"){
        if(quantity >= 0 && quantity <= 500){
            console.log((quantity*0.055).toFixed(2))
        } else if(quantity > 500 && quantity <= 1000){
            console.log((quantity*0.08).toFixed(2))
        } else if(quantity > 1000 && quantity <= 10000){
            console.log((quantity*0.12).toFixed(2))
        } else if(quantity > 10000){
            console.log((quantity*0.145).toFixed(2))
        } else{
            console.log("error")
        }
    } else{
        console.log("error")
    }         
}
tradeComissions(["Sofia","1500"])