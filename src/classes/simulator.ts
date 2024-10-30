// Simulator class with actions
interface Simulator {
  timeframe: any[];
  balance: number;
  holdings: number;
}

class Simulator implements Simulator {
  balance: number;
  holdings: number;
  timeframe: any[];

  constructor(timeframe: any[]) {
    this.timeframe = timeframe;
    this.balance = 10000; // Starting balance
    this.holdings = 0; // Number of shares held
  }

  // Decide action: buy, sell, or hold
  decideAction(event: any): string {
    // Simple logic: buy if price is low, sell if high, else hold
    if (event.price < 50) return "buy";
    else if (event.price > 100) return "sell";
    else return "hold";
  }

  // Process transaction based on action
  processTransaction(action: string, event: any) {
    const amount = 10; // Fixed amount per transaction for simplicity

    if (action === "buy" && this.balance >= event.price * amount) {
      this.balance -= event.price * amount;
      this.holdings += amount;
      console.log(
        `Bought ${amount} at $${event.price}, new balance: $${this.balance}`
      );
    } else if (action === "sell" && this.holdings >= amount) {
      this.balance += event.price * amount;
      this.holdings -= amount;
      console.log(
        `Sold ${amount} at $${event.price}, new balance: $${this.balance}`
      );
    }
  }
}

export default Simulator;
