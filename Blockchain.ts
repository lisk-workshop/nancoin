import * as _ from "lodash";
import {Block} from "./Block";

export class Blockchain {
    get blockchainArray(): Block[] {
        return this._blockchainArray;
    }

    private readonly _blockchainArray: Block[] = [];

    protected addBlockToChain(block: Block): void {
        this.blockchainArray.push(block);
    }

    public getBlockByBlockNumber(blockNumber: number): undefined | Block {
        const foundBlock = _.find(this.blockchainArray, block => block.blockNumber === blockNumber);

        return _.isEmpty(foundBlock) ? undefined : foundBlock;
    }
}