/**
 * For each spell, counts the number of potions forming a successful pair.
 * Sorts potions, then binary-searches for the threshold per spell.
 *
 * @param spells  Array of spell strengths
 * @param potions Array of potion strengths
 * @param success Minimum product threshold
 * @returns       Array of successful pair counts per spell
 */
export function successfulPairs(
  spells: number[],
  potions: number[],
  success: number,
): number[] {
  potions.sort((a, b) => a - b);
  const m = potions.length;

  return spells.map((spell) => {
    // Minimum potion needed: ceil(success / spell)
    const minPotion = Math.ceil(success / spell);

    // Binary search for first potion >= minPotion
    let lo = 0;
    let hi = m;
    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (potions[mid] < minPotion) lo = mid + 1;
      else hi = mid;
    }

    return m - lo; // all potions from lo onwards are successful
  });
}
