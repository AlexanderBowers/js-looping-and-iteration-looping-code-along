const gifts = ["teddy bear", "dronme", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);



const names = ["Lisa", "Kaitlin", "Jan"]

function writeCards(array, event){
    let messages = [];
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

writeCards(names, "birthday");

function countDown(int){
    let i = int;
    while (i > -1) {
        console.log(i)
        i--;
    }

}

countDown(10);
