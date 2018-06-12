import * as crypto from 'crypto'

export class Block {
    private index: number;
    private timestamp: number;
    private data: string;
    private previous_hash: string;
    private hash: string;

    constructor(index: number, timestamp: number, data: string, previous_hash: string) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previous_hash = previous_hash;
        this.hash = this.hash_block();
    }

    hash_block() {
        const sha = crypto.createHash('sha256');

        sha.update(this.index +
            this.timestamp +
            this.data +
            this.previous_hash);

        return sha.digest('hex');
    }
}