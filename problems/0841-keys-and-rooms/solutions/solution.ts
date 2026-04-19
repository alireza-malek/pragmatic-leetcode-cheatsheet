/**
 * Returns true if all rooms can be visited starting from room 0.
 *
 * @param rooms rooms[i] = list of keys found in room i
 * @returns Whether all rooms are reachable
 */
export function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Set<number>();
  const stack: number[] = [0];

  while (stack.length > 0) {
    const room = stack.pop()!;
    if (visited.has(room)) continue;
    visited.add(room);

    for (const key of rooms[room]) {
      if (!visited.has(key)) stack.push(key);
    }
  }

  return visited.size === rooms.length;
}
