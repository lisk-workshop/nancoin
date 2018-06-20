import {TransactionData} from "./TransactionData";

export interface BlockData {
    readonly blockNumber: number;
    readonly nonce: number;
    readonly timestamp: number;
    readonly transactions: TransactionData[];
    readonly previousHash: string;
    readonly hash: string;

    hashBlock(): string;
}