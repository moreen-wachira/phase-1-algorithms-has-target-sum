function hasTargetSum(array, target) {
  // Initialize a Set to store unique numbers.
  const seen = new Set();

  // Iterate through the given array.
  for (let num of array) {
    // Calculate the difference between the target number and the current element.
    const diff = target - num;

    // Check if the difference exists in the Set.
    if (seen.has(diff)) {
      // If it exists, return true (a pair is found).
      return true;
    }

    // Otherwise, add the current element to the Set.
    seen.add(num);
  }

  // If the loop completes without finding a pair, return false (no pair found).
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n)
  - We iterate through the array once, where "n" is the length of the array.

  Space Complexity: O(n)
  - In the worst case, we might store all "n" elements in the Set.
*/

/* 
  Add your pseudocode here
  - Initialize an empty Set to store unique numbers.
  - Iterate through the given array.
  - Calculate the difference between the target number and the current element.
  - Check if the difference exists in the Set.
  - If it exists, return true (a pair is found).
  - Otherwise, add the current element to the Set.
  - If the loop completes without finding a pair, return false (no pair found).
*/

/*
  Add written explanation of your solution here
  - We use a Set to keep track of numbers we've seen.
  - As we iterate through the array, we calculate the difference between the target number and the current element.
  - If the difference is already in the Set, that means we've found a pair that adds up to the target, so we return true.
  - If we don't find the difference in the Set, we add the current element to the Set and continue the iteration.
  - If the iteration completes without finding a pair, we return false.
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