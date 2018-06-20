import {TransactionData} from "./TransactionData";

export class Transaction implements TransactionData {
    constructor(
        readonly sender: string,
        readonly receiver: string,
        readonly amount: number
    ) {}
}