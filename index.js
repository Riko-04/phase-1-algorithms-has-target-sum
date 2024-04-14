function hasTargetSum(array, target) {
  // Pseudocode:
  // 1. Create an empty set to store visited numbers.
  // 2. Iterate through each number in the array.
  // 3. For each number, calculate the difference between the target and the current number.
  // 4. Check if the difference exists in the set of visited numbers.
  //    - If it does, return true, indicating that a pair exists.
  //    - If not, add the current number to the set of visited numbers.
  // 5. If no pair is found after iterating through all numbers, return false.

  let visited = new Set();

  for (let num of array) {
    let diff = target - num;
    if (visited.has(diff)) {
      return true;
    } else {
      visited.add(num);
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here:
  - Time complexity: O(n)
    - The function iterates through the array once, where n is the length of the array.
    - The set operations (add and has) are O(1) on average.
    - So, the overall time complexity is O(n).
*/

/* 
  Add your pseudocode here:
  1. Create an empty set to store visited numbers.
  2. Iterate through each number in the array.
  3. For each number, calculate the difference between the target and the current number.
  4. Check if the difference exists in the set of visited numbers.
     - If it does, return true, indicating that a pair exists.
     - If not, add the current number to the set of visited numbers.
  5. If no pair is found after iterating through all numbers, return false.
*/

/*
  Add written explanation of your solution here:
  - The function uses a set to keep track of visited numbers.
  - It iterates through the array, for each number it calculates the difference between the target and the current number.
  - If the difference exists in the set of visited numbers, it means a pair exists that sums up to the target, so it returns true.
  - If not, it adds the current number to the set of visited numbers.
  - If no pair is found after iterating through all numbers, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
