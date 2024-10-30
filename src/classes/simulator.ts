import { TimeStep } from "../types/all";

// classes
import Statistics from "./statistics";
import Transaction from "./transaction";

// Simulator class with actions
interface ISimulator {
  timeframe: TimeStep[];
  timestep: number;
  transactions: Transaction[];
  statistics: Statistics;
}

class Simulator implements ISimulator {
  timeframe: TimeStep[];
  timestep: number;
  statistics: Statistics;
  transactions: Transaction[];

  constructor(timeframe: TimeStep[], statistics: Statistics) {
    this.timeframe = timeframe;
    this.timestep = 0; // Current timestep
    this.statistics = statistics;
    this.transactions = [];
  }

  // Process transaction based on action
  process(action: string, size: number, step: TimeStep) {
    // implement the logic for processing transactions
    let gain = action === "buy" ? -size : size;
    return new Transaction(action, gain, step);
  }

  decide(step: TimeStep) {
    // implement the logic for deciding on the action
    const resolved = Math.random() > 0.5 ? "buy" : "sell";
    return { action: resolved, size: 10 };
  }

  simulate() {
    // Loop through each timestep
    this.timeframe.forEach((step) => {
      const { action, size } = this.decide(step);
      const transaction = this.process(action, size, step);

      // Handle the transaction
      this.transactions.push(transaction);
      this.statistics.handleTransaction(transaction);
    });

    // Display the fianl simulation results
    console.table(this.statistics.getStatistics());
    console.log(this.transactions);
  }
}

export default Simulator;
