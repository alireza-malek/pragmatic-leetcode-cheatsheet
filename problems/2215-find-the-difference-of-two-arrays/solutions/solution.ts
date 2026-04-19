/**
 * Returns two lists: values unique to nums1, and values unique to nums2.
 *
 * @param nums1 First integer array
 * @param nums2 Second integer array
 * @returns     [distinctInNums1Only, distinctInNums2Only]
 */
export function findDifference(
  nums1: number[],
  nums2: number[],
): [number[], number[]] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [
    [...set1].filter((n) => !set2.has(n)),
    [...set2].filter((n) => !set1.has(n)),
  ];
}
