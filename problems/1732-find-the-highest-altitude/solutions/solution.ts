/**
 * Returns the highest altitude reached during the trip.
 *
 * @param gain Net altitude change between consecutive points
 * @returns    Maximum altitude (starting altitude is 0)
 */
export function largestAltitude(gain: number[]): number {
  let altitude = 0;
  let max = 0;

  for (const g of gain) {
    altitude += g;
    if (altitude > max) max = altitude;
  }

  return max;
}
