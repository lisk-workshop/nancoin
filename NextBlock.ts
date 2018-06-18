import {Block} from "./Block";

export class NextBlock extends Block {
    constructor(previousBlock: Block, newBlockData: string) {
        super(
            previousBlock.blockNumber + 1,
            new Date().getTime(),
            newBlockData,
            previousBlock.hash
        );
    }
}