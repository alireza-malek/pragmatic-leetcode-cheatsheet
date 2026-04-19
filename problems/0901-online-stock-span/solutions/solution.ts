/**
 * Computes the stock span for each day using a monotonic decreasing stack.
 * Each stack entry stores [price, span] — the span of that day.
 */
export class StockSpanner {
  private stack: [number, number][] = []; // [price, span]

  next(price: number): number {
    let span = 1;

    // Absorb all previous days with price <= current price
    while (
      this.stack.length > 0 &&
      this.stack[this.stack.length - 1][0] <= price
    ) {
      span += this.stack.pop()![1];
    }

    this.stack.push([price, span]);
    return span;
  }
}
