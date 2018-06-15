import {Block} from "./block";

export class NextBlock extends Block {
    constructor(lastBlock: Block, data: string) {
        super(
            lastBlock.index + 1,
            new Date().getTime(),
            data,
            lastBlock.hash
        );
    }
}