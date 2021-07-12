console.log("Conditions Exercise 1")

const actualTemp = 78;
const desiredTemp = 75;


if (actualTemp > desiredTemp) {
  console.log('Run A/C');
} else if (actualTemp < desiredTemp) {
  console.log('Run Heat') 
} else {
  conosle.log('Standby');
}

const tempCelsius = 90;
const targetUnit = "F";

  //Extended Challenges second exercise: Start with two variables: tempCelsius (a number) and targetUnit (a string, either “C”, “F”, or “K”). Write a switch statement that checks the targetUnit and logs the temperature converted to that unit. Notes: K stands for Kelvin. C requires no conversion, print out the original temp.
  

console.log("Condition Exercise 2")
    //Build Specifications:
    //Start with three variables name1, name2, and name3 which hold three names.
    //The code should output the longest of the three names. e.g., "Ada Lovelace has the longest name.". If there is a tie between any two, list both. e.g., “Charles and Brendan tie for the longest name.”. Or if all three names are the same length, output “All three names, Dorothy, Charles, and Brendan, are the same length.”
    //Make sure to test your code with many different combinations of lengths. There are 7 possible outcomes.


const name1 = "Cloud"
const name2 = "Toto"
const name3 = "Aries" 

console.log(name3.length);
console.log(name1.length);
console.log(name2.length);



//longest name 
/* if ( name1.length > name2.length && name1 > name3.length) {
    console.log(name1)
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log (name2);
}
    else {
        console.log("The longest name is " + name3 + " and nothing else.")
    }
 */


if ( name1.length > name2.length && name1.length > name3.length) {
        console.log(name1)
    } else if (name2.length > name1.length && name2.length > name3.length) {
        console.log (name2);
    } else if (name3.length > name1.length && name3.length > name2.length) {
       console.log (name3);
    } else if (name1.length == name2.length && name1.length == name3.length) {
        console.log ("All three names " + name1 + " " + name2 + " and " + name3, + " are the same length");
    } else if (name1.length == name2.length && name1.length > name3.length) {
        console.log(name1 + " and " + name2 + " tie for the longest name")
    } else if (name2.length == name3.length && name2.length > name1.length) {
      console.log(name2 + " and " + name3 + " tie for the longest name")
    }else if (name1.length == name3.length && name1.length > name2.length) {
      console.log(name1 + " and " + name3 + " tie for the longest name")
    }