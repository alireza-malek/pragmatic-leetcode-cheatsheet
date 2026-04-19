/**
 * Simulates asteroid collisions and returns the surviving asteroids.
 *
 * @param asteroids Array where |val| = size, sign = direction
 * @returns Array of asteroids remaining after all collisions
 */
export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (const ast of asteroids) {
    let alive = true;

    // Collision only when stack top moves right (+) and current moves left (−)
    while (
      alive &&
      ast < 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0
    ) {
      const top = stack[stack.length - 1];

      if (top < -ast) {
        stack.pop(); // top asteroid is smaller — it explodes
      } else if (top === -ast) {
        stack.pop(); // equal size — both explode
        alive = false;
      } else {
        alive = false; // current asteroid is smaller — it explodes
      }
    }

    if (alive) stack.push(ast);
  }

  return stack;
}
