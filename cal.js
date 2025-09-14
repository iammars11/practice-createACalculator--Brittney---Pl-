// ---------------------------
// Step 1: Define functions
// ---------------------------

// Absolute Value
function absoluteValue(num) {
  return Math.abs(num);
}

// Power Calculation
function power(base, exponent) {
  return Math.pow(base, exponent);  // or base ** exponent
}

// Square Root Finder
function squareRoot(num) {
  return Math.sqrt(num);
}

// Maximum and Minimum Finder
function findMaxMin(numbers) {
  return {
    max: Math.max(...numbers),
    min: Math.min(...numbers)
  };
}

// Random Number Generator (inclusive range)
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Custom Rounding
function customRound(num, decimals) {
  let factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}


// ---------------------------
// Step 2: Combine into Calculator
// ---------------------------
function calculator() {
  console.log("---- Calculator Tests ----");

  // 1. Absolute value of -45.67
  console.log("Absolute value:", absoluteValue(-45.67));
  // Output: 45.67

  // 2. Raise 5 to the power of 3
  console.log("Power:", power(5, 3));
  // Output: 125

  // 3. Square root of 144
  console.log("Square root:", squareRoot(144));
  // Output: 12

  // 4. Max and Min from array
  let numbers = [3, 78, -12, 0.5, 27];
  let results = findMaxMin(numbers);
  console.log("Max value:", results.max);
  console.log("Min value:", results.min);
  // Output: Max = 78, Min = -12

  // 5. Random number between 1 and 50
  console.log("Random number (1–50):", randomInRange(1, 50));
  // Output: Random number between 1 and 50 (varies each run)

  // 6. Round 23.67891 to 2 decimal places
  console.log("Rounded:", customRound(23.67891, 2));
  // Output: 23.68
}

// Run calculator
calculator();
