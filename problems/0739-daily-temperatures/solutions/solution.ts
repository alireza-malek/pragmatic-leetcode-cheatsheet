/**
 * For each day, finds how many days until a warmer temperature.
 * Uses a monotonic decreasing stack of indices.
 *
 * @param temperatures Daily temperature readings
 * @returns Wait-days array (0 if no warmer day exists)
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer = new Array<number>(n).fill(0);
  const stack: number[] = []; // indices of days waiting for a warmer day

  for (let i = 0; i < n; i++) {
    // Pop all days that are colder than today
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prev = stack.pop()!;
      answer[prev] = i - prev;
    }
    stack.push(i);
  }

  return answer;
}
