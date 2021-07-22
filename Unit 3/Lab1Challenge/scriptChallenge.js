const overTimeRate = 1.5;
const normalHours = 40;
let weeklyCheck = 550;
let weeks = 0;
let goal = 1000000;



let hours = 60;
let wage = 12;
if (hours <= 40) {
    console.log(`Your pay this week is ${wage * hours}.`);

} else {
    console.log((wage*normalHours) + ((hours - normalHours) * overTimeRate * wage) + " is your pay this week with overtime.");
    
}

// without OT at 1819 weeks at $500 a week = $909,500 Saved - Code working (With OT it is  $550 a week saved)


while (weeklyCheck <= 3000000)  
{
    if (weeklyCheck <= goal) {
        weeks++;
        weeklyCheck+=(550);
        console.log(`Saved ${weeklyCheck} on week ${weeks}`);
    } else {
        weeks++;
        console.log(`It took ${weeks} iterations to earn $1,000,000.`);
        break;
    }
    
}





