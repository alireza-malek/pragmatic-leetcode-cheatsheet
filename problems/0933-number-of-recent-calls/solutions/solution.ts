/**
 * Counts requests in a sliding 3000ms window using a queue.
 */
export class RecentCounter {
  private queue: number[] = [];
  private head = 0; // virtual dequeue pointer (avoids costly shift)

  ping(t: number): number {
    this.queue.push(t);

    // Remove timestamps outside the window
    while (this.queue[this.head] < t - 3000) {
      this.head++;
    }

    return this.queue.length - this.head;
  }
}
