/**
 * Stack supporting O(1) push, pop, top, and getMin.
 * Uses a parallel min-stack that tracks the running minimum.
 */
export class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    // Push current min (or val if stack was empty)
    const currentMin =
      this.minStack.length === 0
        ? val
        : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(currentMin);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
