//EXAMPLE 1
const raining = true;
const cold = true;

if (raining) {
  console.log('Don\'t forget your umbrella!');
}

if (cold) {
  console.log('Makke sure to wear a scarf!');
}

console.log('Now you\'re ready to go outside!');

/************************************************** */
//EXAMPLE 2
const temperature = 12;

if (temperature<0) {
  console.log('Make sure you pick out a scarf!');
} else if (temperature<15) {
  console.log('Short sleeves won\' cut it!');
} else {
  console.log('Short sleeves are fine');
}

console.log('Now you\'re ready to go outside!');

/************************************************** */
//EXAMPLE 3
const isCitizen = true;
const age = 26;

if (isCitizen && age >18) {
  console.log('You are eligible to vote!');
}
//isCitizen and age both need to be true for the if statement to run

/************************************************** */
//EXAMPLE 4
const temperatureCelsius = 45;

if (temperatureCelsius<-40 || temperatureCelsius >40) {
  console.log('Maybe it\' not a good idea to go outside today!');
}

/************************************************** */
//EXAMPLE 5

const snow = false;

if (!snow) {
console.log('It is not snowing, maybe tomorrow!');
}