import * as crypto from "crypto";
import {BlockData} from "./BlockData";
import {TransactionData} from "./TransactionData";

export class Block implements BlockData {
    get blockNumber(): number {
        return this._blockNumber;
    }

    get nonce(): number {
        return this._nonce;
    }

    get timestamp(): number {
        return this._timestamp;
    }

    get transactions(): TransactionData[] {
        return this._transactions;
    }

    get previousHash(): string {
        return this._previousHash;
    }

    get hash(): string {
        return this._hash;
    }

    private readonly _hash: string;

    constructor(
        private readonly _blockNumber: number,
        private readonly _nonce: number,
        private readonly _timestamp: number,
        private readonly _transactions: TransactionData[],
        private readonly _previousHash: string,
    ) {
        this._hash = this.hashBlock();
    }

    hashBlock(): string {
        const sha = crypto.createHash('sha256');

        sha.update(
            this.blockNumber +
            this.nonce +
            this.timestamp +
            JSON.stringify(this.transactions) +
            this.previousHash);

        return sha.digest('hex');
    }
}