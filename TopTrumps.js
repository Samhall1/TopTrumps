
let deck1 = [
    { name:"Harry Potter", firstyear: 1991, wandlength: 11, familytree: 7, fearfactor: 4, toptrumps: 30 },
    { name:"Severus Snape", firstyear: 1971, wandlength: null, familytree: 2, fearfactor: 9, toptrumps: 26 },
    { name:"Ron Weasley", firstyear: 1991, wandlength: 14, familytree: 11, fearfactor: 4, toptrumps: 29 },
    { name:"Lord Voldemort", firstyear: 1938, wandlength: 13, familytree: 0, fearfactor: 10, toptrumps: 25 },
    { name:"Bellatrix Lestrange", firstyear: 1962, wandlength: 12, familytree: 7, fearfactor: 8, toptrumps: 23 },
    { name:"Fleur Delacour", firstyear: 1994, wandlength: 9, familytree: 7, fearfactor: 2, toptrumps: 12 },
    { name:"Ginny Weasley", firstyear: 1992, wandlength: null, familytree: 12, fearfactor: 2, toptrumps: 20 },
    { name:"Remus lupin", firstyear: 1971, wandlength: null, familytree: 4, fearfactor: 8, toptrumps: 19 },
    { name:"Draco Malfoy", firstyear: 1991, wandlength: 10, familytree: 4, fearfactor: 4, toptrumps: 18 },
    { name:"Neville Longbottom", firstyear: 1991, wandlength: 13, familytree: 4, fearfactor: 1, toptrumps: 10 },
    { name:"Sybill Trelawney", firstyear: 1973, wandlength: null, familytree: null, fearfactor: 1, toptrumps: 3 },
    { name:"Horace Slughorn", firstyear: 1931, wandlength: 10, familytree: null, fearfactor: 2, toptrumps: 9 },
    { name:"Quirinus Quirrell", firstyear: 1981, wandlength: 9, familytree: null, fearfactor: 7, toptrumps: 8 },
    { name:"Arthur Weasley", firstyear: 1961, wandlength: null, familytree: 22, fearfactor: 2, toptrumps: 15 },
    { name:"Cho Chang", firstyear: 1990, wandlength: null, familytree: 2, fearfactor: 2, toptrumps: 5 }
];

let deck2 = [
    { name: "Albus Dumbledore", firstyear: 1892, wandlength: 15, familytree: 4, fearfactor: 7, toptrumps: 27 },
    { name:"Sirius Black", firstyear: 1971, wandlength: null, familytree: 6, fearfactor: 5, toptrumps: 22 },
    { name:"Hermione Granger", firstyear: 1991, wandlength: 10, familytree: 5, fearfactor: 3, toptrumps: 29 },
    { name:"Cederic Diggory", firstyear: 1989, wandlength: 12, familytree: 2, fearfactor: 4, toptrumps: 21 },
    { name:"Rubeus Hagrid", firstyear: 1940, wandlength: 16, familytree: 1, fearfactor: 3, toptrumps: 24 },
    { name:"Fenrir Greyback", firstyear: 1996, wandlength: null, familytree: 1, fearfactor: 10, toptrumps: 1 },
    { name:"Argus Filch", firstyear: 1973, wandlength: null, familytree: null, fearfactor: 5, toptrumps: 1 },
    { name:"Luna Lovegood", firstyear: 1992, wandlength: null, familytree: 2, fearfactor: 1, toptrumps: 11 },
    { name:"Molly Weasley", firstyear: 1961, wandlength: null, familytree: 24, fearfactor: 1, toptrumps: 17 },
    { name:"Minerva McGonagall", firstyear: 1947, wandlength: 9, familytree: null, fearfactor: 6, toptrumps: 16 },
    { name:"Nymphadora Tonks", firstyear: 1984, wandlength: null, familytree: 4, fearfactor: 2, toptrumps: 4 },
    { name:"Victor Krum", firstyear: 1994, wandlength: 10, familytree: 2, fearfactor: 5, toptrumps: 7  },
    { name:"Gilderoy Lockhart", firstyear: 1992, wandlength: 9, familytree: null, fearfactor: 2, toptrumps: 6 },
    { name:"Lucius Malfoy", firstyear: 1965, wandlength: 18, familytree: 4, fearfactor: 7, toptrumps: 14 },
    { name:"Peter Pettigrew", firstyear: 1971, wandlength: 9, familytree: null, fearfactor: 6, toptrumps: 13 }

];

// console.log(Player1[0].name);               //This will access the name in my first value in player 1 "Harry Potter".

let lockdown = [];

console.log("This is the start of your Top Trumps game!")

function round(){
    if(deck1.length === 0) {
        console.log("Game Over, deck2 wins");
    } else if (deck2.length === 0) {
        console.log("Game Over, deck1 wins");                      // checks if both players have 0 cards if not we go to next hand.
    } else {
        console.log("Next Hand!");
    }
    };

let hand1 = deck1.shift();                         //This will access the wandlengths from the objects inside the array and pull them from the array
let hand2 = deck2.shift();

console.log(hand1, hand2);                                     //This will print both objects pulled from both arrays to the console


// if(hand1.wandlength < hand2.wandlength){    
//     console.log("Deck 2 won this round! ")                      
//     deck2.push(hand1)
// } else if ( hand1 > hand2) {
//     console.log("Deck 1 won this round! ")
//     deck1.push(hand2)
// } else if( hand1 === hand2){
//     console.log("Its a draw, both cards are in lockdown.")
//     lockdown.push(hand1,hand2)
// }

// // console.log(deck1.length);
// // console.log(deck2.length);

// round();
// console.log("round 1 finished");
// //console.log(deck2)
// // //console.log(lockdown) //This will show that the winner is pushed to the rear of deck2 array

// let hand3 = deck1.shift(1,2);
// let hand4 = deck2.shift(1,2);

// //console.log(hand3, hand4);


// if(hand3 < hand4){     
//     console.log("Deck 2 won this round! ")                              
//     deck2.push(deck1[1])
// } else if ( hand3 > hand4) {
//     console.log("Deck 1 won this round! ")
//     deck1.push(deck2[1])
// } else if( hand3 === hand4){
//     console.log("Its a draw, both cards are in lockdown.")
//     lockdown.push(deck1[1], deck2[1])
// }

// round();
// console.log("Second round finished");
// //console.log(deck2)

// // console.log(deck1.length);
// // console.log(deck2.length);

// //let hand5 = deck1.shift(1,2).familytree;
// //let hand6 = deck2.shift(1,2).familytree;



// // function hands(){
// //     for(var i = 0; i < deck1.length; i++){
// //          deck1[i].firstyear = hand1

         
// //     }
// // };
// hands();


































