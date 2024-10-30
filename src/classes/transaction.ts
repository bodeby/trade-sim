import { TimeStep } from "../types/all";

class Transaction {
  step: TimeStep;
  action: string;

  constructor(action: string, step: TimeStep) {
    this.action = action;
    this.step = step;
  }
}

export default Transaction;
