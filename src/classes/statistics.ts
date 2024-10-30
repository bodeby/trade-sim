// Statistics class for tracking performance
import Transaction from "./transaction";

class Statistics {
  balance: number;  // initial balance
  books: number;    // initial number of MwH on books
  trades: number;   // number of trades
  profit: number;   // profit or loss

  constructor(balance: number = 1000) {
    this.balance = balance;
    this.books = 0;
    this.trades = 0;
    this.profit = 0;
  }

  // New method to handle transactions
  handleTransaction(transaction: Transaction) {
    this.trades++;

    switch (transaction.action) {
      case "buy":
        this.balance -= transaction.value;
        this.books += transaction.size;
        break;
      case "sell":
        this.balance += transaction.value;
        this.books -= transaction.size;
        break;
    }
  }

  getStatistics() {
    return {
      balance: this.balance,
      books: this.books,
      trades: this.trades,
      profit: this.profit,
    };
  }
}

export default Statistics;
