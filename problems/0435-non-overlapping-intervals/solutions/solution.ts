/**
 * Returns the minimum number of intervals to remove for non-overlapping.
 * Greedy: sort by end time, always keep the interval that ends earliest.
 *
 * @param intervals Array of [start, end] intervals
 * @returns Minimum removals
 */
export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);

  let kept = 0;
  let prevEnd = -Infinity;

  for (const [start, end] of intervals) {
    if (start >= prevEnd) {
      kept++;
      prevEnd = end;
    }
  }

  return intervals.length - kept;
}
