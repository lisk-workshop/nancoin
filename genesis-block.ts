import {Block} from "./block";

export class GenesisBlock {
    private readonly genesisBlock: Block;

    // Manually construct a block with index zero, and arbitrary previous hash
    constructor() {
        this.genesisBlock = new Block(
            0,
            new Date().getTime(),
            'Genesis Block',
            '0');
    }
}