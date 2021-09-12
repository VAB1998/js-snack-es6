//------Snack 1------
/*
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
*/

// Step 1: Create an array of object (bicycles)
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
let lighterBicycle  = bicycle[0] ; 

for(let j of bicycle ){
    //Check
    console.log(j);
    if(j.weight < lighterBicycle.weight ){
        lighterBicycle = j;
    }
}

console.log('------Snack 1------');
console.log(`The lightest bike is ${lighterBicycle.name} and its weight is ${lighterBicycle.weight} kg`);
document.getElementById('lighter_bicycle').innerHTML = `The lightest bike is ${lighterBicycle.name} and its weight is ${lighterBicycle.weight} kg`;

/*
//Style 2 ==> for loop
let lighterBicycle = bicycle[0];
//Iterate through the array 
for(let i = 0; i < bicycle.length; i++){   
    
    //Check if the condition is verified
    if(bicycle[i].weight < lighterBicycle.weight ){
        lighterBicycle = bicycle[i];
    }
}

console.log(`The lightest bike is ${lighterBicycle.name} and its weight is ${lighterBicycle.weight}`);
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
        name : 'DC FC',
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
console.log('------Snack 2------');
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


//------Snack 3------
/*
    -Scrivere una funzione che accetti tre argomenti: 
    un array e due numeri (a più piccolo di b).
    -La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice)
    compresa tra i due numeri specificati.
*/

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

/**
 * @param {array} array The array to check
 * @param {number} minumumNumber Minimum number of the range
 * @param {number} maximumNumber Maximum number of the range
 * @returns {array}  Returns an array with the items that have the index in a given range of numbers
 */
function arrayItemsInAGivenRange(array, minumumNumber, maximumNumber){
    
    const newArray = array.filter((item, index) =>index >= minumumNumber && index <= maximumNumber );
    return newArray
}

console.log('------Snack 3------');
console.log( arrayItemsInAGivenRange(alphabet, 1, 5) );