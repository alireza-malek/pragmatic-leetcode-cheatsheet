/**
 * Maintains an "infinite set" of positive integers with efficient
 * popSmallest and addBack operations.
 *
 * Uses a threshold: all integers >= threshold are implicitly in the set.
 * A sorted set (or min-heap) tracks numbers added back below the threshold.
 */
export class SmallestInfiniteSet {
  private threshold = 1; // all integers >= threshold are in the set
  private addedBack = new Set<number>();

  popSmallest(): number {
    if (this.addedBack.size > 0) {
      const min = Math.min(...this.addedBack);
      this.addedBack.delete(min);
      return min;
    }
    return this.threshold++;
  }

  addBack(num: number): void {
    if (num < this.threshold) {
      this.addedBack.add(num);
    }
    // If num >= threshold, it's already implicitly in the set
  }
}
