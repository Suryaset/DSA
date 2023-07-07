function twoSum(nums, target) {
  // Create an empty object to store numbers and their indices
  const map = {};

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement (the value needed to reach the target)
    const complement = target - nums[i];

    // Check if the complement exists in the object
    if (map.hasOwnProperty(complement)) {
      // If it exists, return the indices of the current number and its complement
      return [map[complement], i];
    }

    // If the complement doesn't exist, store the current number and its index in the object
    map[nums[i]] = i;
  }

  // If no solution is found, return an empty array
  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
