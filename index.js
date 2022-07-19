// The Fortune Teller

function tellFortune(x, y, z, n) {
  console.log(
    "Q1.",
    "You will be a",
    z,
    "in",
    y,
    "and married to",
    x,
    "with",
    n,
    "kids"
  );
}

tellFortune("Natasha Lyonne", "Tahiti", "retired-early artist", "3");
tellFortune("Keanu Reeves", "Fiji", "Web Developer", "2");
tellFortune("Taika Waititi", "Curaçao", "Chef", "1");

// The Puppy Age Calculator

function calculateDogAge(puppyAge, conversionRate = 7) {
  console.log(
    "Q2.",
    "Your doggie is",
    puppyAge * conversionRate,
    "years old in dog years!"
  );
}

calculateDogAge(7);
calculateDogAge(2);
calculateDogAge(4);

// The Lifetime Supply Calculator

function calculateSupply(age, amount) {
  const maxAge = 100 - age;
  const lifetimeSupply = maxAge * amount * 365;
  console.log('Q3.', Math.round(lifetimeSupply));
}
calculateSupply(38, 3);
calculateSupply(42, 3);
calculateSupply(84, 3);
calculateSupply(25, 2.5);

// The Geometrizer

function calcCircumfrence(radius) {
  console.log('Q4.', "The circumference is", 2 * Math.PI * radius);
}

calcCircumfrence(3);

function calcArea(radius) {
  console.log('Q4.', "The area is", Math.PI * radius ** 2);
}

calcArea(3);

// The Temperature Converter

function celciusToFahrenheit(celcius1) {
  let fahrenheit1 = (celcius1 / 5) * 9 + 32;

  console.log('Q5.', celcius1 + "°C", "is", fahrenheit1 + "°F");
}

celciusToFahrenheit(100);

function fahrenheitToCelsius(fahrenheit2) {
  let celcius2 = ((fahrenheit2 - 32) * 5) / 9;

  console.log('Q5.', fahrenheit2 + "°F", "is", celcius2 + "°C");
}

fahrenheitToCelsius(32);
