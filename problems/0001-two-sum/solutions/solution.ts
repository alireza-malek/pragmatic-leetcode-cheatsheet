/**
 * Returns indices of two numbers that add up to target.
 *
 * @param nums   Array of integers (may contain duplicates)
 * @param target Target sum
 * @returns      Two indices i, j such that nums[i] + nums[j] === target
 */
export function twoSum(nums: number[], target: number): [number, number] {
  // Map from value to its index in the array
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // If we already saw the complement, we have a solution.
    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }

    // Store it for future look-ups
    seen.set(nums[i], i);
  }

  // Problem guarantees exactly one solution; this line is just for type safety.
  throw new Error("No two sum solution found");
}
