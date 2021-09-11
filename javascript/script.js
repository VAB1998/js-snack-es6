//Snack 1 completed
/*
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
*/

//Step 1: Create an array of object (bicycles)
const bicycle = [
    {
        name : 'Blanchi',
        weight : 5
    },
    {
        name : 'Between',
        weight : 6
    },
    {
        name : 'Labc',
        weight : 4
    },
    {
        name : 'Labc',
        weight : 12
    },
    {
        name : 'Labc',
        weight : 15
    }
]

//Step 2: Verify wich bike has the lower weight
let lowerWeight = bicycle[0].weight;

//Iterate through the array 
for(let i = 0; i < bicycle.length; i++){   

    //Check if the condition is verified
    if(bicycle[i].weight < lowerWeight ){
        //Check
        console.log('Inside the if block');
        lowerWeight = i;
    }
}

console.log(`The lightest bike is ${bicycle[lowerWeight].name} and its weight is ${bicycle[lowerWeight].weight}`);