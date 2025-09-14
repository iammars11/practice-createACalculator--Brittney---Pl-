// ---------------------------
// Step 1: Define functions
// ---------------------------

// 1. Absolute Value Calculation
function getAbsoluteValue(number) {
  return Math.abs(number);
}

// 2. Power Calculation
function calculatePower(base, exponent) {
  return Math.pow(base, exponent);  // or base ** exponent
}

// 3. Square Root Finder
function findSquareRoot(number) {
  return Math.sqrt(number);
}

// 4. Maximum and Minimum Finder
function findMaxMin(numbers) {
  return {
    max: Math.max(...numbers),
    min: Math.min(...numbers)
  };
}

// 5. Random Number Generator (inclusive range)
function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 6. Custom Rounding (using toFixed)
function roundToDecimals(number, decimals) {
  return Number(number.toFixed(decimals));
}


// ---------------------------
// Step 2: Combine into Calculator
// ---------------------------
function calculator() {
  console.log("---- Calculator Tests ----");

  // 1. Absolute value of -45.67
  console.log("Absolute value of -45.67:", getAbsoluteValue(-45.67));
  // Output: 45.67

  // 2. Raise 5 to the power of 3
  console.log("5 raised to the power of 3:", calculatePower(5, 3));
  // Output: 125

  // 3. Square root of 144
  console.log("Square root of 144:", findSquareRoot(144));
  // Output: 12

  // 4. Max and Min from array
  let numbers = [3, 78, -12, 0.5, 27];
  let results = findMaxMin(numbers);
  console.log("Maximum number:", results.max);
  console.log("Minimum number:", results.min);
  // Output: Max = 78, Min = -12

  // 5. Random number between 1 and 50
  console.log("Random number between 1 and 50:", generateRandom(1, 50));
  // Output: varies each run

  // 6. Round 23.67891 to 2 decimal places
  console.log("Round 23.67891 to 2 decimal places:", roundToDecimals(23.67891, 2));
  // Output: 23.68
}

// Run calculator
calculator();
