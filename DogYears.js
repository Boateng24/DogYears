//My age in Human years
const myAge = 26;

// Early years variable set to 2
let earlyYears = 2;
//multiplying early years by 10.5
earlyYears *= 10.5; 

//Formular for my later years
let laterYears = myAge - 2;
//converting my laterYears to dog years
laterYears *= 4;

//printing my early years
console.log(earlyYears);

//printing my laterYears
console.log(laterYears);

//Calculating my age in dog years
myAgeInDogYears = earlyYears + laterYears;

// storing the myName in lowercase
let myName = "TUFFOUR".toLowerCase();

//printing my age in dog years to the console using string interpolation
console.log(`My name is ${myName}, I am ${myAge} years old in human years which is ${myAgeInDogYears} years old equivalency in dog years`)