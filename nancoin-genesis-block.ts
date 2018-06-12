import {Block} from "./nancoin-block";

export class NancoinGenesisBlock {
    // Manually construct a block with
    // index zero and arbitrary previous hash
    constructor() {
        return new Block(0, new Date().getTime(), 'Genesis Block', '0');
    }
}