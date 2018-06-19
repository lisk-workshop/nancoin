import * as crypto from 'crypto'
import {Block} from "../Interfaces/Block";

export class GenesisBlock implements Block {
    get blockNumber(): number {
        return this._blockNumber;
    }

    get timestamp(): number {
        return this._timestamp;
    }

    get data(): string {
        return this._data;
    }

    get previousHash(): string {
        return this._previousHash;
    }

    get hash(): string {
        return this._hash;
    }

    private readonly _blockNumber: number = 0;
    private readonly _timestamp: number = new Date().getTime();
    private readonly _data: string = '';
    private readonly _previousHash: string = '0';
    private readonly _hash: string = this.hashBlock();

    private hashBlock(this: GenesisBlock): string {
        const sha = crypto.createHash('sha256');

        sha.update(
            this.blockNumber +
            this.timestamp +
            this.data +
            this.previousHash);

        return sha.digest('hex');
    }
}