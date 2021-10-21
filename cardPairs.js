const cardarr=[1,1,5,3,3,9,9,9];

//Skriver ut antal unika siffror
console.log(new Set(cardarr).size)
cardarr.sort();
let res=0;
let i=0;
let paircount=0;
let n=cardarr.length;
let temp=0;
//En loop som pågor tills hela vektorn "cardarr" gått igenom
while(i<n){
    let arr=cardarr[i]
    let count=1;
    i++;
    //En loop som går igenom hela vektorn "cardarr" och kollar om det är samma siffra
    while(i<n&&cardarr[i]=== arr){
       
        count++;
        i++;
    }
    //Om count räknat till 2 beräkna res genom att addera count till res
    //därefter kolla om count är 2, dvs inte motsvarar triss eller fyrtal,
    //och om temp (som memorerar det högsta par värdet) är mindre än nuvarande värde. 
    //Om JA så ersätt med det nya högre värdet annaras gör inget.
       if(count===2){
           res=res+Math.floor(count/2);
           if(count==2&&temp<arr){
               temp=arr;
            }
        }
}
//Skriver ut antal unika siffror, par och högsta paret
console.log("Counted uniques numbers: "+new Set(cardarr).size)
console.log("Pairs counted: "+res);
console.log("Largest pair value is: "+temp)
