/**
 * Checks which kids can have the most candies after receiving extraCandies.
 *
 * @param candies      Array of candy counts per kid (2 ≤ length ≤ 100)
 * @param extraCandies Extra candies to hypothetically give (1 ≤ value ≤ 50)
 * @returns Boolean array — true if kid i can reach the current max
 */
export function kidsWithCandies(
  candies: number[],
  extraCandies: number,
): boolean[] {
  const maxCandies = Math.max(...candies);
  return candies.map((c) => c + extraCandies >= maxCandies);
}
