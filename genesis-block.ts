import {Block} from "./block";

export class GenesisBlock extends Block {
    // Manually construct a block with index zero, and arbitrary previous hash
    constructor() {
        super(
            0,
            new Date().getTime(),
            'Genesis Block',
            '0'
        );
    }
}