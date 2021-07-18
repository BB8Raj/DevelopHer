//1 - Declare a variable named submissions that is initialized to an array with the following objects:
const submissions = 
    [ 
        {"name": "Jane","score": 95, "date": "2020-01-24", "passed": true}, 
        {"name": "Joe","score": 77, "date": "2018-05-14", "passed": true}, 
        {"name": "Jack","score": 59, "date": "2019-07-05", "passed": false}, 
        {"name": "Jill","score": 89, "date": "2020-04-22", "passed": true}
    ]
console.log(`#1 create object array`)
console.log(submissions);
console.log(submissions[2]);


/* 2. Declare a function named addSubmission
○ Parameter(s): array, newName, newScore, newDate
○ Functionality: construct an object and push it into the array. The object must
have the same properties as the objects already in the array. Use conditional
statements to set the value for the passed property to true if the score is
greater than or equal to 60 and false otherwise. */


//const addSubmission = (array, newName, newScore, newDate) => 

function addSubmission (array, newName, newScore, newDate) {
    const newObject = {
    name: newName,
    score: newScore,
    date: newDate,  
    passed: newScore >= 60 ? true : false  
};
array.push(newObject);
};
console.log(`#2 Add submission testing - Hello Katara`)
addSubmission(submissions, 'Katara', 100, "2021-2-13");
console.log(submissions);


//#3 index + splice 
function deleteSubmissionByIndex(array, index) {  
array.splice(index,1)
}
deleteSubmissionByIndex(submissions,1);
console.log(`#3 Remove Object From Array by Index- Goodbye Joe`)
console.log(submissions);

//#4 findIndex + splice

function deleteSubmissionByName(array, name) {
const findToDelete = array.findIndex((element) => element.name === name); //return 2 which is correct - would tell splice where to start once they're working together.
array.splice(findToDelete,0); //use fist const to get Index for splice, and use 0 to only delete that one value. If value was 1 it would delete two lines.
const deleteByName = array.splice(findToDelete,1);
return deleteByName;
};

console.log(`#4 Delete submission by name - Goodbye Jill - showing -1 which means no element passed the test`)
//console.log(deleteSubmissionByName(submissions, "Jill"));
//console.log(submissions.findIndex(isLostAndFound));  //prints 2
console.log(deleteSubmissionByName(submissions,"Jill"));
console.log(`All that remains from #4`)
console.log(submissions);

//#5
function editSubmission(array, index, score){
array[index].score = score;
array[index].passed = score >= 60 ? true : false;  
console.log(`#5 Submission has been edited Jack's Score from 59 to 85`)
console.log(submissions);
}
editSubmission(submissions,1,85);


//#6
function findSubmissionByName(array, name) {
    const findTheName = array.find((element) => element.name === name);
    return findTheName;
} 
console.log(`#6 find by name - looking for Katara`);
console.log(findSubmissionByName(submissions,"Katara"));


//#7

/* console.log(`#7 hard coded test forEach loop`);

var lowScore = submissions[0].score;
    
    submissions.forEach(function (entry) {
        if (entry.score < lowScore) {
          lowScore = entry;
      }
    });
    console.log(lowScore); */

/* ReadonlyArray.forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void
A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. */
    
function findLowestScore(array) {

let low = null;
array.forEach(function(entry) {
    if (low === null || entry.score < low.score) {
    low = entry; } 
});

return low;

}

console.log(`#7 Student with lowest score:`)
console.log(findLowestScore(submissions))

//#8

function findAverageScore (array) {
    let totalScore = 0;
    let count = 0;

    for (obj of array) {
       totalScore = obj.score + totalScore; 
       count++;
    } 
    let avgScore = totalScore/count;
    return(avgScore)
}
console.log(`#8 avg score of student array:`);
console.log(findAverageScore(submissions));


//#9
const filterPassing = (array) => {
    const passingScores = array.filter((element) =>
    element.passed === true);
    return passingScores;
};
console.log(`#9 Passing Scores only`)
console.log(filterPassing(submissions));

 
//#10
const filter90AndAbove = (array) => {
    const highScore = array.filter((element) =>
    element.score >= 90);
    return highScore;
};
console.log(`#10 Honor Roll - students with 90 or above:`)
console.log(filter90AndAbove(submissions));















/* var list = [
    {
    'id':4,
    'name':'nitin',
    'group':'angularjs'
    },
    {
    'id':1,
    'name':'nitin',
    'group':'angularjs'
    },
    {
    'id':2,
    'name':'nitin',
    'group':'angularjs'
    },
    {
    'id':3,
    'name':'nitin',
    'group':'angularjs'
    }]
    

    var tmp = list[0].id;
    
    list.forEach(function (entry) {
        if (entry.id < tmp) {
          tmp = entry;
      }
    });
    console.log(`original`)
    console.log(tmp);

 */