import { TimeStep } from "../types/all";

class Transaction {
  action: string;
  step: TimeStep;

  constructor(action: string, step: TimeStep) {
    this.action = action;
    this.step = step;
  }
}

export default Transaction;
