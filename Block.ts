import * as crypto from 'crypto'

export class Block {
    get blockNumber(): number {
        return this._blockNumber;
    }

    get timestamp(): number {
        return this._timestamp;
    }

    get data(): string {
        return this._data;
    }

    get previous_hash(): string {
        return this._previous_hash;
    }

    get hash(): string {
        return this._hash;
    }

    private readonly _hash: string;

    protected constructor(
        private readonly _blockNumber: number,
        private readonly _timestamp: number,
        private readonly _data: string,
        private readonly _previous_hash: string
    ) {
        this._blockNumber = _blockNumber;
        this._timestamp = _timestamp;
        this._data = _data;
        this._previous_hash = _previous_hash;
        this._hash = this.hashBlock();
    }

    private hashBlock(): string {
        const sha = crypto.createHash('sha256');

        sha.update(
            this._blockNumber +
            this._timestamp +
            this._data +
            this._previous_hash);

        return sha.digest('hex');
    }
}