/**
 * Returns the minimum number of arrows to burst all balloons.
 * Greedy: sort by end, shoot at the end of the earliest-ending balloon.
 *
 * @param points Array of [xstart, xend] balloon intervals
 * @returns Minimum arrows
 */
export function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1;
  let arrowPos = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > arrowPos) {
      // This balloon isn't hit by the current arrow — need a new one
      arrows++;
      arrowPos = points[i][1];
    }
  }

  return arrows;
}
