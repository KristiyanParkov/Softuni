function tickets(input) {
    let index = 0;
    let command = input[index]
    index++;
    let countStudent = 0;
    let countStandard = 0;
    let countKids = 0;
    let totalCount = 0;

    while (command !== "Finish") {
        let movieName = command;
        let freeSpace = Number(input[index])
        index++;

        let ticketType = input[index]
        index++
        let counter = 0;

        while (ticketType !== "End") {
            counter++;



            switch (ticketType) {
                case "student": countStudent++; break;
                case "standard": countStandard++; break;
                case "kid": countKids++; break;
            }
            if (counter == freeSpace) {
                break;
            }

            ticketType = input[index]
            index++;
        }

        totalCount += counter;
        let percentageFull = counter / freeSpace * 100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`)

        command = input[index]
        index++;
    }

    let percentageStudentTicket = countStudent / totalCount * 100;
    let percentageStandardTicket = countStandard / totalCount * 100;
    let percentageKidsTicket = countKids / totalCount * 100;

    console.log(`Total tickets: ${totalCount}`)
    console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`)
    console.log(`${percentageStandardTicket.toFixed(2)}% standard tickets.`)
    console.log(`${percentageKidsTicket.toFixed(2)}% kids tickets.`)
}
