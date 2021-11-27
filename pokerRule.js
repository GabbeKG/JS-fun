const deck =[
    //Hearts
    "H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","H11","H12","H13",
    //Clubs
    "C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13",
    //Diamond
    "D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","D13",
    //Spades
    "S1","S2","S3","S4","S5","S6","S7","S8","S9","S10","S11","S12","S13"
];


var shuffleDeck= deck.sort(()=>Math.random()-0.5);
console.log(shuffleDeck)
var hand=[];


for(var i=0;i<5;i++){
    let n= Math.floor(Math.random()*shuffleDeck.length)
    hand.push(shuffleDeck[n])
    shuffleDeck.splice(n,1)
    console.log(shuffleDeck)
}
console.log("Length: "+shuffleDeck.length)
for(var i=0;i<shuffleDeck.length;i++){

    console.log("Current deck status: "+shuffleDeck[i])
}
console.log("Hand Dealt: "+hand)