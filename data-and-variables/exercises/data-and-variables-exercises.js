// Declare and assign the variables below

let shuttleName = 'Determination';
let shuttleSpeedMPH = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621; 

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMPH);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);

// Calculate a space mission below

let milestoMars = distanceToMarsKm * milesPerKm;
let hourstoMars = distanceToMarsKm / shuttleSpeedMPH;
let daystoMars = hourstoMars / 24;

// Print the results of the space mission calculations below

console.log(shuttleName + " will take " + daystoMars + " days to reach the Moon. ");

// Calculate a trip to the moon below

let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / 24;


// Print the results of the trip to the moon below

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon."); 