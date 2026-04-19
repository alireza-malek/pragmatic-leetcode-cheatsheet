/**
 * Returns up to 3 lexicographically smallest product suggestions
 * for each prefix of searchWord.
 *
 * @param products   Array of product names
 * @param searchWord The word being typed character by character
 * @returns          2D array of suggestions per prefix
 */
export function suggestedProducts(
  products: string[],
  searchWord: string,
): string[][] {
  products.sort();
  const result: string[][] = [];

  let lo = 0;
  let hi = products.length - 1;

  for (let i = 0; i < searchWord.length; i++) {
    const ch = searchWord[i];

    // Narrow the window to products matching the current prefix
    while (lo <= hi && (products[lo].length <= i || products[lo][i] !== ch)) {
      lo++;
    }
    while (lo <= hi && (products[hi].length <= i || products[hi][i] !== ch)) {
      hi--;
    }

    const suggestions: string[] = [];
    for (let j = lo; j <= Math.min(lo + 2, hi); j++) {
      suggestions.push(products[j]);
    }
    result.push(suggestions);
  }

  return result;
}
