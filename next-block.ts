import {Block} from "./block";

export class NextBlock {
    constructor(last_block: Block, data: string) {
        return new Block(
            last_block.index + 1,
            new Date().getTime(),
            data,
            last_block.hash);
    }
}