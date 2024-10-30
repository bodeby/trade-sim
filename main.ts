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

// Event Loop
const eventLoop = (sim: Simulator, stats: Statistics) => {
  sim.timeframe.forEach((event) => {
    const action = sim.decideAction(event);
    sim.processTransaction(action, event);

    // Could calculate and update stats here
    if (action === "sell") stats.updateStats(action, sim.balance);
  });

  stats.printStats(); // Print final statistics after loop
};

// Sample timeframe data
const timeframe = [{ price: 40 }, { price: 60 }, { price: 120 }, { price: 80 }];

// Main setup
const main = () => {
  const sim = new Simulator(timeframe);
  const stats = new Statistics();
  eventLoop(sim, stats);
};

main();
