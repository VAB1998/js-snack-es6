//------Snack 1------
/*
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
*/

//Step 1: Create an array of object (bicycles)
const bicycle = [
    {
        name : 'Between',
        weight : 6
    },
    {
        name : 'Blanchi',
        weight : 5
    },
    {
        name : 'MaM',
        weight : 12
    },
    {
        name : 'Labc',
        weight : 4
    },
    {
        name : 'BauBau',
        weight : 15
    }
]

//Step 2: Verify wich bike has the lower weight

//Style 1 ==> for of loop
let lowerWeight  = bicycle[0].weight ; 
let lowerBicycle ;
for(let j of bicycle ){
    //Check
    console.log(j);
    if(j.weight < lowerWeight ){
        lowerBicycle = j;
    }
}

console.log(`The lightest bike is ${lowerBicycle.name} and its weight is ${lowerBicycle.weight}`);

//Style 2 ==> for loop
/*
let lowerWeight  = bicycle[0].weight ; 
let lowerBicycle ;
//Iterate through the array 
for(let i = 0; i < bicycle.length; i++){   
    
    //Check if the condition is verified
    if(bicycle[i].weight < lowerWeight ){
        //Check
        console.log('Inside the if block');
        lowerBicycle = i;
    }
}

console.log(`The lightest bike is ${bicycle[lowerBicycle].name} and its weight is ${bicycle[lowerBicycle].weight}`);
*/

//------Snack 2------ 
/**
    Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
    Nome sarà l'unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti
*/

//Create an array of object (Teams)
const footballTeams = [
    {
        name : 'DC AC',
        score : 0,
        foulsSuffered : 0
    },
    {
        name : 'Califico',
        score : 0,
        foulsSuffered : 0
    },
    {
        name : 'Pertollo',
        score : 0,
        foulsSuffered : 0
    }
]

//Loop through the VALUES of THE array
for(let i of footballTeams){
    //Set the values of the score and foulsSuffered properties
    i.score = randomNumberGenerator(0, 60);
    i.foulsSuffered = randomNumberGenerator(0, 30);
}
//Write the array of objects to the console
console.table(footballTeams);


//++++++Functions++++++
/**
 * Generates a random number between two values (min & max).
 * @param {*} min The minumum value.
 * @param {*} max The maximum value.
 * @returns A random number
 */
 function randomNumberGenerator(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }