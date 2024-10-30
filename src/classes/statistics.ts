// Statistics class for tracking performance
import Transaction from "./transaction";

class Statistics {
  balance: number;
  trades: number;
  profit: number;

  constructor(balance: number = 1000) {
    this.balance = balance;
    this.trades = 0;
    this.profit = 0;
  }

  // New method to handle transactions
  handleTransaction(transaction: Transaction) {
    const { action, step } = transaction;
    if (action === "buy" || action === "sell") this.trades += 1;
    this.profit += 0;
  }

  getStatistics() {
    return {
      balance: this.balance,
      trades: this.trades,
      profit: this.profit,
    };
  }
}

export default Statistics;
