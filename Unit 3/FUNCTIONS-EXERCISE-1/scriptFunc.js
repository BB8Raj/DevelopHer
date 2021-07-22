//returns area of a circle using radius
function getAreaOfCircle (radius) {
    return Math.ceil(Math.PI * radius * radius)
}
console.log(`The area of the circle using the radius is ${getAreaOfCircle(12)}`);


//returns circumference of a circle using radius
function getCircumferenceOfCircle(paraRadius) {
    return 2 * Math.ceil(Math.PI * paraRadius)
}
console.log(`The circumference of the circle using raidus is ${getCircumferenceOfCircle(4)}`);
//control - radius of 4 is 25.13 circumference 


function getAreaOfSquare (sideParm) {
    return sideParm * sideParm
}
console.log("Area of a Square is "+ getAreaOfSquare(8));
//control - area of 8 length is 64


function getAreaOfTriangle(base, height) {
    return (base * height) / 2
}
console.log("Area of the triangle is " + getAreaOfTriangle(3, 8))
//control (3 base and 12 height = area of 8)