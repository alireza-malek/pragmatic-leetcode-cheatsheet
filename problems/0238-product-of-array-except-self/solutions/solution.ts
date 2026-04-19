/**
 * Computes the product of every element except self without division.
 * Uses the output array to store prefix products, then a single
 * backward pass multiplies in the suffix products.
 *
 * @param nums  Array of integers (length >= 2)
 * @returns     Product-except-self array
 */
export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array<number>(n);

  // answer[i] = product of all elements to the LEFT of i
  answer[0] = 1;
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  // Multiply in products from the RIGHT using a running suffix
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}
