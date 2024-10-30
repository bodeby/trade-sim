import { TimeStep } from "../types/all";

class Transaction {
  step: TimeStep;
  action: string;
  size: number;
  value: number;

  constructor(action: string, size: number, step: TimeStep) {
    this.action = action;
    this.step = step;
    this.size = size;
    this.value = step.price * size;
  }
}

export default Transaction;
