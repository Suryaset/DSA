function containsDuplicate(nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

// Example usage:
const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result); // Output: true
