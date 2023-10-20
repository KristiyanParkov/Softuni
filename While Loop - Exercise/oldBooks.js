function oldBooks(input){
    let favBook = input[0]
    let index = 1;
    command = input[index]
    let counter = 0;

    while(command != "No More Books"){

        if(command === favBook){
            console.log(`You checked ${counter} books and found it.`)
            break;
        } else{
            counter++
            index++
            command = input[index]
        }
        if(command === "No More Books"){
            console.log("The book you search is not here!")
            console.log(`You checked ${counter} books.`)
        }
    }
}
oldBooks(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])