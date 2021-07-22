const name = "Mitch Cuckovich";
const age = 25;
const birthday = "January 24";
const detroitGC = true;
const lifeEvents = ["I was born in Troy, Michigan." , "I went to Hope College." , "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event." , "I'm a graduate of the front-end bootcamp."]
let counter = 0;


//temperal uses batick (~) at start $ and {} key
if (detroitGC === false) {
   console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
}


//if [i] is missing then it will print lifeEvents 4 times
//https://www.w3resource.com/javascript-exercises/javascript-array-exercise-10.php

for (let x = 0; x < lifeEvents.length; x++) {
    console.log(lifeEvents[x]); 
  }

//returns a random integer between 1 and 10 and (both included): https://www.w3schools.com/js/js_random.asp
//must you )+1 with rand forces early termination by counting higher than the last. Other way would take longer to stop and doesn't shows intertarion message in Else statement.

while (randomNumber = Math.floor(Math.random() * 10)+1)  
{
    if (randomNumber !==5) {
        counter++;
        console.log(`${randomNumber} !==5`);
    } else {
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
    
}
