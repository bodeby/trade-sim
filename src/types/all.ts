export type TimeStep = {
  price: number;
};

export type TransactionList = Array<{ action: String; step: TimeStep }>;
