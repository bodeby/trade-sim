// Statistics class for tracking performance
class Statistics {
  trades: number;
  profit: number;

  constructor() {
    this.trades = 0;
    this.profit = 0;
  }

  updateStats(action: string, profit: number) {
    if (action === "buy" || action === "sell") this.trades += 1;
    this.profit += profit;
  }

  printStats() {
    console.log(`Total Trades: ${this.trades}, Net Profit: $${this.profit}`);
  }
}

export default Statistics;
