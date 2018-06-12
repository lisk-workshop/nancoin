import * as crypto from 'crypto'

export class Block {
    private readonly _index: number;
    private readonly _timestamp: number;
    private readonly _data: string;
    private readonly _previous_hash: string;
    private readonly _hash: string;

    constructor(index: number, timestamp: number, data: string, previous_hash: string) {
        this._index = index;
        this._timestamp = timestamp;
        this._data = data;
        this._previous_hash = previous_hash;
        this._hash = this.hash_block();
    }

    get index(): number {
        return this._index;
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

    hash_block(): string {
        const sha = crypto.createHash('sha256');

        sha.update(this._index +
            this._timestamp +
            this._data +
            this._previous_hash);

        return sha.digest('hex');
    }
}