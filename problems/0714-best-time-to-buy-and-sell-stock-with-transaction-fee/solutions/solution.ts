/**
 * Maximizes profit with unlimited transactions and a per-transaction fee.
 * State machine: `cash` = max profit when NOT holding stock,
 *                `hold` = max profit when holding stock.
 *
 * @param prices Daily stock prices
 * @param fee    Fee charged per completed transaction
 * @returns      Maximum profit
 */
export function maxProfit(prices: number[], fee: number): number {
  let cash = 0; // not holding any stock
  let hold = -prices[0]; // bought on day 0

  for (let i = 1; i < prices.length; i++) {
    const newCash = Math.max(cash, hold + prices[i] - fee); // sell
    const newHold = Math.max(hold, cash - prices[i]); // buy
    cash = newCash;
    hold = newHold;
  }

  return cash;
}
