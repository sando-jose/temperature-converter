// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */

function convertToCelsius(fahren) {
  var celc = (fahren - 32) * (5 / 9);
  return celc;
}

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */

function createMessage(fahren, celc) {
  if (fahren < 32) {
    prompt(
      `The current temperature is ${fahren}, in celsius ${celc}. It is very cold.`
    );
  } else if (fahren < 64) {
    prompt(
      `The current temperature is ${fahren}, in celsius ${celc}. It is cold.`
    );
  } else if (fahren < 86) {
    prompt(
      `The current temperature is ${fahren}, in celsius ${celc}. It is warm.`
    );
  } else if (fahren < 100) {
    prompt`The current temperature is ${fahren}, in celsius ${celc}. It is hot.`;
  } else {
    prompt`The temperature is ${fahren}, which is ${celc} celsius. You might need an ice pack on your head.`;
  }
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  console.log(Mathfloor(Math.random() * 110));
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "Enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
