function plusOne(digits) {
  const n = digits.length;

  // Iterate through the digits in reverse order
  for (let i = n - 1; i >= 0; i--) {
    // Increment the current digit by one
    digits[i] += 1;

    // If the current digit becomes 10, set it to 0 and carry over 1 to the next digit
    if (digits[i] === 10) {
      digits[i] = 0;
    } else {
      // If the current digit is less than 10, no need to carry over, so we can return the digits array
      return digits;
    }
  }

  // If all digits became 0, we need to insert a leading 1
  digits.unshift(1);

  return digits;
}

// Example usage:
const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result); // Output: [1, 2, 4]
