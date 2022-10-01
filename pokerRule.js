const deck =[
    //Hearts
    {"type": "hearts",
"rank":1},
{"type": "hearts",
"rank":2},
{"type": "hearts",
"rank":3},
{"type": "hearts",
"rank":4},
{"type": "hearts",
"rank":5},
{"type": "hearts",
"rank":6},
{"type": "hearts",
"rank":7},
{"type": "hearts",
"rank":8},
{"type": "hearts",
"rank":9},
{"type": "hearts",
"rank":10},
{"type": "hearts",
"rank":11},
{"type": "hearts",
"rank":12},
{"type": "hearts",
"rank":13},

//Clubs

{"type": "clubs",
"rank":1},
{"type": "clubs",
"rank":2},
{"type": "clubs",
"rank":3},
{"type": "clubs",
"rank":4},
{"type": "clubs",
"rank":5},
{"type": "clubs",
"rank":6},
{"type": "clubs",
"rank":7},
{"type": "clubs",
"rank":8},
{"type": "clubs",
"rank":9},
{"type": "clubs",
"rank":10},
{"type": "clubs",
"rank":11},
{"type": "clubs",
"rank":12},
{"type": "clubs",
"rank":13},

//Diamond

{"type": "diamond",
"rank":1},
{"type": "diamond",
"rank":2},
{"type": "diamond",
"rank":3},
{"type": "diamond",
"rank":4},
{"type": "diamond",
"rank":5},
{"type": "diamond",
"rank":6},
{"type": "diamond",
"rank":7},
{"type": "diamond",
"rank":8},
{"type": "diamond",
"rank":9},
{"type": "diamond",
"rank":10},
{"type": "diamond",
"rank":11},
{"type": "diamond",
"rank":12},
{"type": "diamond",
"rank":13},

//Spades

{"type": "spades",
"rank":1},
{"type": "spades",
"rank":2},
{"type": "spades",
"rank":3},
{"type": "spades",
"rank":4},
{"type": "spades",
"rank":5},
{"type": "spades",
"rank":6},
{"type": "spades",
"rank":7},
{"type": "spades",
"rank":8},
{"type": "spades",
"rank":9},
{"type": "spades",
"rank":10},
{"type": "spades",
"rank":11},
{"type": "spades",
"rank":12},
{"type": "spades",
"rank":13},



];


var shuffleDeck= deck.sort(()=>Math.random()-0.5);
console.log(shuffleDeck)
var hand=[];


/*for(var i=0;i<5;i++){
    let n= Math.floor(Math.random()*shuffleDeck.length)
    hand.push(shuffleDeck[n])
    shuffleDeck.splice(n,1)
    console.log(shuffleDeck)
}
console.log("Length: "+shuffleDeck.length)
for(var i=0;i<shuffleDeck.length;i++){

    console.log("Current deck status: "+shuffleDeck[i])
}*/
hand=[{"type": "spades",
"rank":1},
{"type": "diamond",
"rank":2},{"type": "hearts",
"rank":3},
{"type": "hearts",
"rank":4},
{"type": "hearts",
"rank":5}];
console.log("Hand Dealt: "+hand[0].rank +" of "+ hand[0].type+
" , "+hand[1].rank +" of "+ hand[1].type+
" , "+hand[2].rank +" of "+ hand[2].type+
" , "+hand[3].rank +" of "+ hand[3].type+
" , "+hand[4].rank +" of "+ hand[4].type)

console.log(new Set(hand).size)
hand.sort((a, b) => b.rank-a.rank);
let pairRes=0;
let c=0;
let paircount=0;
let threeOfaKindCount=0;
let threeOfaKindRes=0;
let n=hand.length;
let temp=0;
let straight=false;
let straightCount=0;
//En loop som pågor tills hela vektorn "cardarr" gått igenom
while(c<n){
    let arr=hand[c]
    let count=1;
    c++;
    //En loop som går igenom hela vektorn "cardarr" och kollar om det är samma siffra
    while(c<n&&hand[c].rank=== arr.rank){
       
        count++;
        c++;
    }
    //Om count räknat till 2 beräkna res genom att addera count till res
    //därefter kolla om count är 2, dvs inte motsvarar triss eller fyrtal,
    //och om temp (som memorerar det högsta par värdet) är mindre än nuvarande värde. 
    //Om JA så ersätt med det nya högre värdet annaras gör inget.
       if(count===2){
        pairRes=pairRes+Math.floor(count/2);
           if(count==2&&temp.rank<arr.rank){
               temp.rank=arr.rank;
            }
        }
        if(count===3){
            threeOfaKindRes=threeOfaKindRes+Math.floor(count/3);
               if(count==3&&temp.rank<arr.rank){
                   temp.rank=arr.rank;
                }
            }
            for(let s=0;s<=hand.length-1;s++){
                if(hand[s++].rank-hand[s].rank===1){
                    straightCount++;
                    console.log(straightCount);
                }
                if(straightCount===4){
                    straight=true;
                }
            }
            if(straight===true){
                console.log("You got a straight!");
            }
}


console.log(straight)
console.log("Counted uniques numbers: "+new Set(hand).size)
console.log("Pairs counted: "+pairRes);
console.log("Three of kind counted: "+threeOfaKindRes)