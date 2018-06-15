import * as crypto from 'crypto'

export class Block {
    protected get index(): number {
        return this._index;
    }

    protected get timestamp(): number {
        return this._timestamp;
    }

    protected get data(): string {
        return this._data;
    }

    protected get previous_hash(): string {
        return this._previous_hash;
    }

    protected get hash(): string {
        return this._hash;
    }

    private readonly _hash: string;

    constructor(
        private readonly _index: number,
        private readonly _timestamp: number,
        private readonly _data: string,
        private readonly _previous_hash: string) {
        this._hash = this.hash_block();
    }

    private hash_block(): string {
        const sha = crypto.createHash('sha256');

        sha.update(this._index +
            this._timestamp +
            this._data +
            this._previous_hash);

        return sha.digest('hex');
    }
}